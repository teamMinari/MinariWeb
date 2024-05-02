import React from "react";
import * as M from "../../styles/DictionaryStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/SideBar";

const Dictionary = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
        <M.MainContent>
          <M.DictionaryContainer>

          </M.DictionaryContainer>
        </M.MainContent>
      </M.PageContent>
    </React.Fragment>
  );
};

export default Dictionary;