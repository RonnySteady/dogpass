import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function NavBar({ buttonText1, buttonText2, link1, link2 }) {
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
  margin-bottom: 10px;
`;

const StyledLink = styled.a`
    background-color: ${({ theme }) => theme.backgroundColor};
    border: 1px solid ${({ theme }) => theme.borderColor};
    color: ${({ theme }) => theme.textColor};
    margin: 10px 10px 30px;
    padding: 5px;
    text-decoration: none;
    width: 165px;
    text-align: center;
    border-radius: 16px;
    backdrop-filter: blur(6px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active,
  &:focus {
    background-color: orange;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;
