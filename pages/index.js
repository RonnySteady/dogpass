import Heading from "../components/Heading";
import DogList from "../components/DogList";
import AddDogButton from "../components/AddDogButton";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
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
      <StyledLink href="/newdog">Add a dog</StyledLink>
      <StyledLink href="/owner">Go to owner</StyledLink>

      {/* <AddDogButton /> */}
      {/* <Link href="/owner">
        <OwnerButton />
      </Link> */}
    </main>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 160px;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 15px;
  text-decoration: none;
`;
