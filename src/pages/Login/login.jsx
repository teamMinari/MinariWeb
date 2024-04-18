import React from "react";
import * as M from '../../components/styles/LoginStyle';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import LoginBanner from '../../assets/image/Group 1544.svg';
import { ReactComponent as Google } from '../../assets/image/google.svg';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleGoogleLogin = () => {
        navigate("/googleLogin");
    };

    return (
        <M.Form>
            <M.LoginPart>
                <M.Container><Logo /></M.Container>
                <M.Title>로그인</M.Title>
                <M.LoginInfo>
                    아직 회원가입을 하지 않으셨다면?<br/>여기서
                    <M.SignTxt to="./signup">가입 하세요!</M.SignTxt>
                    </M.LoginInfo>
                <M.Email>이메일</M.Email>
                <M.EmailContainer>
                    <M.EmailIcon />
                    <M.EmailInput type="email" placeholder="이메일 주소를 입력하세요."></M.EmailInput>
                </M.EmailContainer>
                <M.Password>비밀번호</M.Password>
                <M.PwContainer>
                    <M.PwIcon />
                    <M.PwInput type="password" placeholder="비밀번호를 입력하세요."></M.PwInput>
                </M.PwContainer>
                <M.SaveAndForgotContainer>
                    <M.LoginSave type="checkbox" id="loginSave" />
                    <M.LoginSaveLabel htmlFor="loginSave">로그인 저장</M.LoginSaveLabel>
                    <M.PwForgot>비밀번호를 잊으셨나요?</M.PwForgot>
                </M.SaveAndForgotContainer>
                <M.LoginBtn>로그인</M.LoginBtn>
                <M.SnsTxt>
                    sns 로그인
                </M.SnsTxt>
                <M.Snsbtn onClick={handleGoogleLogin}>
                    <Google />
                </M.Snsbtn>
            </M.LoginPart>
            <M.BannerContainer>
                <img src={LoginBanner} alt="Login Banner" />
            </M.BannerContainer>
        </M.Form>
    );
}

export default Login;