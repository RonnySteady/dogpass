import Heading from "/components/Heading";
import AddDogForm from "../../components/AddDogForm";
import styled from "styled-components";

export default function DogForm({ dogs }) {
  console.log(dogs ? dogs : 0);
  return (
    <main>
      <Heading>Add 🦮 Pass</Heading>
      <AddDogForm dogs={dogs} />
    </main>
  );
}
