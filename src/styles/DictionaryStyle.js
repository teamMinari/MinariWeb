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

export const PageContent = styled.div`
  display: flex;
  z-index: 1;
`;

export const MainContent = styled.div`
  flex-grow: 1;
  margin-left: 70px;
  margin-top: 100px;
`;

export const DictionaryContainer = styled.div`
  width: 900px;
  height: 1800px;
  background-color: #ffffff;
  border-radius: 10px;
`;