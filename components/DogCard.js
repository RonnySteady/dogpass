import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import editButtonCardImage from "../public/images/edit-button-card.png";
import deleteButtonCardImage from "../public/images/del-button-card.png";

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
          <EditTransponderLabel htmlFor="transponder">
            Transponder:
          </EditTransponderLabel>{" "}
          <EditTransponderInput
            type="text"
            maxLength={16}
            name="transponder"
            label="transponder"
            id="transponder"
            placeholder="Transponder ID"
            value={editedDog.transponder}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />
          <EditVaccinationsLabel htmlFor="vaccinations">
            Vaccinations:
          </EditVaccinationsLabel>{" "}
          <EditVaccinationsInput
            type="textarea"
            name="vaccinations"
            placeholder="Vaccinations"
            value={editedDog.vaccinations}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />
          <EditInsurancesLabel htmlFor="insurances">
            Insurances:
          </EditInsurancesLabel>{" "}
          <EditInsurancesInput
            type="textarea"
            name="insurances"
            placeholder="Insurances"
            value={editedDog.insurances}
            onChange={handleInputChange}
            readOnly={!isEditMode}
          />
          <DeleteCardButton onClick={handleDeleteClick}>
            <Image
              src={deleteButtonCardImage}
              width="16"
              height="18"
              alt="Edit"
            />
          </DeleteCardButton>
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

          <EditButton onClick={handleEditClick}>
            <Image
              src="/images/edit-button-card.png"
              width="16"
              height="16"
              alt="Edit icon"
            />
          </EditButton>
        </Grid>
      )}
    </StyledDogCard>
  );
}

const StyledDogCard = styled.li`
  display: grid;
  width: 325px;
  min-height: 200px;
  margin: auto;
  margin-bottom: 30px;
  color: #333333;
  padding: 15px 25px 16px;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 130px);
  column-gap: 15px;
`;

const EditButton = styled.button`
  display: grid;
  margin: auto;
  margin-right: 0px;
  margin-top: 6px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: none;
  grid-column: 2;
  grid-row: 1;
`;

const DeleteCardButton = styled.button`
  display: grid;
  grid-column: 2;
  grid-row: 1;
  margin: auto;
  margin-right: 2px;

  margin-top: 4px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  border: none;
`;

const EditTransponderLabel = styled.label`
  margin-right: 10px;
  grid-column: 1;
  grid-row: 7;
`;

const EditTransponderInput = styled.input`
  margin-bottom: 10px;
  grid-column: 2;
  grid-row: 7;
`;

const EditVaccinationsLabel = styled.label`
  margin-right: 10px;
  grid-column: 1;
  grid-row: 8;
`;

const EditVaccinationsInput = styled.textarea`
  margin-bottom: 18px;
  max-width: 130px;
  grid-column: 1;
  grid-row: 9;
`;

const EditInsurancesLabel = styled.label`
  margin-right: 10px;
  grid-column: 2;
  grid-row: 8;
`;

const EditInsurancesInput = styled.textarea`
  margin-bottom: 18px;
  max-width: 130px;
  grid-column: 2;
  grid-row: 9;
`;

const SaveButton = styled.button`
  grid-column: 2;
  grid-row: 11;
  width: 80px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;

const CancelButton = styled.button`
  grid-column: 1;
  grid-row: 11;
  width: 80px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;

const DisplayName = styled.h2`
  margin-bottom: 10px;
  grid-column: 1 / 3;
  grid-row: 1;
  margin-right: 22px;
`;

const DisplayRace = styled.span`
  margin-bottom: 10px;
  grid-column: 1 / span 2;
  grid-row: 2;
`;

const DisplayBirthDate = styled.span`
  margin-bottom: 10px;
  grid-column: 1;
  grid-row: 3;
`;

const DisplayBirthPlace = styled.span`
  margin-bottom: 10px;
  grid-column: 2;
  grid-row: 3;
`;

const DisplaySex = styled.span`
  grid-column: 2;
  grid-row: 4;
`;

const DisplayColor = styled.span`
  margin-bottom: 10px;
  grid-column: 2;
  grid-row: 5;
`;

const DisplayTransponder = styled.span`
  margin-bottom: 10px;
  column-gap: 15px;
  grid-column: 1 / 2;
  grid-row: 4 / 7;
`;

const DisplayVaccinations = styled.span`
  grid-column: 1;
  grid-row: 8;
`;

const DisplayInsurances = styled.span`
  grid-column: 2;
  grid-row: 8;
`;
