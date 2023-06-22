import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  margin: auto;
  background-color: #445540;
  color: white;
  padding: 10px 35px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 15px;
`;

export default function AddButton() {
  return <StyledButton type="button">Add Dog</StyledButton>;
}
