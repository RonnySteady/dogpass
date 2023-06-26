import Link from "next/link";
import styled from "styled-components";
import { useForm } from "react-hook-form";

export default function AddDogForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  // console.log(errors);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name">Name: </label>
        <input
          type="text"
          {...register("Name", { required: true, min: 2, maxLenght: 15 })}
        />
        <br></br>
        <Grid>
          <LabelDateBirth htmlFor="Date of birth">
            Date of birth:{" "}
          </LabelDateBirth>
          <input
            type="date"
            placeholder="Date of birth"
            {...register("birthdate", {})}
          />
          <LabelPlaceBirth htmlFor="Place of birth">
            Place of birth:{" "}
          </LabelPlaceBirth>
          <input
            type="text"
            {...register("birthplace", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
        </Grid>
        <Grid>
          <div>
            <label htmlFor="Sex">Sex: </label>
          </div>
          <DivRadioLabel>
            <RadioButton
              type="radio"
              label="female"
              {...register("Sex", { required: true })}
              value="female"
            />
            <LabelSex htmlFor="Female"> ♀ </LabelSex>
            <RadioButton
              type="radio"
              label="male"
              {...register("Sex", { required: true })}
              value="male"
            />
            <LabelSex htmlFor="Male"> ♂ </LabelSex>
          </DivRadioLabel>
          <LabelRaceBreed htmlFor="Race/Breed">Race/Breed: </LabelRaceBreed>
          <input
            type="text"
            {...register("Race/Breed", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
        </Grid>
        <Grid>
          <LabelVaccinations htmlFor="Vaccinations">
            Vaccinations:{" "}
          </LabelVaccinations>
          <textarea
            rows="3"
            {...register("Vaccinations", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelInsurances htmlFor="Insurances">Insurances: </LabelInsurances>
          <textarea
            {...register("Insurances", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
        </Grid>
        <Grid>
          <Link href="/">
            <CancelButton type="button">Cancel</CancelButton>
          </Link>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Grid>
      </Form>
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 325px;
  border: 2px solid;
  border-radius: 15px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
`;

const Grid = styled.div`
  display: grid;
  column-gap: 15px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

const LabelDateBirth = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const LabelPlaceBirth = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const DivRadioLabel = styled.div`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 2;
`;

const LabelSex = styled.label`
  font-size: 20px;
`;

const RadioButton = styled.input`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 2;
  grid-row-end: 3;
`;

const LabelRaceBreed = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const LabelVaccinations = styled.label`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const LabelInsurances = styled.label`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;

const CancelButton = styled.button`
  grid-column-start: 1;
  grid-column-end: 1;
  margin: 10px;
  width: 100px;
`;

const SubmitButton = styled.button`
  grid-column-start: 2;
  grid-column-end: 2;
  margin: 10px;
  width: 100px;
`;
