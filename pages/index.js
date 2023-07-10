import Heading from "../components/Heading";
import DogList from "../components/DogList";
import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

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
    </main>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 140px;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: whitesmoke;
  padding: 5px;
  border-radius: 15px;
  text-decoration: none;
`;
