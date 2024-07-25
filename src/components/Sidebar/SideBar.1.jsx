import { useState, React } from "react";
import * as M from "../../styles/SidebarStyle";
import { useNavigate, useLocation } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  let [btnActive, setBtnActive] = useState(false);

  const toggleActive = (e) => {
    setBtnActive((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <M.Sidebar>
        <M.Menu>
          <M.HomeContainer
            onClick={() => {
              navigate("/");
            }}
            isActive={isActive("/")}
          >
            <M.HomeImg isActive={isActive("/")} />
            <M.HomeMenu>홈</M.HomeMenu>
          </M.HomeContainer>
          <M.DictionaryContainer
            onClick={() => navigate("/dictionary")}
            isActive={isActive("/dictionary")}
          >
            <M.DictionaryImg isActive={isActive("/dictionary")} />
            용어 사전
          </M.DictionaryContainer>
          <M.NewsContainer
            onClick={() => navigate("/news")}
            isActive={isActive("/news")}
          >
            <M.NewsImg
              isActive={isActive("/news")}
            />
          </M.NewsContainer>
          <M.QuizContainer
            onClick={() => navigate("/quizstart")}
            isActive={isActive("/quizstart")}
          >
            <M.QuizImg isActive={isActive("/quizstart")} />
            경제 퀴즈
          </M.QuizContainer>
          <M.ProfileContainer
            onClick={() => navigate("/profile")}
            isActive={isActive("/profile")}
          >
            <M.ProfileImg isActive={isActive("/profile")} />
            프로필
          </M.ProfileContainer>
        </M.Menu>
      </M.Sidebar>
    </>
  );
};
