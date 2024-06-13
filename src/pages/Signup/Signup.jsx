import React from "react";
import * as M from '../../styles/SingupStyle';
import { ReactComponent as Logo } from "../../assets/image/logo.svg";
import LoginBanner from "../../assets/image/Group 1544.svg";
import { ReactComponent as Google } from "../../assets/image/google.svg";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Hooks/Login/useLogin";

const Signup = () => {
  const navigate = useNavigate();
  const {loginUser} = useLogin();

  const handleGoogleLogin = () => {
    navigate("/googleLogin");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
  }

  return (
    <M.Form>
      <M.LoginPart>
        <M.Container>
          <Logo />
        </M.Container>
        <M.Title>회원가입</M.Title>
        <M.SignupInfo>
          이미 계정이 있으시다면?
          <br />
          여기서
          <M.SignTxt to="/login">로그인 하세요!</M.SignTxt>
        </M.SignupInfo>
        <M.Email>이메일</M.Email>
        <M.EmailContainer>
          <M.EmailIcon />
          <M.EmailInput
            type="email"
            placeholder="이메일 주소를 입력하세요."
          ></M.EmailInput>
        </M.EmailContainer>
        <M.Id>아이디</M.Id>
        <M.PwContainer>
          <M.UserIcon />
          <M.IdInput
            type="id"
            placeholder="아이디를 입력하세요."
          ></M.IdInput>
        </M.PwContainer>
        <M.Password>비밀번호</M.Password>
        <M.PwContainer>
          <M.PwIcon />
          <M.PwInput
            type="password"
            placeholder="비밀번호를 입력하세요."
          ></M.PwInput>
        </M.PwContainer>
        <M.Password>비밀번호 확인</M.Password>
        <M.PwContainer>
          <M.PwIcon />
          <M.PwInput
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
          ></M.PwInput>
        </M.PwContainer>
        <M.SignupBtn type="submit">회원가입</M.SignupBtn>
      </M.LoginPart>
      <M.BannerContainer>
        <img src={LoginBanner} alt="Login Banner" />
      </M.BannerContainer>
    </M.Form>
  );
};

export default Signup;
