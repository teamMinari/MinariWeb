import styled, { createGlobalStyle, css } from "styled-components";
import StarImg from"../../assets/image/star.svg";

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

export const starImg = styled.img.attrs({
    src: StarImg,
    alt: "starIcon",
  })`
`;

export const wordContainer = styled.div`
    width: 210px;
    height: 60px;
    background-color: #F5F6FA;
    border-radius: 7px;
    padding-left: 35px;
    display: flex;
    margin-right: 55px;
    font-weight: 600;
    align-items: center;
    margin-bottom: 25px;
`;

export const text = styled.div`
  font-weight: 600;
`;

export const starsContainer = styled.div`
  display: flex;
  margin-left: 10px; /* txt와 score 사이의 공간 */
  margin-right: 35px; /* score와 우측 끝 사이의 공간 */
`;