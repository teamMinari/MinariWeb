import styled, { createGlobalStyle } from "styled-components";
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


export const RecommendWordContainer = styled.div`
  width: 900px;
  height: 310px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  align-items: center;
  justify-content: flex-start;
`;
