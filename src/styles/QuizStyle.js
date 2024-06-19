import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #F5F6FA;
  }
`;

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const QuizContainer = styled.div`
  width: 850px;
  height: 820px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 50px;
  margin-left: 80px;
`;



export const CenterdContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
