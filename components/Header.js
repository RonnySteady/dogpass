import styled from "styled-components";
import Image from "next/image";
import cloudImage from "../public/images/cloud.png";
import Link from "next/link";

export default function Header({ theme, toggleTheme }) {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <ImageLink>
          <Image src={cloudImage} alt="Cloud logo" />
          <AppName>DogPass</AppName>
        </ImageLink>
      </Link>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 100%;
  margin-top: 35px;
  margin-bottom: 5px;
  `;

const ImageLink = styled.div`
  position: relative; 
  display: inline-block; 
  margin-top: 5px;
`;

const AppName = styled.h1`
  position: absolute; 
  top: 35%; 
  left: 50%;
  margin-top: 10px;
  transform: translate(-50%, -50%); 
  font-family: Jaya Baru, system-ui;
  font-size: 30px;
  text-shadow: ${({ theme }) => theme.textShadow};
  color: ${({ theme }) => theme.colorText};
`;

