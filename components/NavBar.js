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
  justify-content: center; /* Center align items horizontally */
  margin-top: 17px;
  margin-bottom: 12px;
`;

const StyledLink = styled.a`
  width: 165px;
  text-align: center;
  padding: 5px;
  border-radius: 16px;
  text-decoration: none;
  margin: 20px 10px 35px;
  font-weight: normal;
  backdrop-filter: blur(6px);
  color: #333333;
  border: 1px solid rgba(255, 255, 255, 0.29);
  background: rgba(255, 255, 255, 0.38);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active,
  &:focus {
    // color: #333333;
    background-color: orange;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Increase box-shadow for more depth */
  }
`;
