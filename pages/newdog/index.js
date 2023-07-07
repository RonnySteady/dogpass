import Heading from "/components/Heading";
import AddDogForm from "../../components/AddDogForm";

export default function DogForm({ dogs }) {
  return (
    <main>
      <Heading>Add 🦮 Pass</Heading>
      <AddDogForm dogs={dogs} />
    </main>
  );
}
