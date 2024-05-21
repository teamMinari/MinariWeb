import styled, { createGlobalStyle, css } from "styled-components";
import HouseImg from "../../assets/image/houseText.png";
import ChartImg from "../../assets/image/chartText.png"
import CoinImg from "../../assets/image/coinText.png"
import EarthImg from "../../assets/image/earthText.png"
import WalletImg from "../../assets/image/walletText.png"
import BannerImg from "../../assets/image/banner.png"
import { Link } from "react-router-dom";

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

export const bannerStyle = css`
  object-fit: contain;
  width: 900px;
`;


export const walletIconStyle = css`
  object-fit: contain;
  width: 202px;  /* 아이콘 너비 */
  height: 81px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const houseIconStyle = css`
  object-fit: contain;
  width: 193px;  /* 아이콘 너비 */
  height: 70px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const earthIconStyle = css`
  object-fit: contain;
  width: 202px;  /* 아이콘 너비 */
  height: 70px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const chartIconStyle = css`
  object-fit: contain;
  width: 193px;  /* 아이콘 너비 */
  height: 70px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;
export const coinIconStyle = css`
  object-fit: contain;
  width: 193px;  /* 아이콘 너비 */
  height: 70px;  /* 아이콘 높이 */
  max-width: 100%;
  max-height: 100%;
`;

export const bannerWarp = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  align-items: center;
  justify-content: flex-start;
`

export const house = styled(Link)`
`
export const chart = styled(Link)`
`
export const coin = styled(Link)`
`
export const earth = styled(Link)`
`
export const wallet = styled(Link)`
`


export const houseImg = styled.img.attrs({
  src: HouseImg,
  alt: "houseImg",
})`
  ${houseIconStyle}
`;

export const chartImg = styled.img.attrs({
  src: ChartImg,
  alt: "chartImg",
})`
  ${chartIconStyle}
`;

export const coinImg = styled.img.attrs({
  src: CoinImg,
  alt: "coImg",
})`
  ${coinIconStyle}
`;

export const walletImg = styled.img.attrs({
  src: WalletImg,
  alt: "walletImg",
})`
  ${walletIconStyle}
`;

export const earthImg = styled.img.attrs({
  src: EarthImg,
  alt: "earthImg",
})`
  ${earthIconStyle}
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
  justify-content: center;
`;
export const menu = styled.div`
  width: 900px;
  height: 140px;
  background-color: #ffffff;
  border-radius: 10px;
  margin-top: 47px;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 29px;
`;
export const HorizontalLine = styled.div`
  width: 1px;
  height: 80px;
  background-color: #D5DDFD; /* 선의 색상을 설정합니다 */
  margin: 0 -25px;
`;
export const banner = styled.img.attrs({
  src: BannerImg,
  alt: "bannerImg",
})`
  ${bannerStyle}
`
