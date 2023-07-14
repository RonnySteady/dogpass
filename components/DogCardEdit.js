import React from "react";
import styled from "styled-components";
import Image from "next/image";
import deleteButtonCardImage from "../public/images/del-button-card.png";

export default function DogCardEdit({
  dog,
  editedDog,
  onDelete,
  onSave,
  onCancel,
  onChange,
}) {
  const handleDeleteClick = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this dog?"
    );
    if (confirmation) {
      onDelete(dog.id);
    }
  };

  const handleSaveClick = () => {
    onSave();
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange(name, value);
  };

  return (
    <div>
      <Grid>
        <NameSex>
          {dog.name} {dog.sex === "male" ? "♂" : "♀"}
        </NameSex>
        <LabelRace>Race:</LabelRace>
        <EditRace
          type="text"
          maxLength={26}
          name="race"
          label="race"
          id="race"
          placeholder="Race"
          value={editedDog.race}
          onChange={handleInputChange}
        />
        <LabelBirthDate>born</LabelBirthDate>
        <EditBirthDate
          type="date"
          maxLength={16}
          name="birthdate"
          label="birthdate"
          id="birthdate"
          placeholder="Date of Birth"
          value={editedDog.birthdate}
          onChange={handleInputChange}
        />
        <LabelBirthPlace>in</LabelBirthPlace>
        <EditBirthPlace
          type="text"
          maxLength={16}
          name="birthplace"
          label="birthplace"
          id="birthplace"
          placeholder="Place of birth"
          value={editedDog.birthplace} // Use the editedDog prop here
          onChange={handleInputChange}
        />
        <LabelTransponder>Transponder:</LabelTransponder>
        <EditTransponder
          type="text"
          maxLength={16}
          name="transponder"
          label="transponder"
          id="transponder"
          placeholder="Transponder ID"
          value={editedDog.transponder} // Use the editedDog prop here
          onChange={handleInputChange}
        />
      </Grid>
      <Grid2>
        <EditVaccinationsLabel htmlFor="vaccinations">
          Vaccinations:
        </EditVaccinationsLabel>{" "}
        <EditVaccinations
          type="textarea"
          name="vaccinations"
          placeholder="Vaccinations"
          value={editedDog.vaccinations} // Use the editedDog prop here
          onChange={handleInputChange}
        />
        <EditInsurancesLabel htmlFor="insurances">
          Insurances:
        </EditInsurancesLabel>{" "}
        <EditInsurances
          type="textarea"
          name="insurances"
          placeholder="Insurances"
          value={editedDog.insurances} // Use the editedDog prop here
          onChange={handleInputChange}
        />
        <DeleteCardButton onClick={handleDeleteClick}>
          <Image
            src={deleteButtonCardImage}
            width="20"
            height="22"
            alt="Delete"
          />
        </DeleteCardButton>
        <CancelButton onClick={handleCancelClick}>Cancel</CancelButton>
        <SaveButton onClick={handleSaveClick}>Save</SaveButton>
      </Grid2>
    </div>
  );
}

const DeleteCardButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  background-color: transparent;
  border: none;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40px 110px 110px 40px;
  column-gap: 5px;
  row-gap: 5px;
`;

const NameSex = styled.h2`
  grid-area: 1 / 1 / 1 / 3;
  margin-bottom: 8px;
`;

const LabelRace = styled.label`
  grid-area: 2 / 1 / 2 / 3;
`;

const EditRace = styled.input`
  grid-area: 2 / 2 / 2 / 2;
  width: 250px;
`;

const LabelBirthDate = styled.label`
  grid-area: 3 / 1 / 3 / 1;
  margin-right: 10px;
`;

const EditBirthDate = styled.input`
  grid-area: 3 / 2 / 3 / 3;
  width: 120px;
`;

const LabelBirthPlace = styled.label`
  grid-area: 3 / 2 / 3 / 3;
  margin-left: 125px;
`;

const EditBirthPlace = styled.input`
  grid-area: 3 / 2 / 3 / 3;
  margin-left: 145px;
  width: 105px;
`;

const LabelTransponder = styled.label`
  grid-area: 6 / 1 / 6 / 1;
`;

const EditTransponder = styled.input`
  grid-area: 6 / 2 / 6 / 3;
  margin-left: 60px;
  margin-bottom: 10px;
  width: 190px;
`;
const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 150px 150px;
  column-gap: 5px;
`;

const EditVaccinationsLabel = styled.label`
  grid-area: 1 / 1 / 1 / 1;
`;

const EditVaccinations = styled.textarea`
  grid-area: 2 / 1 / 2 / 1;
  width: 140px;
  max-width: 140px;
  height: 50px;
  max-height: 200px;
`;

const EditInsurancesLabel = styled.label`
  grid-area: 1 / 2 / 1 / 2;
`;

const EditInsurances = styled.textarea`
  grid-area: 2 / 2 / 2 / 2;
  margin-bottom: 15px;
  width: 140px;
  max-width: 140px;
  height: 50px;
  max-height: 200px;
`;

const SaveButton = styled.button`
  grid-area: 10 / 1 / 10 / 1;
  width: 80px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;

const CancelButton = styled.button`
  grid-area: 10 / 2 / 10 / 2;
  margin-left: 40px;
  width: 80px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;
