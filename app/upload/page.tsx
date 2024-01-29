"use client";
import { Button } from "@/components/ui/button";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import { useState } from "react";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage
          src={publicId}
          width={270}
          height={180}
          alt="uploaded image"
        />
      )}
      <CldUploadWidget
        uploadPreset="qmr0zkt7"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <Button onClick={() => open()} className="btn-dark-1">
            Upload
          </Button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
