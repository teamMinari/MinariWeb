import React from "react";
import * as M from "../../styles/TermMeaning";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/SideBar";
import SearchBar from "../../components/SearchBar/SearchBar";

const TermMeaning = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <M.CenteredContent>
            <SearchBar />
            <M.DictionaryContainer>
              <M.TermText>가계부실위험지수(HDRI)</M.TermText>
              <M.TermExplanation>
                가구의 소득 흐름은 물론 금융 및 실물 자산까지 종합적으로
                고려하여 가계부채의 부실위험을 평가하는 지표로, 가계의
                채무상환능력을 소득 측면에서 평가하는 원리금상 환비율(DSR; Debt
                Service Ratio)과 자산 측면에서 평가하는 부채/자산비율(DTA; Debt
                To Asset Ratio)을 결합하여 산출한 지수이다. 가계부실위험지수는
                가구의 DSR과 DTA가 각각 40%, 100%일 때 100의 값을 갖도록
                설정되어 있으며, 동 지수가 100을 초과하는 가구를 ‘위험가구’로
                분류한다. 위험가구는 소득 및 자산 측면에서 모두 취약한
                ‘고위험가구’, 자산 측면에서 취약한 ‘고DTA가구’, 소득 측면에서
                취약한 ‘고DSR가구’로 구분할 수 있다. 다만 위험 및 고위험 가구는
                가구의 채무상환능력 취약성 정도를 평가하기 위한 것이며 이들
                가구가 당장 채무상환 불이행, 즉 임계상황에 직면한 것을 의미하지
                않는다.
              </M.TermExplanation>
              <M.Container>
                <M.SimilarWord>► 연관검색어 : 총부채원리금상환비율(DSR)</M.SimilarWord>
                <M.EasyMeaningBtn>쉬운 용어 풀이</M.EasyMeaningBtn>
              </M.Container>
              <M.RelatedNews>► 관련 기사&사건</M.RelatedNews>
              <M.News></M.News>
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default TermMeaning;
