import React from "react";
import { IconPhotoHexagon ,IconVideoPlus } from "@tabler/icons-react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { Btn } from "@repo/ui/btn";

function StepTwo() {
  return (
    <div className="space-y-4">
      <div className="">
        <p className="text-[14px] font-bold mb-2">تصویر</p>
        <div className="border-2 border-dashed rounded-md min-h-32 flex flex-col justify-center items-center relative space-y-2">
          <IconPhotoHexagon size={48} />
          <p className="text-[10px] lg:text-xs">افزودن عکس های دام</p>
          <input
            className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
            type="file"
            multiple
          />
        </div>
      </div>
      <label className="form-control">
        <div className="label">
          <span className="label-text-alt">توضیحات</span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24"
          placeholder="توضیحات دام را بنویسید"
        ></textarea>
        {/* <div className="label">
          <span className="label-text-alt">Your bio</span>
        </div> */}
      </label>
      <div className="border-2 border-dashed bg-white p-4 rounded-md flex flex-col lg:flex-row lg:justify-between">
        <AudioRecorder
          //   onRecordingComplete={addAudioElement}
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
          onNotAllowedOrFound={(err) => console.table(err)}
          //   downloadOnSavePress={true}
          downloadFileExtension="webm"
          // mediaRecorderOptions={{
          //   audioBitsPerSecond: 256000,
          // }}
          showVisualizer={true}
        />
        <div className="" id="list"></div>
      </div>
      <div className="">
        <p className="text-[14px] font-bold mb-2">ویدیو</p>
        <div className="border-2 border-dashed rounded-md min-h-32 flex flex-col justify-center items-center relative space-y-2">
          <IconVideoPlus size={48}/>
          <p className="text-[10px] lg:text-xs">فایل مورد نظر خود را انتخای نمایید</p>
          <input
            className="absolute top-0 right-0 bottom-0 left-0 opacity-0 cursor-pointer"
            type="file"
            multiple
          />
        </div>
      </div>
      <Btn className="w-full" onClick={() => {}}>
        ثبت درخواست
      </Btn>
    </div>
  );
}

export default StepTwo;
