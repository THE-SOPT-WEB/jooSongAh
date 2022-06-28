import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PhotoAttach from "./AttachPhoto";
import { reqAPI } from "../../utils/lib";

export default function WriteLetter() {
  const [imgsrc, setImgsrc] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(">>>>handle submit");
    e.preventDefault();

    const postData = new FormData();

    [...e.target].forEach((input) => {
      if (!(input instanceof HTMLInputElement)) return;
      if (input.type === "file") {
        // console.log(">>>이게 맞나", imgsrc);
        postData.append(input.id, imgsrc);
      } else {
        postData.append(input.id, input.value);
      }
      console.log("input value >>>", input.value);
    });

    await reqAPI.post("/letter", postData);
    navigate("/");
  };

  //자식->부모 데이터 전달
  const getFileData = (imgsrc) => {
    setImgsrc(imgsrc);
  };

  return (
    <>
      <StHeader>편지를 써보세요!</StHeader>
      <StFormWrapper onSubmit={(e) => handleSubmit(e)}>
        <label>이름</label>
        <StInput type="text" id="name" placeholder="이름을 입력해주실?" />
        <label>내용</label>
        <StInput type="text" id="content" placeholder="무슨 내용?" />
        <label>비밀번호</label>
        <StInput
          type="text"
          id="password"
          placeholder="비밀번호를 통해 편지를 잠구실?"
        />
        <label>비밀번호 힌트</label>
        <StInput type="text" id="hint" placeholder="비밀번호 힌트 주실?" />
        <label>썸네일</label>
        <PhotoAttach getFileData={getFileData} />
        <StSendBtn>비밀편지 보내기</StSendBtn>
      </StFormWrapper>
    </>
  );
}

const StHeader = styled.h1`
  font-size: 20px;
`;

const StFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 800px;

  padding: 20px;

  background-color: rgb(182, 230, 206);

  & > label {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const StInput = styled.input``;

const StSendBtn = styled.button``;
