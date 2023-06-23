import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";
import DogCard from "../DogCard";
import Link from "next/link";

export default function CreateDog({ dogs }) {
  const [newDog, setNewDog] = useState([]);
  // const [dateOfBirth, setDateOfBirth] = useState("");
  // const [placeOfBirth, setPlaceOfBirth] = useState("");
  // const [sex, setSex] = useState("");
  // const [color, setColor] = useState("");
  // const [breedRace, setBreedRace] = useState("");
  // const [transponder, setTransponder] = useState("");
  // const [vaccinations, setVaccinations] = useState("");
  // const [insurances, setInsurances] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // form submission logic

    const data = new FormData(event.target);
    const formData = Object.fromEntries(data);
    console.log(formData);
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

  console.log(dogs);
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledLabel htmlFor="name">Name: * </StyledLabel>
          <StyledInput type="text" name="name" id="name" required />
        </div>
        <div>
          <StyledLabel htmlFor="dateofbirth">Date of birth: </StyledLabel>
          <StyledInput type="date" name="dateofbirth" id="dateofbirth" />
        </div>
        <div>
          <StyledLabel htmlFor="placeofbirth">Place of birth: </StyledLabel>
          <StyledTextarea name="placeofbirth" id="placeofbirth" rows="1" />
        </div>
        <div>
          <StyledLabel htmlFor="sex">Sex: *</StyledLabel>
          <StyledInput
            type="radio"
            name="sex"
            id="male"
            value="male"
            required
          />
          <StyledLabel htmlFor="male">Male</StyledLabel>
          <StyledInput
            type="radio"
            name="sex"
            id="female"
            value="female"
            required
          />
          <StyledLabel htmlFor="female">Female</StyledLabel>
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

      <div>
        {newDog.map((dog) => (
          <DogCard key={dog.id} dog={dog} />
        ))}
      </div>
    </>
  );
}

const StyledLabel = styled.label`
  font-size: 18px;
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
  flex-direction: row;
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
