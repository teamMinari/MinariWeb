import React from "react";
import * as M from "../../styles/ProfileStyle";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const Profile = () => {
  return (
    <React.Fragment>
      <Header />
      <M.GlobalStyles />
      <M.PageContent>
        <Sidebar />
      </M.PageContent>
    </React.Fragment>
  );
};

export default Profile;
