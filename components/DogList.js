import DogCard from "/components/DogCard";
import styled from "styled-components";

export default function DogList({ dogs, onDeleteDog }) {
  return (
    <StyledDogList>
      {dogs.map((dog) => (
        <DogCard key={dog.name} dog={dog} onDelete={onDeleteDog} />
      ))}
    </StyledDogList>
  );
}

const StyledDogList = styled.ul`
  list-style-type: none;
`;
