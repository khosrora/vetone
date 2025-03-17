import React from "react";
import MediaThemeTailwindAudio from "player.style/tailwind-audio/react";

function Audio() {
  return (
    <div className="">
      <MediaThemeTailwindAudio className="w-full" style={{ direction: "ltr" }}>
        <video
          slot="media"
          src="https://stream.mux.com/fXNzVtmtWuyz00xnSrJg4OJH6PyNo6D02UzmgeKGkP5YQ/low.mp4"
        ></video>
      </MediaThemeTailwindAudio>
    </div>
  );
}

export default Audio;
