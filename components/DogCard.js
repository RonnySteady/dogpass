import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import DogCardEdit from "./DogCardEdit";
import editButtonCardImage from "../public/images/edit-button-card.png";
import copyButtonCardImage from "../public/images/copy-button-card.png";

export default function DogCard({ dog, onDelete, onUpdate }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDog, setEditedDog] = useState(dog);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setEditedDog(dog);
  }, [dog]);

  const handleDeleteClick = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this dog?"
    );
    if (confirmation) {
      onDelete(dog.id);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    onUpdate(editedDog);
    setIsEditMode(false);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
    setEditedDog(dog);
  };

  const handleInputChange = (name, value) => {
    setEditedDog((prevDog) => ({
      ...prevDog,
      [name]: value,
    }));
  };

  const handleCopyClick = async () => {
    const dogInformation = `${dog.name}, ${dog.race}, ${dog.color}, born ${dog.birthdate} in ${dog.birthplace}, Transponder-ID: ${dog.transponder}, Vaccinations: ${dog.vaccinations}, Insurances: ${dog.insurances}`;
    try {
      await navigator.clipboard.writeText(dogInformation);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
      window.alert(`${dog.name} copied to clipboard`);
    } catch (error) {
      console.error("Failed to copy Dog to clipboard:", error);
      window.alert("Failed to copy Dog to clipboard. Please try again.");
    }
  };

  return (
    <StyledDogCard>
      {isEditMode ? (
        <DogCardEdit
          dog={dog}
          editedDog={editedDog}
          onDelete={handleDeleteClick}
          onSave={handleSaveClick}
          onCancel={handleCancelClick}
          onChange={handleInputChange}
        />
      ) : (
        <Grid>
          <NameSex>
            {dog.name} {dog.sex === "male" ? "♂" : "♀"}
          </NameSex>
          <RaceColor>
            {dog.race}
            {dog.race && dog.color && ", "}
            {dog.color}
          </RaceColor>
          {dog.birthdate ? (
            <BirthDatePlace>
              born {dog.birthdate}
              {dog.birthplace && ` in ${dog.birthplace}`}
            </BirthDatePlace>
          ) : (
            dog.birthplace && (
              <BirthDatePlace>born in {dog.birthplace}</BirthDatePlace>
            )
          )}

          <Transponder>
            Transponder-ID:
            <span style={{ marginLeft: "10px" }}>{dog.transponder}</span>
          </Transponder>

          <Vaccinations>Vaccinations: {dog.vaccinations}</Vaccinations>
          <Insurances>Insurances: {dog.insurances}</Insurances>
          <CopyCardButton
            onClick={handleCopyClick}
            className="copy-button"
            isCopied={isCopied}
          >
            COPY
            {/* <Image
              src={copyButtonCardImage}
              width="22"
              height="22"
              alt="Copy icon"
            /> */}
          </CopyCardButton>

          <EditCardButton onClick={handleEditClick}>
            <Image
              src={editButtonCardImage}
              width="20"
              height="20"
              alt="Edit icon"
            />
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
  background: rgba(255, 255, 255, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.29);
`;

const CopyCardButton = styled.button`
  font-size: 10px;
  font-family: Open Sans, Roboto, Avenir, system-ui;
  color: #222222;
  position: absolute;
  top: 25px;
  right: 55px;
  background-color: transparent;
  border: none;
  transition: opacity 0.3s ease;
  opacity: ${({ isCopied }) => (isCopied ? 0.5 : 1)};
  pointer-events: ${({ isCopied }) => (isCopied ? "none" : "auto")};
`;

const EditCardButton = styled.button`
  font-size: 11px;
  font-family: Open Sans, Roboto, Avenir, system-ui;
  color: #222222;
  position: absolute;
  top: 21px;
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
