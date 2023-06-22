import Heading from "../components/Heading";
import DogList from "../components/DogList";
import AddButton from "../components/AddButton";

export default function Home({ dogs }) {
  return (
    <main>
      <Heading>Dog Pass 🐕‍🦺</Heading>
      <DogList dogs={dogs} />
      <AddButton />
    </main>
  );
}
