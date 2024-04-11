import React from "react";
import * as M from '../../components/styles/LoginStyle';
import { ReactComponent as Logo } from '../../assets/image/logo.svg';
import LoginBanner from '../../assets/image/loginbanner.svg';
import { ReactComponent as EmailIcon } from '../../assets/image/email.svg';
import { ReactComponent as PwIcon} from '../../assets/image/pw.svg';
import { ReactComponent as Google } from '../../assets/image/google.svg';

const login = () => {
    return (
        <M.Form>
            <M.LoginPart>
                <M.Container><Logo /></M.Container>
                <M.Title>로그인</M.Title>
                <M.LoginInfo>아직 회원가입을 하지 않으셨다면?<br/>여기서</M.LoginInfo>
                <M.SignTxt to="./signup">가입 하세요!</M.SignTxt>
                <M.Email>이메일</M.Email>
                <M.EmailInput type="email" placeholder="이메일 주소를 입력하세요."></M.EmailInput>
                <M.Password>비밀번호</M.Password>
                <M.PwInput type="password" placeholder="비밀번호를 입력하세요."></M.PwInput>
                <div>
                    <M.CheckBox></M.CheckBox>
                    <M.LoginSave>로그인 저장</M.LoginSave>
                    <M.PwForgot>비밀번호를 잊으셨나요?</M.PwForgot>
                </div>
                <M.LoginBtn>로그인</M.LoginBtn>
                <M.SnsTxt>
                    sns 로그인
                </M.SnsTxt>
                <M.Snsbtn>
                    <Google />
                </M.Snsbtn>
            </M.LoginPart>
            <M.BannerContainer>
                <img src={LoginBanner} alt="Login Banner" />
            </M.BannerContainer>
        </M.Form>
    );
}

export default login;