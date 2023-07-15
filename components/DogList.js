import React, { useState, useEffect } from "react";
import DogCard from "./DogCard";
import { dogs } from "../lib/data";

export default function DogList() {
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const storedDogs = localStorage.getItem("dogs");
    if (storedDogs) {
      setDogList(JSON.parse(storedDogs));
    } else {
      setDogList(dogs);
    }
  }, []);

  const handleUpdate = (updatedDog) => {
    setDogList((prevDogList) => {
      const updatedDogList = prevDogList.map((dog) =>
        dog.id === updatedDog.id ? updatedDog : dog
      );
      localStorage.setItem("dogs", JSON.stringify(updatedDogList));
      return updatedDogList;
    });
  };

  const handleDelete = (id) => {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
    localStorage.setItem("dogs", JSON.stringify(updatedDogList));
  };

  return (
    <div>
      {dogs.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
      {dogList.filter((dog) => dog.id !== dogs[0].id && dog.id !== dogs[1].id).map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
