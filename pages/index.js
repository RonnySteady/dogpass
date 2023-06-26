import Heading from "../components/Heading";
import DogList from "../components/DogList";
import AddDogButton from "../components/AddDogButton";
import Link from "next/link";

export default function Home({ dogs }) {
  return (
    <main>
      <Heading>Dog Pass 🐕‍🦺</Heading>
      <DogList dogs={dogs} />
      <Link href="/newdog">
        <AddDogButton />
      </Link>
    </main>
  );
}
