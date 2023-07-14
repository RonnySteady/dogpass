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
  display: flex;
  justify-content: center; /* Center align items horizontally */
  margin-top: 17px;
  margin-bottom: 12px;
`;

const ImageWrapper = styled.div`
  position: relative; /* Enable positioning of text within the image */
  display: inline-block; /* Maintain inline display */
`;

const AppName = styled.h1`
  position: absolute; /* Position the text absolutely within the image */
  top: 43%; /* Adjust vertically to center align the text */
  left: 50%; /* Adjust horizontally to center align the text */
  transform: translate(-50%, -50%); /* Center align the text precisely */
  margin: 0; /* Remove default margin */
  padding: 10px; /* Add padding for better visibility */
  font-family: Jaya Baru, system-ui;
  font-size: 30px;
  text-shadow: 0 0 1px #00308f, 0 0 5px #add8e6, 0 0 10px #b0c4de;
  -webkit-text-fill-color: transparent;
`;
