import * as M from "../../styles/TutorialStyle/GrapeGrainsStyle";
import React from "react";
import Header from "../Header/Header";
import SideBar from "../Sidebar/Sidebar";

const GrapeGrains = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <SideBar />
        <M.MainContent>
          <M.CenteredContent>
            <M.GrapeSeedContainer>
              <M.StartInfo>
                <M.GrapeGrainsImg />
                <M.ContentContainer>
                  <M.PageText>
                    시작하기: 우리가 경제를 배워야 하는 이유
                  </M.PageText>
                  <M.InfoText>29분 • 포도알 • 0/3 모듈 완료</M.InfoText>
                  <M.TagContainer>
                    <M.Tag>초급</M.Tag>
                    <M.Tag>첫 시작</M.Tag>
                    <M.Tag>고등학생</M.Tag>
                    <M.Tag>경제 제도</M.Tag>
                  </M.TagContainer>
                  <M.LikeButton>
                    <M.LikeImg />
                    좋아요
                  </M.LikeButton>
                  <M.PrefaceText>
                    경제를 알아보기 전에 실생활에 사용할 국가에서 실시하는
                    나이별 경제 제도를 먼저 알아보자.
                  </M.PrefaceText>
                  <M.EmphasisText>학습목표</M.EmphasisText>
                  <M.PrefaceText>
                    이 포도알을 완료한 후에는 다음을 수행할 수 있습니다.
                  </M.PrefaceText>
                  <M.ContentText>
                    • 미래의 경제 생활을 설계할 수 있다.
                    <br />• 나이대 별 경제 제도를 알 수 있다.
                    <br />• 경제 기초 지식을 알 수 있다.
                  </M.ContentText>
                </M.ContentContainer>
              </M.StartInfo>
            </M.GrapeSeedContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default GrapeGrains;
