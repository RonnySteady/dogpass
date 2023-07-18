import styled from "styled-components";
import Image from "next/image";
import cloudImage from "../public/images/cloud.png";

export default function Header() {
  return (
    <StyledHeader>
      <ImageWrapper>
        <Image src={cloudImage} alt="Cloud logo" />
        <AppName>DogPass</AppName>
      </ImageWrapper>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
/* position: fixed;  */
top: 0px;
  left: 0;
  right: 0;
  display: flex;
  height: 120px;
  justify-content: center; /* Center align items horizontally */
`;

const ImageWrapper = styled.div`
  position: relative; /* Enable positioning of text within the image */
  top: 16px; /* Adjust the top offset to your desired value */
  display: inline-block; /* Maintain inline display */
`;


const AppName = styled.h1`
  position: absolute; /* Position the text absolutely within the image */
  top: 35%; /* Adjust vertically to center align the text */
  left: 50%; /* Adjust horizontally to center align the text */
  transform: translate(-50%, -50%); /* Center align the text precisely */
  font-family: Jaya Baru, system-ui;
  font-size: 30px;
  text-shadow: ${({ theme }) => theme.textShadow};
  color: ${({ theme }) => theme.colorText};
  /* -webkit-text-fill-color: transparent; */
`;
