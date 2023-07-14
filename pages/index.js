import { useState } from "react";
import DogList from "../components/DogList";
import styled from "styled-components";
import Link from "next/link";
import Header from "../components/Header";
import Navbar from "../components/NavBar";

export default function Home({ dogs }) {
  const [dogList, setDogList] = useState(dogs);

  const handleDeleteDog = (dogName) => {
    const updatedDogs = dogList.filter((dog) => dog.name !== dogName);
    setDogList(updatedDogs);
  };

  return (
    <main>
      <Header />
      <DogList dogs={dogList} onDeleteDog={handleDeleteDog} />
      <Navbar
        buttonText1="Go to owner"
        link1="/owner"
        buttonText2="Add a dog"
        link2="/newdog"
      />
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
