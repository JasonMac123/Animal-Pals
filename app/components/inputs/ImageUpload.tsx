"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ value, onChange }) => {
  const handleUpload = useCallback(
    (photo: any) => {
      onChange(photo.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="asmz6mn9"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            className="relative cursor-pointer hover:opacity-50 transition border-2 p-20 flex justify-center items-center gap-4 text-black"
            onClick={() => open?.()}
          >
            <MdAddPhotoAlternate size={60} /> Upload a photo!
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image alt="uploaded Image" fill src={value} />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
