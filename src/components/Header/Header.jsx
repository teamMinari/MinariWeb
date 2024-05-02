import React from "react";
import * as M from "../../styles/HeaderStyle";

const header = () => {
  return (
    <M.Form>
      <M.Bar>
        <M.Container>
          <M.LogoImg />
        </M.Container>
        <M.AuthContainer to="./myprofile">
          <M.MemberProfile />
          <M.MemberName>admin</M.MemberName>
        </M.AuthContainer>
      </M.Bar>
    </M.Form>
  );
};

export default header;
