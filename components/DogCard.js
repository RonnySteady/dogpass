import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DogCardEdit from "./DogCardEdit";
import { BiSolidEdit, BiCopy } from "react-icons/bi";
import { db } from "../firebase/config";
import { doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { useTheme } from "styled-components";

export default function DogCard({ dogId, dog, onDelete, onUpdate }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDog, setEditedDog] = useState(dog);
  const [isCopied, setIsCopied] = useState(false);
  const { theme } = useTheme(); // Assuming you have a theme context or hook


  const handleDeleteClick = async () => {
    const confirmation = window.confirm("Are you sure you want to delete this dog?");
    if (confirmation) {
      const dogDocRef = doc(db, "dogs", dogId);
      await deleteDoc(dogDocRef);
    }
  };

  const handleEditClick = () => {
    console.log("Edit button clicked!"); 
    setIsEditMode(true);
  };  

  const handleSaveClick = async () => {
    try {
      const dogDocRef = doc(db, "dogs", dogId);
      await updateDoc(dogDocRef, editedDog);
      onUpdate(editedDog); 
    } catch (error) {
      console.error("Error updating dog data:", error);
    }
    setIsEditMode(false); 
  };
  
  
  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  const handleInputChange = (name, value) => {
    setEditedDog((prevDog) => ({
      ...prevDog,
      [name]: value,
    }));
  };


  const handleCopyClick = async () => {
    const dogInformation = `${editedDog.name}, ${editedDog.race}, ${editedDog.color}, born ${editedDog.birthdate} in ${editedDog.birthplace}, Transponder-ID: ${editedDog.transponder}, Vaccinations: ${editedDog.vaccinations}, Insurances: ${editedDog.insurances}`;
    try {
      await navigator.clipboard.writeText(dogInformation);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
      window.alert(`${editedDog.name} copied to clipboard`);
    } catch (error) {
      console.error("Failed to copy Dog to clipboard:", error);
      window.alert("Failed to copy Dog to clipboard. Please try again.");
    }
  };

  return (
    <StyledDogCard theme={theme}>
      {isEditMode ? (
            <DogCardEdit
            dogId={dog.id} 
            editedDog={editedDog}
            onDelete={handleDeleteClick}
            onSave={handleSaveClick}
            onCancel={handleCancelClick}
            onChange={handleInputChange}
          />
      ) : (
        <Grid>
          <NameSex>
          {editedDog.name} {editedDog.sex === "male" ? "♂" : "♀"}
          </NameSex>
          <RaceColor>
        {editedDog.race}
        {editedDog.race && editedDog.color && ", "}
        {editedDog.color}
      </RaceColor>
      {editedDog.birthdate ? (
        <BirthDatePlace>
          born {editedDog.birthdate}
          {editedDog.birthplace && ` in ${editedDog.birthplace}`}
        </BirthDatePlace>
      ) : (
        editedDog.birthplace && (
          <BirthDatePlace>born in {editedDog.birthplace}</BirthDatePlace>
        )
      )}

          <Transponder>
            Transponder-ID:
            <span style={{ marginLeft: "10px" }}>{editedDog.transponder}</span>
          </Transponder>

          <Vaccinations>Vaccinations: {editedDog.vaccinations}</Vaccinations>
      <Insurances>Insurances: {editedDog.insurances}</Insurances>
      <CopyCardButton
        onClick={handleCopyClick}
        isCopied={isCopied}
      >
        COPY
      </CopyCardButton>
      <EditCardButton onClick={handleEditClick}>
        <BiSolidEdit size={22} />
      </EditCardButton>
    </Grid>
  )}
</StyledDogCard>
  );
}


const StyledDogCard = styled.li`
  display: flex;
  position: relative;
  width: 350px;
  min-height: 200px;
  margin: auto;
  margin-bottom: 30px;
  padding: 15px 25px 15px 25px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textColor};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  z-index: 3;
`;

const CopyCardButton = styled.button`
  background-color: transparent;
  font-size: 10px;
  border: none;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  transition: opacity 0.3s ease;
  opacity: ${({ isCopied }) => (isCopied ? 0.5 : 1)};
  pointer-events: ${({ isCopied }) => (isCopied ? "none" : "auto")};
  color: ${({ theme }) => theme.textColor};
  top: 24px;
  right: 55px;
  font-weight: 500;
`;


const EditCardButton = styled.button`
  font-size: 10px;
  font-family: Open Sans, Roboto, Avenir, system-ui;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  top: 20px;
  right: 25px;
  background-color: transparent;
  border: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 145px 145px;
  column-gap: 10px;
`;

const NameSex = styled.h2`
  grid-area: 1 / 1 / 1 / 3;
  margin-bottom: 8px;
`;

const RaceColor = styled.span`
  grid-area: 2 / 1 / 2 / 3;
`;

const BirthDatePlace = styled.span`
  grid-area: 3 / 1 / 3 / 3;
  margin-bottom: 8px;
`;

const Transponder = styled.span`
  grid-area: 4 / 1 / 4 / 3;
`;

const Vaccinations = styled.span`
  grid-area: 5 / 1 / 5 / 2;
`;

const Insurances = styled.span`
  grid-area: 5 / 2 / 5 / 3;
`;
