import * as React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import type { PageProps } from "gatsby";

const Navbar: React.FC<Partial<PageProps>> = () => {
  const location = useLocation();
  const navigation = [
    { name: "Applicants", href: "/" },
    { name: "Employers", href: "/employers" },
    { name: "Job Postings", href: "/job" },
  ];

  return (
    <NavbarContainer className="p-8 inter-regular">
      <div className="flex flex-col">
        {navigation.map((item) => (
          <StyledLink
            key={item.name}
            to={item.href}
            className={location.pathname === item.href ? "active" : ""}
            aria-current={location.pathname === item.href ? "page" : undefined}
          >
            {item.name}
          </StyledLink>
        ))}
      </div>
    </NavbarContainer>
  );
};

export default Navbar;

/* Styles */
const NavbarContainer = styled.div`
  background: #1b1b1b;
  min-height: calc(100vh - 100px);
  width: 200px;
`;
const StyledLink = styled(Link)`
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  &:hover {
    background: #3b3b3b;
  }
  &.active {
    background: #3b3b3b;
  }
  &:not(:last-child) {
    margin-bottom: 10px; /* Apply margin except to the last one */
  }
`;
