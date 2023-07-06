import styled from "styled-components";

export default function BackButton({ onClick }) {
  return (
    <StyledBackButton type="button" onClick={onClick}>
      Go to dogs
    </StyledBackButton>
  );
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
