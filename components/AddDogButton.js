import styled from "styled-components";

export default function AddDogButton() {
  return <StyledAddDogButton type="button">Add Dog</StyledAddDogButton>;
}

const StyledAddDogButton = styled.button`
  display: flex;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: white;
  padding: 5px 30px;
  font-size: 16px;
  border-radius: 15px;
`;