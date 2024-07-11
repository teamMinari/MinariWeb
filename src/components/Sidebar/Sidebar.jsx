import React from "react";
import * as M from "../../styles/SidebarStyle";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigation = useNavigate();

  return (
    <React.Fragment>
      <M.Sidebar>
        <M.Menu>
          <M.HomeMenu
            onClick={() => {
              navigation("/");
            }}
          >
            <M.HomeImg />홈
          </M.HomeMenu>
          <M.DictionaryMenu
            onClick={() => {
              navigation("/dictionary");
            }}
          >
            <M.DictionaryImg />
            용어 사전
          </M.DictionaryMenu>
          <M.NewsMenu
            onClick={() => {
              navigation("/news");
            }}
          >
            <M.NewsImg />
            관련 기사
          </M.NewsMenu>
          <M.QuizMenu
            onClick={() => {
              navigation("/quizstart");
            }}
          >
            <M.QuizImg />
            경제 퀴즈
          </M.QuizMenu>
          <M.ProfileMenu
            onClick={() => {
              navigation("/profile");
            }}
          >
            <M.profileImg />
            프로필
          </M.ProfileMenu>
        </M.Menu>
      </M.Sidebar>
    </React.Fragment>
  );
};

export default SideBar;
