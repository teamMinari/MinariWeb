import styled from "styled-components";
import logoImg from "../../assets/image/logo.svg";
import { NavLink } from "react-router-dom";
import profileImg from '../../assets/image/profile.svg';

export const Form = styled.form`
  display: flex;
  z-index: 100px;
`;

export const Bar = styled.header`
  width: 100%;
  height: 75px;
  background-color: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 2, 5, 0.1);
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  margin-left: 118px;
`;

export const LogoImg = styled.img.attrs({
  src: logoImg,
  alt: "logo",
})`
  display: block;
  width: 150px;
`;

export const AuthContainer = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  margin-left: auto;
`;

export const MemberProfile = styled.img.attrs({
  src: profileImg,
  alt: "profile",
})`
width: 37px;
`;

export const MemberName = styled.div`
font-size: 13px
font-weight: 600;
color: #878787;
margin-left: 20px;
margin-right: 80px;
`;
