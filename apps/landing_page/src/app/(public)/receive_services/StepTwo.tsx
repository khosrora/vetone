import { AnimalsContext } from "@/lib/context/animals.context";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { toast } from "sonner";

import { transformData } from "@/lib/utils/functions";
import { LINK_DASHBOARD_CLIENT } from "@repo/lib/links";
import dynamic from "next/dynamic";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/layouts/mobile.css";

const MapCm = dynamic(() => import("./MapCm"), {
  ssr: false,
});

function StepTwo({ veterinarianId , type }: { veterinarianId: string , type : string }) {
  const [date, setDate] = useState<any>();
  const [dateValue, setDateValue] = useState<string[]>([]);
  const [latlong, setLatlong] = useState<[number, number] | undefined>();

  const { push } = useRouter();
  const { animals } = useContext(AnimalsContext);
  const { data: session } = useSession();
  const token: string = session?.token.token!;

  const [image, setImage] = useState<File | null>(null);
  const [video, setVideo] = useState<File | null>(null);
  const [voice, setVoice] = useState<File | null>(null);
  const [textContent, setTextContent] = useState<string>("");
  const [load, setLoad] = useState<boolean>(false);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const addAudioElement = (blob: Blob) => {
    toast.success("فایل صوتی با موفقیت ذخیره شد.");
    setVoice(blob as File);
    const audio = document.createElement("audio");
    const list = document.getElementById("list")!;
    list.innerHTML = "";

    const url = URL.createObjectURL(blob);
    audio.src = url;
    audio.controls = true;
    list.appendChild(audio);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setImage(file!);
    setImagePreview(URL.createObjectURL(file!));
  };
  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoPreview(null);
    const file = event.target.files?.[0];
    setVideo(file!);
    setVideoPreview(URL.createObjectURL(file!));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value);
  };

  const handleSendRequest = async () => {
    setLoad(true);
    const formData = new FormData();
    const dateRequest = date
      ?.toDate()
      .toLocaleDateString("zh-Hans-CN")
      .replaceAll("/", "-");

    const animalsNewData = transformData(animals);
    if (!!image) formData.append("date", dateRequest);
    if (!!image) formData.append("image", image);
    if (!!video) formData.append("video", video);
    if (!!voice) formData.append("voice", voice);
    if (!!textContent) formData.append("description", textContent);
    if (!!latlong) formData.append("latitude", String(latlong[0]));
    if (!!latlong) formData.append("longitude", String(latlong[1]));
    if (!!veterinarianId) formData.append("veterinarian", veterinarianId);
    if (!!animals) formData.append("animals", JSON.stringify(animalsNewData));
    if (!!type) formData.append("type", type);

    try {
      const { status } = await postDataAPI(
        `/veterinary/request/`,
        formData,
        token
      );
      if (status === 201) {
        toast.success("درخواست شما با موفقیت ثبت شد.");
        push(`${LINK_DASHBOARD_CLIENT}/my_requests`);
        setLoad(false);
      }
    } catch (error) {
      setLoad(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="form-control col-span-2 lg:col-span-1">
        <div className="label">
          <span className="label-text-alt">زمان انجام درخواست</span>
        </div>
        <DatePicker
          value={date}
          onChange={setDate}
          key={`${1}`}
          calendar={persian}
          locale={persian_fa}
          calendarPosition="bottom-right"
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "1.3rem",
            marginTop: ".5rem",
            border: "1px solid rgb(226 232 240)",
          }}
          containerStyle={{
            width: "100%",
          }}
          placeholder="مثال :‌ 1 / 2 / 1400"
          className="rmdp-mobile"
        />
      </div>
      {/* <Back title="انتخاب مجدد" /> */}
      <div className="border-2 border-dashed border-zinc-200 bg-white rounded-md relative flex flex-col justify-center items-center py-8 lg:py-16">
        <input
          accept="video/*"
          type="file"
          className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
          onChange={(e) => handleVideoChange(e)}
        />
        {videoPreview ? (
          <video controls className="mt-4 w-60 h-auto">
            <source src={videoPreview} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="contents">
            {/* <IconAddvideo /> */}
            <small className="py-3 text-gray-700">
              <p className="inline text-green-500 px-1">بارگذاری</p> ویدیو مورد
              نیاز
            </small>
          </div>
        )}
      </div>

      <div className="border-2 border-dashed border-zinc-200 bg-white rounded-md relative flex flex-col justify-center items-center py-8 lg:py-12 text- ">
        <input
          accept="image/*"
          type="file"
          className="absolute top-0 left-0 right-0 bottom-0 opacity-0 cursor-pointer"
          onChange={(e) => handleImageChange(e)}
        />
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Image Preview"
            className="mt-4 w-60 h-auto"
          />
        ) : (
          <div className="contents">
            {/* <IconAddimg /> */}
            <small className="py-3 text-gray-700">
              <p className="inline text-green-500 px-1">بارگذاری</p> تصاویر مورد
              نیاز
            </small>
          </div>
        )}
      </div>

      <div>
        <textarea
          className="border-2 border-dashed border-zinc-200 bg-white w-full min-h-32 p-4 rounded placeholder:text-xs"
          placeholder="توضیحات جاندار را اینجا وارد کنید"
          value={textContent}
          onChange={handleTextChange}
        />
      </div>
      <div className="border-2 border-dashed bg-white p-4 rounded-md flex flex-col lg:flex-row lg:justify-between">
        <AudioRecorder
          onRecordingComplete={addAudioElement}
          audioTrackConstraints={{
            noiseSuppression: true,
            echoCancellation: true,
            // autoGainControl,
            // channelCount,
            // deviceId,
            // groupId,
            // sampleRate,
            // sampleSize,
          }}
          onNotAllowedOrFound={(err: any) => console.table(err)}
          //   downloadOnSavePress={true}
          downloadFileExtension="webm"
          // mediaRecorderOptions={{
          //   audioBitsPerSecond: 256000,
          // }}
          showVisualizer={true}
        />
        <div className="" id="list"></div>
      </div>
      <MapCm setLatlong={setLatlong} />
      <Btn
        className="w-full"
        onClick={() => handleSendRequest()}
        loading={load}
        disabled={load}
      >
        ثبت درخواست
      </Btn>
    </div>
  );
}

export default StepTwo;
