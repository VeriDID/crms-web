import * as React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";

const Header: React.FC<Partial<PageProps>> = () => {
  const title = "Credential College";

  return (
    <HeaderContainer className="flex items-center p-8 bai-jamjuree-regular">
      <div>
        {/* {title} */}
        <img src="logo.svg" className="logo" />
      </div>
    </HeaderContainer>
  );
};

export default Header;

/* Styles */
const HeaderContainer = styled.div`
  background: #31c63f;
  width: 100%;
  height: 100px;
  & > div {
    padding: 10px;
    font-size: 30px;
    color: #1b1b1b;
    img {
      width: 86px;
      height: 86px;
    }
  }
`;
