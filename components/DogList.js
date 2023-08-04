import React, { useState, useEffect } from "react";
import DogCard from "./DogCard";
import { database, auth } from "../firebase/database";
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { useAuth } from '../firebase/auth'; // Import the useAuth hook

export default function DogList() {
  const [dogList, setDogList] = useState([]);
  const { user } = useAuth(); // Access the currently authenticated user from the context
  
  useEffect(() => {
    if (user) {
      const fetchDogsFromFirestore = async () => {
        const dogsQuery = query(collection(database, "users", user.uid, "dogs"));
        const unsubscribe = onSnapshot(dogsQuery, (snapshot) => {
          const dogsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
          setDogList(dogsData);
        });

        // Clean up the snapshot listener when the component unmounts
        return () => unsubscribe();
      };

      fetchDogsFromFirestore();
    }
  }, [user]);

  const handleUpdate = async (updatedDog) => {
    try {
      const dogDocRef = doc(database, "users", user.uid, "dogs", updatedDog.id);
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
      const dogDocRef = doc(database, "users", user.uid, "dogs", id);
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
        dogId={dog.id}
        dog={dog}
        user={user}
        onDelete={handleDelete} // Pass the handleDelete function as onDelete prop
        onUpdate={handleUpdate}
      />
      ))}
    </div>
  );
}
