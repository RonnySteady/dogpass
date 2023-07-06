import styled from "styled-components";

export default function OwnerButton() {
  return <StyledBackButton type="button">Go to owner</StyledBackButton>;
}

const StyledBackButton = styled.button`
  display: flex;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: white;
  padding: 5px 30px;
  font-size: 16px;
  border-radius: 15px;
`;
