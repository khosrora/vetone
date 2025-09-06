import { IconPhotoFilled } from "@tabler/icons-react";

import React from "react";

const ImageUpload = ({
  label,
  preview,
  onChange,
  rounded = false,
}: {
  label: string;
  preview: string | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rounded?: boolean;
}) => (
  <div className="flex flex-col items-center space-y-2">
    <p className="text-sm font-bold">{label}</p>
    <label
      className={`border-2 border-dashed ${
        rounded ? "rounded-full h-32 w-32" : "rounded-md w-full h-32"
      } flex items-center justify-center overflow-hidden cursor-pointer`}
    >
      {preview ? (
        <img src={preview} alt={label} className="object-cover w-full h-full" />
      ) : (
        <div className="flex flex-col items-center text-gray-500">
          <IconPhotoFilled size={36} />
          <p className="text-xs">افزودن عکس</p>
        </div>
      )}
      <input type="file" className="hidden" onChange={onChange} />
    </label>
  </div>
);

export default ImageUpload;
