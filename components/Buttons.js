import styled from "styled-components";
import { useTheme } from "styled-components";

import Link from "next/link";
import Image from "next/image";





export default function Buttons({ buttonText1, buttonText2, link1, link2 }) {
  const { theme } = useTheme(); // Assuming you have a theme context or hook
  return (
    <StyledNavbar>
      <StyledLink href={link1}>{buttonText1}</StyledLink>
      <StyledLink href={link2}>{buttonText2}</StyledLink>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center; 
  margin-bottom: 80px;

`;

const StyledLink = styled.a`
  width: 165px;
  text-align: center;
  padding: 5px;
  border-radius: 16px;
  text-decoration: none;
  margin: 20px 10px 45px;
  font-weight: normal;
  background: ${({ theme }) => theme.backgroundColor};
  backdrop-filter: blur(6px);
  color: ${({ theme }) => theme.textColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active,
  &:focus {
    // color: #333333;
    background-color: orange;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;