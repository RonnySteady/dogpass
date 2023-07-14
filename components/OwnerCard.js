import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import editButtonCardImage from "../public/images/edit-button-card.png";

export default function OwnerCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const [formData, setFormData] = useState({});

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem("formData");
      setIsEditing(
        !storedData || Object.keys(JSON.parse(storedData)).length === 0
      );
    }
  }, []);

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    setFormData(data);
    setIsEditing(false);
  };

  const onCancel = () => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
    setIsEditing(false);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setFormData(parsedData);
      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  return (
    <StyledOwnerCard>
      <Grid>
        {isEditing ? (
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputTitle {...register("Title", { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </InputTitle>
            <InputFirstName
              type="text"
              placeholder="First name"
              {...register("firstName", { required: true, maxLength: 80 })}
            />
            <InputLastName
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: true, maxLength: 100 })}
            />
            <InputEmail
              type="text"
              placeholder="Email"
              {...register("email", {
                required: false,
                pattern: /^\S+@\S+$/i,
              })}
            />
            <InputMobile
              type="tel"
              placeholder="Mobile number"
              {...register("mobileNumber", {
                required: false,
                minLength: 6,
                maxLength: 16,
              })}
            />
            <InputPostal
              type="textarea"
              placeholder="Postal address"
              style={{ whiteSpace: "pre-wrap" }}
              {...register("postal", {
                required: false,
                minLength: 5,
                maxLength: 50,
              })}
            />

            <CancelButton type="button" onClick={onCancel}>
              Cancel
            </CancelButton>
            <SubmitButton type="submit" value="Submit" />
          </form>
        ) : (
          <>
            <Grid>
              <StyledTitle>{formData.Title}</StyledTitle>
              <StyledName>
                {formData.firstName} {formData.lastName}
              </StyledName>
              <StyledEmail>{formData.email}</StyledEmail>
              <StyledMobile>{formData.mobileNumber}</StyledMobile>{" "}
              <StyledPostal>{formData.postal}</StyledPostal>
            </Grid>
            <div>
              <EditCardButton type="button" onClick={() => setIsEditing(true)}>
                <Image
                  src="/images/edit-button-card.png"
                  width="20"
                  height="20"
                  alt="Edit icon"
                />
              </EditCardButton>
            </div>
          </>
        )}
      </Grid>
    </StyledOwnerCard>
  );
}

const StyledOwnerCard = styled.li`
  display: flex;
  position: relative;
  width: 350px;
  min-height: 200px;
  margin: auto;
  margin-bottom: 30px;
  padding: 15px 25px 15px 25px;
  background: rgba(255, 255, 255, 0.38);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.29);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 270px 16px;
  column-gap: 15px;
`;

const StyledTitle = styled.p`
  font-size: 12px;
  margin-top: 5px;
`;

const EditCardButton = styled.button`
  font-size: 11px;
  font-family: Open Sans, Roboto, Avenir, system-ui;
  color: #222222;
  position: absolute;
  top: 21px;
  right: 25px;
  background-color: transparent;
  border: none;
`;

const StyledName = styled.p`
  font-size: 22px;
  grid-area: 2 / 1 / 2 / 2;
  margin-bottom: 10px;
  width: 274px;
`;

const StyledEmail = styled.p`
  grid-area: 3 / 1 / 3 / 1;
  margin-bottom: 2px;
  width: 274px;
  align: top;
`;

const StyledMobile = styled.p`
  grid-area: 4 / 1 / 4 / 1;
  width: 274px;
  margin-bottom: 10px;
`;

const StyledPostal = styled.p`
  grid-area: 5 / 1 / 5 / 1;
  width: 274px;
  align: top;
  white-space: pre-wrap;
  margin-bottom: 5px;
`;

const InputTitle = styled.select`
  width: 80px;
  margin-bottom: 10px;
`;

const InputFirstName = styled.input`
  display: grid;
  width: 270px;
  margin-bottom: 10px;
`;

const InputLastName = styled.input`
  width: 270px;
  margin-bottom: 10px;
`;

const InputEmail = styled.input`
  width: 270px;
  margin-bottom: 10px;
`;
const InputMobile = styled.input`
  width: 270px;
  margin-bottom: 10px;
`;

const InputPostal = styled.textarea`
  width: 270px;
  height: 55px;
  margin-bottom: 15px;
`;

const CancelButton = styled.button`
  width: 75px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;

const SubmitButton = styled.input`
  width: 75px;
  margin-left: 10px;
  padding: 1px;
  font-size: 12px;
  border-radius: 6px;
`;
