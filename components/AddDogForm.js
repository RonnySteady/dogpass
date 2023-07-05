import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function AddDogForm({ dogs }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newDog = { id: uid(), ...data };
    dogs.push(newDog);
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
          {...register("name", { required: true, min: 2, maxLenght: 15 })}
        />
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
        <Grid>
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

          <LabelColor htmlFor="Color">Color: </LabelColor>
          <InputColor
            type="text"
            {...register("color", {
              required: false,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelTransponder htmlFor="Transponder">
            Transponder:{" "}
          </LabelTransponder>
          <InputTransponder
            type="text"
            {...register("transponder", {
              required: false,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelRace htmlFor="Race">Race/Breed: </LabelRace>
          <InputRace
            type="text"
            {...register("race", {
              required: false,
              min: 2,
              maxLenght: 15,
            })}
          />
        </Grid>
        <Grid>
          <LabelVaccinations htmlFor="Vaccinations">
            Vaccinations:{" "}
          </LabelVaccinations>
          <TextareaVaccinations
            rows="3"
            {...register("vaccinations", {
              required: false,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelInsurances htmlFor="Insurances">Insurances: </LabelInsurances>
          <TextareaInsurances
            {...register("insurances", {
              required: false,
              min: 2,
              maxLenght: 15,
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
  width: 325px;
  margin: auto;
  margin-bottom: 30px;
  padding: 15px 25px 16px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  column-gap: 15px;
  margin-top: 2px;
  margin-bottom: 15px;
`;

const LabelName = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`;
const InputName = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding: 5px;
  margin-bottom: 15px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
`;

const LabelDateBirth = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
`;
const InputDateBirth = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 5;
  grid-row-end: 5;
`;

const LabelPlaceBirth = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
`;

const InputPlaceBirth = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 5;
`;

const LabelSex = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 7;
  grid-row-end: 7;
`;

const LabelFemale = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 8;
  grid-row-end: 8;
`;

const LabelMale = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 9;
  grid-row-end: 9;
`;

const ButtonFemale = styled.input`
  margin: 4px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 8;
  grid-row-end: 8;
`;
const ButtonMale = styled.input`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 9;
  grid-row-end: 9;
`;

const LabelColor = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 7;
  grid-row-end: 7;
`;
const InputColor = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 8;
`;

const LabelTransponder = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 10;
  grid-row-end: 10;
`;

const InputTransponder = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 11;
  grid-row-end: 11;
`;

const LabelRace = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 10;
  grid-row-end: 10;
`;

const InputRace = styled.input`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 11;
  grid-row-end: 11;
`;

const LabelVaccinations = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 13;
  grid-row-end: 13;
`;

const TextareaVaccinations = styled.textarea`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 14;
  grid-row-end: 14;
`;

const LabelInsurances = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 13;
  grid-row-end: 13;
`;

const TextareaInsurances = styled.textarea`
  background: whitesmoke;
  border-radius: 6px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 14;
  grid-row-end: 14;
`;

const CancelButton = styled.button`
  background-color: #800000;
  color: whitesmoke;
  padding: 5px 40px;
  border-radius: 15px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 20;
  grid-row-end: 20;
`;

const SubmitButton = styled.button`
  background-color: #445540;
  color: whitesmoke;
  padding: 5px 30px;
  border-radius: 15px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 20;
  grid-row-end: 20;
`;
