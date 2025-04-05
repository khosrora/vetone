import React from "react";
import moment from "jalali-moment";

function Moment({ time }: { time: string }) {
  return (
    <>
      {!!time && (
        <p className="text-[12px] lg:text-sm">{moment(time, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p>
      )}
    </>
  );
}

export default Moment;
