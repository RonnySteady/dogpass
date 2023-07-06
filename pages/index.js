import Heading from "../components/Heading";
import DogList from "../components/DogList";
import AddDogButton from "../components/AddDogButton";
import { useState } from "react";
import Link from "next/link";
import OwnerButton from "../components/OwnerButton";

export default function Home({ dogs }) {
  const [dogList, setDogList] = useState(dogs);

  const handleDeleteDog = (dogName) => {
    const updatedDogs = dogList.filter((dog) => dog.name !== dogName);
    setDogList(updatedDogs);
  };

  return (
    <main>
      <Heading>Dog Pass 🦮 </Heading>
      <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
      <Link href="/newdog">
        <AddDogButton />
      </Link>
      <Link href="/owner">
        <OwnerButton />
      </Link>
    </main>
  );
}
