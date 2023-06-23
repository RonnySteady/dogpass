import Heading from "/components/Heading";
import CreateDog from "/components/CreateDog";
import styled from "styled-components";

export default function DogForm({ dogs }) {
  console.log(dogs ? dogs : 0);
  return (
    <main>
      <Heading>Dog Pass 🐕‍🦺</Heading>
      <CreateDog dogs={dogs} />
    </main>
  );
}

const StyledDogForm = styled.form`
  display: flex;
`;
