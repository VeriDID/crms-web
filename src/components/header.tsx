import * as React from "react";
import styled from "styled-components";
import type { PageProps } from "gatsby";

const Header: React.FC<Partial<PageProps>> = () => {
  const title = "Credential College";

  return (
    <HeaderContainer className="flex items-center p-8 bai-jamjuree-regular">
      <div>{title}</div>
    </HeaderContainer>
  );
};

export default Header;

/* Styles */
const HeaderContainer = styled.div`
  background: #ffa41d;
  width: 100%;
  height: 100px;
  & > div {
    padding: 10px;
    background: #ffbb57;
    font-size: 30px;
    color: #1b1b1b;
  }
`;
