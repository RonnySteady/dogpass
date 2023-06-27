import Heading from "/components/Heading";
import AddDogForm from "../../components/AddDogForm";

export default function DogForm({ dogs }) {
  console.log(dogs ? dogs : 0);
  return (
    <main>
      <Heading>Add 🦮 Pass</Heading>
      <AddDogForm dogs={dogs} />
    </main>
  );
}
