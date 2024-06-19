import styled from "styled-components";
import { NavLink } from "react-router-dom";
import homeIconSrc from '../assets/image/home.svg';
import dictionaryIconSrc from '../assets/image/dictionary.svg';
import newsIconSrc from '../assets/image/news.svg';
import quizIconSrc from '../assets/image/quiz.svg';
import profileIconSrc from '../assets/image/my.svg';

const activeStyle = {
  backgroundColor: "#363CD5",
  color: "#ffffff",
};

export const Form = styled.form`
  display: flex;
  background-color: #f5f6fa;
`;

export const Sidebar = styled.div`
  width: 300px;
  height: auto;
  background-color: #fafbff;
  border-right: 1px solid #d7dbec;
  display: flex;
  flex-direction: column;
  padding-top: 75px;
  z-index: 0;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 70px;
  margin-left: 30px;
  font-size: 20px;
  font-weight: 600;
  color: #7e84a3;
  : hover{
    cursor: pointer;
  }
`;

const iconStyle = `
  margin-right: 19px;
  margin-bottom: -1px;
`;

export const HomeImg = styled.img.attrs({
  src: homeIconSrc,
  alt: "HomeIcon",
})`
  ${iconStyle}
  margin-left: 1px;
`;

export const HomeMenu = styled.div`
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  &.active{
    ${activeStyle}
  }
`;

export const DictionaryImg = styled.img.attrs({
  src: dictionaryIconSrc,
  alt: "dictionaryIcon",
})`
  ${iconStyle}
  margin-left: -1px;
`;

export const DictionaryMenu = styled.div`
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  &.active{
    ${activeStyle}
  }
`;

export const NewsImg = styled.img.attrs({
  src: newsIconSrc,
  alt: "newsIcon",
})`
  ${iconStyle}
`;

export const NewsMenu = styled.div`
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  &.active{
    ${activeStyle}
  }
`;

export const QuizImg = styled.img.attrs({
  src: quizIconSrc,
  alt: "quizIcon",
})`
  ${iconStyle}
`;

export const QuizMenu = styled.div`
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  &.active{
    ${activeStyle}
  }
`;

export const profileImg = styled.img.attrs({
  src: profileIconSrc,
  alt: "profileIcon",
})`
  ${iconStyle}
`;

export const ProfileMenu = styled.div`
  text-decoration: none;
  color: inherit;
  margin-bottom: 50px;
  &.active{
    ${activeStyle}
  }
`;
