// import WriteLetter from "../WriteLetter/writeLetter";
import CardWrapper from "./LetterWrapper";
import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";

export default function Main() {
  return (
    <>
      <Stheader>
        <h1>웹파트 비밀 편지함</h1>
        <Link to={"/writeLetterPage"}>
          <button>편지쓰러가기</button>
        </Link>
      </Stheader>
      <CardWrapper />
    </>
  );
}

const Stheader = styled.section`
  display: flex;
`;
