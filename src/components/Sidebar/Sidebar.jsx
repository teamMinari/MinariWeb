import React from "react";
import * as M from "../../styles/SidebarStyle";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigation = useNavigate();

  return (
    <React.Fragment>
      <M.Sidebar>
        <M.Menu>
          <M.HomeMenu
            onClick={() => {
              navigation("/home");
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
              navigation("/quiz");
            }}
          >
            <M.QuizImg />
            경제 퀴즈
          </M.QuizMenu>
          <M.ProfileMenu
            onClick={() => {
              navigation("/myprofile");
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