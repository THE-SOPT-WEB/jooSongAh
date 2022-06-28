import React from "react";
import { useState, useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { reqAPI } from "../../utils/lib";

export default function EditLetter() {
  const navigate = useNavigate();
  const { state: _id } = useLocation();
  const [letter, setLetter] = useState([]);

  useEffect(() => {
    async function getIDLetter() {
      const { data } = await reqAPI.patch(`/letter/${_id}`);
      setLetter(data.data);
    }
    getIDLetter();
  }, []);

  const handleSubmit = async (e) => {
    console.log(">>>>handle submit");
    e.preventDefault();

    const patchObject = new Object();

    [...e.target].forEach((input) => {
      if (!(input instanceof HTMLInputElement)) return;
      patchObject[input.id] = input.value;
      console.log("input value >>>", input.value);
    });

    await reqAPI.patch(`/letter/${_id}`, patchObject);
    navigate("/");
  };

  return (
    <>
      <StEditWrapper onSubmit={(e) => handleSubmit(e)}>
        <label>이름</label>
        <StName
          type="text"
          id="name"
          defaultValue={letter.name}
          autoFocus
        ></StName>
        <label>내용</label>
        <StName
          type="text"
          id="content"
          defaultValue={letter.content}
          autoFocus
        ></StName>
        <label>비밀번호</label>
        <StName
          type="text"
          id="password"
          defaultValue={letter.password}
          autoFocus
        ></StName>
        <label>비밀번호 힌트</label>
        <StName
          type="text"
          id="hint"
          defaultValue={letter.hint}
          autoFocus
        ></StName>
        <StSubmitBtn type="submit"> 몰래 수정하기</StSubmitBtn>
      </StEditWrapper>
    </>
  );
}

const StEditWrapper = styled.form`
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

const StName = styled.input`
  width: 80%;
  height: 40px;

  margin-bottom: 30px;
  font-size: 20px;
`;

const StSubmitBtn = styled.button`
  width: 80%;
`;
