import { AnimalsContext } from "@/lib/context/animals.context";
import { postDataAPI } from "@/lib/fetch/fetch_axios";
import { Btn } from "@repo/ui/btn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { toast } from "sonner";

function StepTwo() {
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
    // console.log(blob as File);
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
    setImage(file!); // Set the image URL for preview
    setImagePreview(URL.createObjectURL(file!));
  };
  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoPreview(null);
    const file = event.target.files?.[0];
    setVideo(file!); // Set the image URL for preview
    setVideoPreview(URL.createObjectURL(file!));
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(event.target.value); // Update state with textarea value
  };

  const handleSendRequest = async () => {
    setLoad(true);
    const formData = new FormData();
    if (!!image) formData.append("image", image!);
    if (!!video) formData.append("video", video!);
    if (!!voice) formData.append("voice", voice!);
    if (!!textContent) formData.append("description", textContent!);

    try {
      const { status } = await postDataAPI(
        `veterinary/request/`,
        formData,
        token
      );
      if (status === 201) {
        toast.success("درخواست شما با موفقیت ثبت شد.");
      }
      setLoad(false);
    } catch (error) {
      setLoad(false);
    }
  };

  return (
    <div className="space-y-4">
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
      <Btn className="w-full" onClick={() => handleSendRequest()}>
        ثبت درخواست
      </Btn>
    </div>
  );
}

export default StepTwo;
