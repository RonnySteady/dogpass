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
      setDogList(dogs); // Use the mock data if localStorage is empty
    }
  }, []);

  const handleDelete = (id) => {
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
    localStorage.setItem("dogs", JSON.stringify(updatedDogList));
  };

  const handleUpdate = (updatedDog) => {
    const updatedDogList = dogList.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogList(updatedDogList);
    localStorage.setItem("dogs", JSON.stringify(updatedDogList));
  };

  return (
    <div>
      {dogList.map((dog) => (
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
