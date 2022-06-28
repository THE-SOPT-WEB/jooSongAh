import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";

export default function PhotoAttach({ getFileData }) {
  const [imgFile, setImgFile] = useState("");

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImgFile(reader.result);
        resolve();
      };
    });
  };

  useEffect(() => {
    getFileData(imgFile);
  }, [imgFile]);

  return (
    <StPhotoUploadWrapper>
      이미지 업로드(jpg, jpeg, png)
      <input
        type="file"
        accept="image/*"
        id="images"
        multiple
        onChange={(e) => {
          e.preventDefault();
          encodeFileToBase64(e.target.files[0]);
        }}
      />
      <StImgWrapper>
        {imgFile && <img src={imgFile} alt="preview"></img>}
      </StImgWrapper>
    </StPhotoUploadWrapper>
  );
}

const StPhotoUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const StImgWrapper = styled.div`
  & > img {
    height: 300px;
  }
`;
