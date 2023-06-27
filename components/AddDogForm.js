// import { useState } from "react";
// import { uid } from "uid";
// import Link from "next/link";
// import DogCard from "../DogCard";
import Link from "next/link";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function AddDogForm({ dogs }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dogs.push(data);
    router.push(`/`);
    console.log(data);
    console.log(dogs);
    console.log(errors);
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name">Name: </label>
        <Input
          type="text"
          // placeholder="Name"
          {...register("name", { required: true, min: 2, maxLenght: 15 })}
        />
        <br></br>
        <Grid>
          <LabelDateBirth htmlFor="Date of birth">
            Date of birth:{" "}
          </LabelDateBirth>
          <Input
            type="date"
            placeholder="Date of birth"
            {...register("birthdate", {})}
          />
          <LabelPlaceBirth htmlFor="Place of birth">
            Place of birth:{" "}
          </LabelPlaceBirth>
          <Input
            type="text"
            // placeholder="Place of birth"
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
              {...register("sex", { required: true })}
              value="female"
            />
            <LabelSex htmlFor="Female"> ♀ </LabelSex>
            <RadioButton
              type="radio"
              label="male"
              {...register("sex", { required: true })}
              value="male"
            />
            <LabelSex htmlFor="Male"> ♂ </LabelSex>
          </DivRadioLabel>
          <LabelRaceBreed htmlFor="Race/Breed">Race/Breed: </LabelRaceBreed>
          <Input
            type="text"
            // placeholder="Race/Breed"
            {...register("race", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelColor htmlFor="Color">color: : </LabelColor>
          <Input
            type="text"
            // placeholder="Race/Breed"
            {...register("color", {
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
          <Textarea
            rows="3"
            // placeholder="Vaccinations"
            {...register("vaccinations", {
              required: true,
              min: 2,
              maxLenght: 15,
            })}
          />
          <LabelInsurances htmlFor="Insurances">Insurances: </LabelInsurances>
          <Textarea
            // placeholder="Insurances"
            {...register("insurances", {
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
        {/* RONNYS STYLING RADIO BUTTONS */}
        {/* <div class="radio">
          <div class="radio__1">
            <input id="radio-1" type="radio" name="radio" value="1">
              <label for="radio-1"></label>
            </input>
          </div>

          <div class="radio__2">
            <input id="radio-2" type="radio" name="radio" value="2" checked>
              <label for="radio-2"></label>
            </input>
          </div>
        </div> */}
        {/* RONNYS STYLING RADIO BUTTONS */}
      </Form>

      {/* {newDog.map((dog) => (
        <DogCard key={dog.id} dog={dog} />
      ))} */}
    </>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 325px;
  margin: auto;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  // padding-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.29);
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  background: whitesmoke;
  border-radius: 15px;
  padding-left: 12px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Textarea = styled.textarea`
  background: whitesmoke;
  border-radius: 15px;
  padding-left: 12px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
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

const LabelColor = styled.label`
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
  background-color: red;
  transform: scale(1.8);
  // vertical-align: middle;
  margin: 5px;
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
  margin: 10px;
  background-color: #800000;
  color: white;
  padding: 5px 30px;
  font-size: 16px;
  border-radius: 15px;
  grid-column-start: 1;
  grid-column-end: 1;
`;

const SubmitButton = styled.button`
  margin: 10px;
  background-color: #445540;
  color: white;
  padding: 5px 30px;
  font-size: 16px;
  border-radius: 15px;
  grid-column-start: 2;
  grid-column-end: 2;
`;

// /*  RADIO  */
// const RadioButtonNeu = styled.button``
//   grid-column: 1 / 2;
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   justify-items: center;
//   input { display: none; }

//   &__1, &__2 {
//     & input:checked {
//         & ~ label {
//           box-shadow: $inner-shadow;
//           &::after {
//             background: var(--primary);}
//       }
//     }
//     label {
//       box-shadow: $shadow;
//       position: relative;
//       display: flex;
//       justify-content: center;
//       align-items: center;
// 		  cursor: pointer;
//       width: 2.8rem;
// 			height: 2.8rem;
// 			border-radius: 50%;
//       &:hover {&::after{background: var(--primary);}}

// 		  &::after {
// 			  content: "";
// 			  position: absolute;
// 			  width: 1.4rem;
// 			  height: 1.4rem;
// 			  background: var(--greyDark);
// 			  border-radius: 50%;
// 			  transition: 0.3s ease;
// 		  }
//     }
//   }
// `
