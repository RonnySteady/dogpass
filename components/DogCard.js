import styled from "styled-components";

export default function DogCard({ dog }) {
  return (
    <StyledDogCard>
      <h2>{dog.name}</h2>
      <p>Date of Birth: {dog.birthdate}</p>
      <p>Place of Birth: {dog.birthplace}</p>
      <p>Sex: {dog.sex}</p>
      <p>Color: {dog.color}</p>
      <p>Breed/Race: {dog.race}</p>
    </StyledDogCard>
  );
}

const StyledDogCard = styled.li`
  width: 325px;
  margin: auto;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  // border: 2px solid;
  // border-radius: 15px;
  // width: 90%;
  // padding: 1rem;
  // margin: 1rem;
`;
