import React from "react";
import * as M from "../../styles/DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from '../../components/Sidebar/Sidebar';

import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import Term from "../../components/Term/Term";

const Dictionary = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTxt, setSelectedTxt] = useState(null);
  const [maxChars, setMaxChars] = useState(150);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleTxtClick = (txt) => {
    setSelectedTxt(txt === selectedTxt ? null : txt);
  };

  const renderExplanation = (text) => {
    return text.length > maxChars ? text.slice(0, maxChars) + "..." : text;
  };

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
              <M.PageText>경제 용어</M.PageText>
              <M.BtnContainer>
                <M.TagBtn selected={selectedTag === "금융"}
                  onClick={() => handleTagClick("금융")}>금융</M.TagBtn>
                <M.TagBtn selected={selectedTag === "증권"}
                  onClick={() => handleTagClick("증권")}>증권</M.TagBtn>
                <M.TagBtn selected={selectedTag === "부동산"}
                  onClick={() => handleTagClick("부동산")}>부동산</M.TagBtn>
                <M.TagBtn selected={selectedTag === "글로벌 경제"}
                  onClick={() => handleTagClick("글로벌 경제")}>글로벌 경제</M.TagBtn>
                <M.TagBtn selected={selectedTag === "산업/재계"}
                  onClick={() => handleTagClick("산업/재계")}>산업/재계</M.TagBtn>
              </M.BtnContainer>
              <M.TextContainer>
                <M.TextSort selected={selectedTxt === "가나다순"}
                  onClick={() => handleTxtClick("가나다순")}>• 가나다순</M.TextSort>
                <M.TextSort selected={selectedTxt === "최신순"}
                  onClick={() => handleTxtClick("최신순")}>• 최신순</M.TextSort>
              </M.TextContainer>
              <Term 
              title="가계부실위험지수(HDRI)"
              explanation={renderExplanation("가구의 소득 흐름은 물론 금융 및 실물 자산까지 종합적으로 고려하여 가계부채의 부실위험을 평가하는 지표로, 가계의 채무상환능력을 소득 측면에서 평가하는 원리금상 환비율(DSR; Debt Service Ratio)과 자산 측면에서 평가하는 부채/자산비율(DTA; Debt To Asset Ratio)을 결합하여 산출한 지수이다.")}
              refer="출처: 경제금융용어 700선"/>
              <Term 
              title="가계수지"
              explanation={renderExplanation("가정에서 일정 기간의 수입(명목소득)과 지출을 비교해서 남았는지 모자랐는지를 표시한 것을 가계수지(household's total income and expenditure)라 한다.")}
              refer="출처: 경제금융용어 700선"/>
              <Term title="가산금리"
              explanation={renderExplanation("기준금리에 신용도 등의 차이에 따라 달리 덧붙이는 금리를 가산금리(또는 스프레드, spread)라고 한다. 예를 들어 은행이 대출금리를 결정할 때 고객의 신용위험에 따라 조달금리에 추가하는 금리를 말한다.")}
              refer="출처: 경제금융용어 700선"/>
              <Term title="경기종합지수"
              explanation={renderExplanation("경기종합지수는 지수의 변동 방향으로 경기변동의 방향을 가늠할 수 있고, 지수의 변동 폭으로 경기변동의 크기를 알 수 있기 때문에 경기흐름을 종합적으 로 판단하는데 매우 유용하다.")}
              refer="출처: 경제금융용어 700선"/>
              <Term title="경제성장률"
              explanation={renderExplanation("경제성장률이란 일정 기간(분기 또는 연간) 중 한 나라의 경제규모, 즉 국민소득 규모가 늘어난 정도를 백분율로 표시한 것이다. ")}
              refer="출처: 경제금융용어 700선"/>
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;
