import React, { useState } from "react";
import * as M from "../../styles/LoginStyle";
import { ReactComponent as Logo } from "../../assets/image/logo.svg";
import LoginBanner from "../../assets/image/Group 1544.svg";
import { ReactComponent as Google } from "../../assets/image/google.svg";
import { useNavigate } from "react-router-dom";
import useLogin from "../../Hooks/Login/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = () => {
    navigate("/googleLogin");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    loginUser();
    setLoading(true);
    setError("");
    try {
      loginUser(email, password);
      navigate("/");
    } catch (err) {
      setError("로그인에 실패하였습니다. 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <M.Form onSubmit={onSubmit}>
      <M.LoginPart>
        <M.Container>
          <Logo />
        </M.Container>
        <M.Title>로그인</M.Title>
        <M.LoginInfo>
          아직 회원가입을 하지 않으셨다면?
          <br />
          여기서
          <M.SignTxt to="/signup">가입 하세요!</M.SignTxt>
        </M.LoginInfo>
        <M.Email>이메일</M.Email>
        <M.EmailContainer>
          <M.EmailIcon />
          <M.EmailInput
            type="email"
            placeholder="이메일 주소를 입력하세요."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </M.EmailContainer>
        <M.Password>비밀번호</M.Password>
        <M.PwContainer>
          <M.PwIcon />
          <M.PwInput
            type="password"
            placeholder="비밀번호를 입력하세요."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </M.PwContainer>
        <M.SaveAndForgotContainer>
          <M.LoginSave type="checkbox" id="loginSave" />
          <M.LoginSaveLabel htmlFor="loginSave">로그인 저장</M.LoginSaveLabel>
          <M.PwForgot>비밀번호를 잊으셨나요?</M.PwForgot>
        </M.SaveAndForgotContainer>
        <M.LoginBtn type="submit" disabled={loading}>
          {loading ? "로그인 중" : "로그인"}
        </M.LoginBtn>
        <M.SnsTxt>sns 로그인</M.SnsTxt>
        <M.Snsbtn onClick={handleGoogleLogin}>
          <Google />
        </M.Snsbtn>
      </M.LoginPart>
      <M.BannerContainer>
        <img src={LoginBanner} alt="Login Banner" />
      </M.BannerContainer>
    </M.Form>
  );
};

export default Login;
