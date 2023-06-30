import styled from "styled-components";
import { useState } from "react";

export default function DogCard({ dog, onDelete }) {
  const handleDeleteClick = () => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this dog?"
    );
    if (confirmation) {
      onDelete(dog.name);
    }
  };

  return (
    <StyledDogCard>
      <Grid>
        <HeadName>{dog.name}</HeadName>
        <SpanRace>{dog.race}</SpanRace>
        <SpanBirthDate>born {dog.birthdate}</SpanBirthDate>
        <SpanBirthPlace>in {dog.birthplace}</SpanBirthPlace>
        <SpanSex>Sex: {dog.sex}</SpanSex>
        <SpanColor>Color: {dog.color}</SpanColor>
        <SpanVaccinations>Vaccinations: {dog.vaccinations}</SpanVaccinations>
        <SpanInsurances>Insurances: {dog.insurances}</SpanInsurances>
        <DeleteCardButton onClick={handleDeleteClick}>❌</DeleteCardButton>
      </Grid>
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

const HeadName = styled.h2`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 1;
`;
const SpanRace = styled.span`
  margin-bottom: 10px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 2;
`;
const SpanBirthDate = styled.span`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 4;
  grid-row-end: 4;
`;
const SpanBirthPlace = styled.span`
  margin-bottom: 10px;

  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 5;
  grid-row-end: 5;
`;
const SpanSex = styled.span`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 4;
  grid-row-end: 4;
`;
const SpanColor = styled.span`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 5;
  grid-row-end: 5;
`;
const SpanVaccinations = styled.span`
  margin-top: 10px;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 8;
  grid-row-end: 8;
`;
const SpanInsurances = styled.span`
  margin-top: 10px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 8;
  grid-row-end: 8;
`;

const DeleteCardButton = styled.button`
  display: grid;
  margin: auto;
  margin-top: 4px;
  margin-right: 0px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);

  background-color: Transparent;

  border-radius: 15px;
  padding: 1px 3px;
  font-size: 8px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;
