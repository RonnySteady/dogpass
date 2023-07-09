import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import editButtonCardImage from "../public/images/edit-button-card.png";

export default function DogCard({ dog, onDelete, onUpdate }) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedDog, setEditedDog] = useState(dog);

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
    setEditedDog(dog);
    setIsEditMode(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedDog((prevDog) => ({
      ...prevDog,
      [name]: value,
    }));
  };

  return (
    <StyledDogCard>
      {isEditMode ? (
        <Grid>
          <DisplayName>{dog.name}</DisplayName>

          {/* Edit mode inputs */}
          <EditTransponder
            type="text"
            name="transponder"
            placeholder="Transponder ID"
            value={editedDog.transponder}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />
          <EditVaccinations
            type="textarea"
            name="vaccinations"
            label="vaccinations"
            value={editedDog.vaccinations}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />
          <EditInsurances
            type="textarea"
            name="insurances"
            placeholder="Insurances"
            value={editedDog.insurances}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />

          <SaveButton onClick={handleSaveClick}>Save</SaveButton>
          <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
        </Grid>
      ) : (
        <Grid>
          <DisplayName>{dog.name}</DisplayName>
          <DisplayRace>{dog.race}</DisplayRace>
          <DisplayBirthDate>Date of birth: {dog.birthdate}</DisplayBirthDate>
          <DisplayBirthPlace>
            Place of birth: {dog.birthplace}
          </DisplayBirthPlace>
          <DisplaySex>Sex: {dog.sex}</DisplaySex>
          <DisplayColor>Color: {dog.color}</DisplayColor>
          <DisplayTransponder>
            Transponder: {dog.transponder}
          </DisplayTransponder>
          <DisplayVaccinations>
            Vaccinations: {dog.vaccinations}
          </DisplayVaccinations>
          <DisplayInsurances>Insurances: {dog.insurances}</DisplayInsurances>

          {/* Edit and delete buttons */}
          <EditButton onClick={handleEditClick}>
            <Image
              src={editButtonCardImage}
              alt="Edit"
              width={16}
              height={16}
            />
          </EditButton>
          <DeleteCardButton onClick={handleDeleteClick}>❌</DeleteCardButton>
        </Grid>
      )}
    </StyledDogCard>
  );
}

const StyledDogCard = styled.li`
  display: grid;
  width: 325px;
  margin: auto;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  column-gap: 10px;
`;

const EditButton = styled.button`
  display: grid;
  margin: auto;
  margin-right: 25px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  background-color: Transparent;
  border-radius: 15px;
  font-size: 8px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const DeleteCardButton = styled.button`
  display: grid;
  margin: auto;
  margin-right: 0px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  background-color: Transparent;
  border-radius: 15px;
  font-size: 8px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const EditTransponder = styled.input`
  margin-bottom: 10px;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 7;
`;

const EditVaccinations = styled.input`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 9;
  grid-row-end: 9;
`;

const EditInsurances = styled.input`
  margin-bottom: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 9;
  grid-row-end: 9;
`;

const SaveButton = styled.button`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 11;
  grid-row-end: 11;
`;

const CancelButton = styled.button`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 11;
  grid-row-end: 11;
`;

const DisplayName = styled.h2`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const DisplayRace = styled.span`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
`;

const DisplayBirthDate = styled.span`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 3;
`;

const DisplayBirthPlace = styled.span`
  margin-bottom: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
`;

const DisplaySex = styled.span`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
`;

const DisplayColor = styled.span`
  margin-bottom: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
`;

const DisplayTransponder = styled.span`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 7;
  grid-row-end: 7;
`;

const DisplayVaccinations = styled.span`
  margin-top: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 8;
  grid-row-end: 8;
`;

const DisplayInsurances = styled.span`
  margin-top: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 8;
`;
