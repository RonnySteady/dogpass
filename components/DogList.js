import React, { useState } from "react";
import DogCard from "./DogCard";
import { dogs } from "../lib/data";

export default function DogList() {
  const [dogList, setDogList] = useState(dogs);

  const handleDelete = (id) => {
    console.log(`Deleting dog with ID: ${id}`);
    const updatedDogList = dogList.filter((dog) => dog.id !== id);
    setDogList(updatedDogList);
  };

  const handleEdit = (dog) => {};

  const handleUpdate = (updatedDog) => {
    const updatedDogList = dogList.map((dog) =>
      dog.id === updatedDog.id ? updatedDog : dog
    );
    setDogList(updatedDogList);
  };

  return (
    <div>
      {dogList.map((dog) => (
        <DogCard
          key={dog.id}
          dog={dog}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
