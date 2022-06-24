import React from "react";
import styled from "styled-components";

import PhotoAttach from "./PhotoAttach";

export default function WriteLetter() {
  return (
    <>
      <StHeader>편지를 써보세요!</StHeader>
      <StFormWrapper>
        <label>이름</label>
        <StInput placeholder="이름을 입력해주실?" />
        <label>내용</label>
        <StInput placeholder="무슨 내용?" />
        <label>비밀번호</label>
        <StInput placeholder="비밀번호를 통해 편지를 잠구실?" />
        <label>비밀번호 힌트</label>
        <StInput placeholder="비밀번호 힌트 주실?" />
        <label>썸네일</label>
        <PhotoAttach />
      </StFormWrapper>
      <StSendBtn>비밀편지 보내기</StSendBtn>
    </>
  );
}

const StHeader = styled.h1`
  font-size: 20px;
`;

const StFormWrapper = styled.section`
  display: flex;
`;

const StInput = styled.input``;

const StSendBtn = styled.button``;
