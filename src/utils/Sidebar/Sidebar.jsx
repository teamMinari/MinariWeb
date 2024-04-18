import React from "react";
import * as M from '../../components/styles/SidebarStyle';
import Header from '../Header/Header';


const Sidebar = () => {
    return (
        <React.Fragment>
            <Header />
            <M.Sidebar>
                <M.Menu>
                    <M.HomeMenu to="./home">
                        <M.HomeImg />홈
                    </M.HomeMenu>
                    <M.DictionaryMenu to="./dictionary">
                        <M.DictionaryImg />용어 사전
                    </M.DictionaryMenu>
                    <M.NewsMenu to="./news">
                        <M.NewsImg />관련 기사
                    </M.NewsMenu>
                    <M.QuizMenu to="./quiz">
                        <M.QuizImg />경제 퀴즈
                    </M.QuizMenu>
                    <M.ProfileMenu to="./myprofile">
                        <M.profileImg />프로필
                    </M.ProfileMenu>
                </M.Menu>
            </M.Sidebar>
        </React.Fragment>
    );
}

export default Sidebar;