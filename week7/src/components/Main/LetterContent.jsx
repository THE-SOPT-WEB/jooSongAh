import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { reqAPI } from "../../utils/lib";

export default function CardWrapper() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    async function getTotLetter() {
      const { data } = await reqAPI.get("/letter");
      setLetters(data.data);
    }
    getTotLetter();
  }, []);

  // useEffect(() => {
  //   console.log(">>>>>", letters);
  // }, [letters]);

  return (
    <>
      {letters &&
        letters.map((letter, idx) => {
          const { name, password, hint, content, images, _id } = letter;
          return (
            <StCardWrapper key={_id}>
              <StTitle>{name}님이 남긴 편지예요.</StTitle>
              <StContent>{content}</StContent>
              <Link to="/editLetterPage" state={_id}>
                <button>편지 내맘대로 수정하기</button>
              </Link>
            </StCardWrapper>
          );
        })}
    </>
  );
}

const StCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  flex-wrap: wrap;

  width: 50%;
  height: 200px;

  background-color: rgb(182, 230, 206);

  margin: 20px;
`;

const StTitle = styled.strong`
  font-size: 20px;
`;

const StContent = styled.p`
  font-size: 20px;
`;
