import styled, { createGlobalStyle, css } from "styled-components";
import houseImg from"../../assets/image/house.png";

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
  margin-left: 70px;
  margin-top: 47px;
`;

export const CenteredContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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

export const pageText = styled.div`
  font-weight: 700;
  font-size: 25px;
  margin-left: 35px;
  margin-top: 45px;
`;

export const wordSpace = styled.div`
  display: flex;
  margin-left: 35px;
  flex-flow: row wrap;
  margin-top:35px;
`;
export const menu = styled.div`
  width: 900px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  align-items: center;
  justify-content: flex-start;
`;
