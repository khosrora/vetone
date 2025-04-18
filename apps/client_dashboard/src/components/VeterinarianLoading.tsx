import React from "react";

function VeterinarianLoading() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex w-full flex-col gap-4">
          <div className="skeleton h-24 w-full"></div>
          <div className="skeleton h-4 w-3/4"></div>
          <div className="skeleton h-4 w-2/4"></div>
        </div>
      ))}
    </div>
  );
}

export default VeterinarianLoading;
