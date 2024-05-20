import React from "react";
import * as M from "../../styles/DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";

const Dictionary = () => {
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedTxt, setSelectedTxt] = useState(null);

  const handleTagClick = (tag) => {
    setSelectedTag(tag === selectedTag ? null : tag);
  };

  const handleTxtClick = (txt) => {
    setSelectedTxt(txt === selectedTxt ? null : txt);
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
              <M.pageText>경제 용어</M.pageText>
              <M.btnContainer>
                <M.tagBtn selected={selectedTag === "금융"}
                  onClick={() => handleTagClick("금융")}>금융</M.tagBtn>
                <M.tagBtn selected={selectedTag === "산업"}
                  onClick={() => handleTagClick("산업")}>산업</M.tagBtn>
                <M.tagBtn selected={selectedTag === "IT"}
                  onClick={() => handleTagClick("IT")}>IT</M.tagBtn>
                <M.tagBtn selected={selectedTag === "증권"}
                  onClick={() => handleTagClick("증권")}>증권</M.tagBtn>
                <M.tagBtn selected={selectedTag === "부동산"}
                  onClick={() => handleTagClick("부동산")}>부동산</M.tagBtn>
                <M.tagBtn selected={selectedTag === "글로벌 경제"}
                  onClick={() => handleTagClick("글로벌 경제")}>글로벌 경제</M.tagBtn>
                <M.tagBtn selected={selectedTag === "채권"}
                  onClick={() => handleTagClick("채권")}>채권</M.tagBtn>
              </M.btnContainer>
              <M.textContainer>
                <M.textSort selected={selectedTxt === "가나다순"}
                  onClick={() => handleTxtClick("가나다순")}>• 가나다순</M.textSort>
                <M.textSort selected={selectedTxt === "최신순"}
                  onClick={() => handleTxtClick("최신순")}>• 최신순</M.textSort>
              </M.textContainer>
            </M.DictionaryContainer>
          </M.CenteredContent>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;
