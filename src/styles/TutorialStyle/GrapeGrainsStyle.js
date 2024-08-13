import styled, { createGlobalStyle } from "styled-components";
import grapeGrainsSrc from "../../assets/image/grapegrains.svg";
import LikeImgSrc from "../../assets/image/heartImg.svg";

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

export const GrapeSeedContainer = styled.div`
  width: 900px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  margin-bottom: 200px;
  padding-bottom: 350px;
`;

export const ContentContainer = styled.div`
  margin-top: 70px;
  margin-right: 155px;
  position: relative;
`;

export const StartInfo = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const PageText = styled.div`
  font-weight: 600;
  font-size: 30px;
`;

export const GrapeGrainsImg = styled.img.attrs({
  src: grapeGrainsSrc,
})`
  padding: 20px;
  margin-top: 30px;
  margin-left: 20px;
  flex-shrink: 0;
`;

export const InfoText = styled.div`
  font-weight: normal;
  font-size: 16px;
  color: #575757;
  margin-top: 4px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`;

export const Tag = styled.div`
  border: none;
  color: #fff;
  background-color: #9597b6;
  display: flex;
  margin-right: 0.5rem;
  padding: 0.25rem 0.6rem;
  border-radius: 5px;
  font-size: 14px;
  align-items: center;
  margin-bottom: 30px;
`;

export const LikeImg = styled.img.attrs({
  src: LikeImgSrc,
  alt: "LikeIcon",
})`
  margin-right: 4px;
  width: 15px;
`;

export const LikeButton = styled.button`
  width: 90px;
  height: 30px;
  color: #ff61c9;
  background-color: rgba(255, 97, 201, 0.1);
  border: none;
  border-radius: 5px;
  position: relative;
`;

export const PrefaceText = styled.div`
  font-weight: 500;
  font-size: 18px;
  margin-top: 32px;
`;

export const EmphasisText = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-top: 32px;
`;

export const ContentText = styled.div`
  font-weight: normal;
  font-size: 18px;
  margin-top: 20px;
`;
