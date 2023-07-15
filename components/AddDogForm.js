import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function AddDogForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const storedDogs = localStorage.getItem("dogs");
    if (storedDogs) {
      setDogs(JSON.parse(storedDogs));
    }
  }, []);

  const onSubmit = (data) => {
    const newDog = { id: uid(), ...data };
    setDogs((prevDogs) => {
      const updatedDogs = [...prevDogs, newDog];
      localStorage.setItem("dogs", JSON.stringify(updatedDogs));
      return updatedDogs;
    });
    router.push(`/`);
  };
  

  function handleCancel() {
    router.push("/");
  }

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <LabelName htmlFor="Name">Name: </LabelName>
        <InputName
          type="text"
          {...register("name", { required: true, min: 2, maxLength: 12 })}
        />
        <Grid>
          <LabelRace htmlFor="Race">Race/Breed: </LabelRace>
          <InputRace
            type="text"
            {...register("race", {
              required: false,
              min: 2,
              maxLength: 26,
            })}
          />
          <LabelColor htmlFor="Color">Color: </LabelColor>
          <InputColor
            type="text"
            {...register("color", {
              required: false,
              min: 2,
              maxLength: 15,
            })}
          />
        </Grid>
        <Grid3>
          <LabelSex htmlFor="Sex">Sex: </LabelSex>

          <LabelFemale htmlFor="Female"> ♀ </LabelFemale>
          <ButtonFemale
            type="radio"
            label="female"
            {...register("sex", { required: true })}
            value="female"
          />

          <LabelMale htmlFor="Male"> ♂ </LabelMale>
          <ButtonMale
            type="radio"
            label="male"
            {...register("sex", { required: true })}
            value="male"
          />
          <LabelTransponder htmlFor="Transponder">
            Transponder:{" "}
          </LabelTransponder>
          <InputTransponder
            type="text"
            {...register("transponder", {
              required: false,
              min: 2,
              maxLength: 16,
            })}
          />
        </Grid3>
        <Grid>
          <LabelDateBirth htmlFor="Date of birth">
            Date of birth:{" "}
          </LabelDateBirth>
          <InputDateBirth type="date" {...register("birthdate", {})} />
          <LabelPlaceBirth htmlFor="Place of birth">
            Place of birth:{" "}
          </LabelPlaceBirth>
          <InputPlaceBirth type="text" {...register("birthplace", {})} />
        </Grid>
        <Grid></Grid>
        <Grid>
          <LabelVaccinations htmlFor="Vaccinations">
            Vaccinations:{" "}
          </LabelVaccinations>
          <TextareaVaccinations
            rows="3"
            {...register("vaccinations", {
              required: false,
              min: 2,
              maxLength: 15,
            })}
          />
          <LabelInsurances htmlFor="Insurances">Insurances: </LabelInsurances>
          <TextareaInsurances
            {...register("insurances", {
              required: false,
              min: 2,
              maxLength: 15,
            })}
          />
        </Grid>
        <Grid>
          <SubmitButton type="submit">Submit</SubmitButton>
          <CancelButton onClick={handleCancel}>Cancel</CancelButton>
        </Grid>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  color: #333333;
  width: 350px;
  margin: auto;
  margin-bottom: 30px;
  padding: 15px 25px 16px;
  background: rgba(255, 255, 255, 0.35);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.25);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 140px 140px;
  column-gap: 15px;
  margin: 2px 0 10px;
`;

const Grid3 = styled.div`
  display: grid;
  grid-template-columns: 55px 70px 140px;
  column-gap: 15px;
  margin: 2px 0 20px;
`;

const LabelName = styled.label`
  grid-column: 1;
  grid-row: 1;
`;

const InputName = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 15px;
  grid-column: 1 / span 2;
  grid-row: 2;
`;

const LabelRace = styled.label`
  grid-column: 1;
  grid-row: 2;
`;

const InputRace = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  grid-column: 1;
  grid-row: 3;
`;

const LabelColor = styled.label`
  grid-column: 2;
  grid-row: 2;
`;

const InputColor = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  grid-column: 2;
  grid-row: 3;
`;

const LabelSex = styled.label`
  grid-column: 1;
  grid-row: 7;
`;

const LabelFemale = styled.label`
  font-size: 20px;
  font-weight: bold;
  grid-column: 1;
  grid-row: 8;
`;

const LabelMale = styled.label`
  font-size: 20px;
  font-weight: bold;
  grid-column: 2;
  grid-row: 8;
`;

const ButtonFemale = styled.input`
  margin-left: 21px;
  grid-column: 1;
  grid-row: 8;
`;

const ButtonMale = styled.input`
  margin-left: 10px;
  grid-column: 2;
  grid-row: 8;
`;

const LabelDateBirth = styled.label`
  grid-column: 1;
  grid-row: 4;
`;

const InputDateBirth = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  grid-column: 1;
  grid-row: 5;
`;

const LabelPlaceBirth = styled.label`
  grid-column: 2;
  grid-row: 4;
`;

const InputPlaceBirth = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  grid-column: 2;
  grid-row: 5;
`;

const LabelTransponder = styled.label`
  grid-column: 3;
  grid-row: 7;
`;

const InputTransponder = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  grid-column: 3;
  grid-row: 8;
`;

const LabelVaccinations = styled.label`
  grid-column: 1;
  grid-row: 1;
`;

const TextareaVaccinations = styled.textarea`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  margin-bottom: 15px;
  grid-column: 1;
  grid-row: 2;
`;

const LabelInsurances = styled.label`
  grid-column: 2;
  grid-row: 1;
`;

const TextareaInsurances = styled.textarea`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px 0 5px 12px;
  margin-bottom: 15px;
  grid-column: 2;
  grid-row: 2;
`;

const CancelButton = styled.button`
  background-color: #800000;
  color: whitesmoke;
  padding: 5px;
  border-radius: 6px;
  grid-column: 1;
  grid-row: 20;
`;

const SubmitButton = styled.button`
  background-color: #445540;
  color: whitesmoke;
  padding: 5px;
  border-radius: 6px;
  grid-column: 2;
  grid-row: 20;
`;