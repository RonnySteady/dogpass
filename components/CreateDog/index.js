import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";
import DogCard from "../DogCard";
import Link from "next/link";

export default function CreateDog({ dogs }) {
  const [newDog, setNewDog] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);
    const updatedDog = [
      {
        id: uid(),
        name: formData.name,
        dateOfBirth: formData.dateofbirth,
        placeOfBirth: formData.placeofbirth,
        sex: formData.sex,
        color: formData.color,
        breedRace: formData.breedrace,
        transponder: formData.transponder,
        vaccinations: formData.vaccinations,
        insurances: formData.insurances,
      },
    ];
    setNewDog(updatedDog);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledLabel htmlFor="name">Name: * </StyledLabel>
          <StyledInput type="text" name="name" id="name" required />
        </div>

        <StyledFieldset>
          <legend>Sex: *</legend>
          <input
            type="radio"
            id="male"
            name="sex"
            value="male"
            checked={selectedOption === "male"}
            onChange={handleOptionChange}
          />
          <label htmlFor="male">Male</label>

          <input
            type="radio"
            id="female"
            name="sex"
            value="female"
            checked={selectedOption === "female"}
            onChange={handleOptionChange}
          />
          <label htmlFor="female">Female</label>
        </StyledFieldset>

        <div>
          <StyledLabel htmlFor="dateofbirth">Date of birth: </StyledLabel>
          <StyledInput type="date" name="dateofbirth" id="dateofbirth" />
        </div>
        <div>
          <StyledLabel htmlFor="placeofbirth">Place of birth: </StyledLabel>
          <StyledTextarea name="placeofbirth" id="placeofbirth" rows="1" />
        </div>

        <div>
          <StyledLabel htmlFor="color">Color: *</StyledLabel>
          <StyledTextarea name="color" id="color" rows="1" required />
        </div>
        <div>
          <StyledLabel htmlFor="breedrace">Breed/Race: </StyledLabel>
          <StyledTextarea name="breedrace" id="breedrace" rows="1" />
        </div>
        <div>
          <StyledLabel htmlFor="transponder">Transponder: </StyledLabel>
          <StyledTextarea name="transponder" id="transponder" rows="1" />
        </div>
        <div>
          <StyledLabel htmlFor="vaccinations">Vaccinations: </StyledLabel>
          <StyledTextarea name="vaccinations" id="vaccinations" rows="1" />
        </div>
        <div>
          <StyledLabel htmlFor="insurances">Insurances: </StyledLabel>
          <StyledTextarea name="insurances" id="insurances" rows="1" />
        </div>
        <Link href="/">
          <StyledCancelButton type="button">Cancel</StyledCancelButton>
        </Link>
        <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
      </StyledForm>

      {newDog.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))}
    </>
  );
}

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledFieldset = styled.fieldset`
  border: none;
  position: relative;
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  left: 50%;
  border: 3px solid white;
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
    0 0 16px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0 10px 0;
`;

const StyledTextarea = styled.input`
  display: flex;
  flex-direction: column;
  width: 50%;
  position: relative;
  left: 50%;
  border: 3px solid white;
  -webkit-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1),
    0 0 16px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.1), 0 0 16px rgba(0, 0, 0, 0.1);
  padding: 5px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 0 10px 0;
`;

const StyledRadio = styled.button`
  display: flex;
  position: relative;
  left: 50%;
  padding: 5px;
`;

const StyledForm = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const StyledCancelButton = styled.button`
  margin: 10px;
  background-color: #800000;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 15px;
`;

const StyledSubmitButton = styled.button`
  margin: 10px;
  background-color: #445540;
  color: white;
  padding: 10px 30px;
  font-size: 16px;
  border-radius: 15px;
`;
