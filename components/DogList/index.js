import DogCard from "/components/DogCard";
import styled from "styled-components";

export default function DogList({ dogs }) {
  return (
    <StyledDogList>
      {dogs.map((dog) => (
        <DogCard key={dog.name} dog={dog} />
      ))}
    </StyledDogList>
  );
}

const StyledDogList = styled.ul`
  text-decoration: none;
  list-style-type: none;
`;
