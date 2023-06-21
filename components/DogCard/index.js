import styled from "styled-components";

export default function DogCard({ dog }) {
  return (
    <StyledDogCard>
      <h2>{dog.name}</h2>
      <p>Date of Birth: {dog.dateOfBirth}</p>
      <p>Place of Birth: {dog.placeOfBirth}</p>
      <p>Sex: {dog.sex}</p>
      <p>Color: {dog.color}</p>
      <p>Breed/Race: {dog.breed}</p>
    </StyledDogCard>
  );
}

const StyledDogCard = styled.li`
  border: 2px solid;
  border-radius: 15px;
  width: 400px;
  padding-left: 20px;
  margin-bottom: 35px;
`;
