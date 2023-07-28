import React, { useState, useEffect } from "react";
import DogCard from "./DogCard";
import { db } from "../firebase/config";
import { collection, getDocs } from 'firebase/firestore';
import { doc, updateDoc } from 'firebase/firestore';

export default function DogList() {
  const dogId = "your-dog-id"; // Replace this with the actual dogId value
  const [dogList, setDogList] = useState([]);

  useEffect(() => {
    const fetchDogsFromFirestore = async () => {
      const dogsCollectionRef = collection(db, "dogs");
      const dogsSnapshot = await getDocs(dogsCollectionRef);
      const dogsData = dogsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setDogList(dogsData);
    };

    fetchDogsFromFirestore();
  }, []);

  const handleUpdate = async (updatedDog) => {
    try {
      const dogDocRef = doc(db, "dogs", updatedDog.id);
      await updateDoc(dogDocRef, updatedDog);
      setDogList((prevDogList) =>
        prevDogList.map((dog) => (dog.id === updatedDog.id ? updatedDog : dog))
      );
    } catch (error) {
      console.error("Error updating dog data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const dogDocRef = doc(db, "dogs", id);
      await deleteDoc(dogDocRef);
      setDogList((prevDogList) => prevDogList.filter((dog) => dog.id !== id));
    } catch (error) {
      console.error("Error deleting dog:", error);
    }
  };

  return (
    <div>
      {dogList.map((dog) => (
          <DogCard
          key={dog.id}
          dogId={dog.id} // Pass the 'dogId' prop to DogCard
          dog={dog} // Pass the 'dog' prop to DogCard
          onDelete={handleDelete}
          onUpdate={handleUpdate}
        />
      ))}
    </div>
  );
}
