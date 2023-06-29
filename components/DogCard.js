import styled from "styled-components";
import { useState } from "react";

export default function DogCard({ dog, onDelete }) {
  const handleDeleteClick = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this dog?"
    );
    if (confirmation) {
      onDelete(dog.name);
    }
  };

  return (
    <StyledDogCard>
      <h2>{dog.name}</h2>
      <p>Date of Birth: {dog.birthdate}</p>
      <p>Place of Birth: {dog.birthplace}</p>
      <p>Sex: {dog.sex}</p>
      <p>Color: {dog.color}</p>
      <p>Breed/Race: {dog.race}</p>
      <p>Vaccinations: {dog.vaccinations}</p>
      <p>Insurances: {dog.insurances}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </StyledDogCard>
  );
}

const StyledDogCard = styled.li`
  width: 325px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

const DeleteCardButton = styled.button`
  display: flex;
  margin: auto;
  margin-top: 15px;
  background-color: #800000;
  color: white;
  padding: 2px 15px;
  font-size: 12px;
  border-radius: 15px;
`;
