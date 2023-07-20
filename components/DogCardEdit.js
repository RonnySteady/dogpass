import React from "react";
import styled from "styled-components";
import {RiSave3Fill} from "react-icons/ri"

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
          value={editedDog.birthplace} 
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
          value={editedDog.transponder} 
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
          value={editedDog.vaccinations} 
          onChange={handleInputChange}
        />
        <EditInsurancesLabel htmlFor="insurances">
          Insurances:
        </EditInsurancesLabel>{" "}
        <EditInsurances
          type="textarea"
          name="insurances"
          placeholder="Insurances"
          value={editedDog.insurances} 
          onChange={handleInputChange}
        />
        <DeleteButton onClick={handleDeleteClick}>DELETE</DeleteButton>
        <SaveButton onClick={handleSaveClick}><RiSave3Fill size={22}/></SaveButton>
      </Grid2>
    </div>
  );
}



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

const SaveButton = styled.button`
  position: absolute;
  top: 20px;
  right: 25px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.textColor};
`;

const DeleteButton = styled.button`
  background-color: red;
  font-size: 10px;
  border: 1.5px solid ${({ theme }) => theme.textColor};;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  top: 22px;
  right: 55px;
  width: 60px;
  padding: 1px;
  font-weight: 500;
  border-radius: 3px;
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
  font-family: system-ui;
  font-size: 14px;
  margin-bottom: 5px;
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
  font-family: system-ui;
  font-size: 14px;
  margin-bottom: 5px;
  width: 140px;
  max-width: 140px;
  height: 50px;
  max-height: 200px;
`;


