import React from "react";
import moment from "jalali-moment";

function Moment({ time }: { time: string }) {
  return (
    <>
      {!!time && (
        <p>{moment(time, "YYYY/MM/DD").locale("fa").format("YYYY/MM/DD")}</p>
      )}
    </>
  );
}

export default Moment;
