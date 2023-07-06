import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function OwnerCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit = (data) => {
    console.log(data);
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

  console.log(errors);

  return (
    <StyledOwnerCard>
      <Grid>
        {isEditing ? (
          // Form code...
          <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("Title", { required: true })}>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Dr">Dr</option>
            </select>
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
                maxLength: 12,
              })}
            />

            <input type="submit" value="Save" />
            <button type="button" onClick={onCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <>
            <Grid>
              <StyledTitle>{formData.Title}</StyledTitle>
              <StyledName>
                {formData.firstName} {formData.lastName}
              </StyledName>
              <StyledEmail>
                <Image
                  src="/images/icons8-mail-94.png"
                  width="20"
                  height="20"
                  alt="Mail icon"
                />
                {formData.email}
              </StyledEmail>
              <StyledMobile>
                <Image
                  src="/images/icons8-phone-94.png"
                  width="20"
                  height="20"
                  alt="Phone icon"
                />
                {formData.mobileNumber}
              </StyledMobile>{" "}
            </Grid>
            {/* Rest of the non-editing code */}
            <div>
              <EditButton type="button" onClick={() => setIsEditing(true)}>
                <Image
                  src="/images/edit-button-card.png"
                  width="15"
                  height="15"
                  alt="Edit icon"
                />
              </EditButton>
            </div>
          </>
        )}
      </Grid>
    </StyledOwnerCard>
  );
}

const StyledOwnerCard = styled.li`
  display: grid;
  width: 325px;
  min-height: 200px;
  margin: auto;
  margin-bottom: 30px;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 15px;
  padding-bottom: 16px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  //   background: rgba(0, 0, 0, 0.4);
  background: rgba(255, 255, 255, 0.22);
  backdrop-filter: blur(5.4px);
  -webkit-backdrop-filter: blur(5.4px);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 180px 80px;
  column-gap: 10px;
`;

const StyledTitle = styled.p`
  grid-area: 1 / 1 / 1 / 1;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 0px;
`;

const StyledName = styled.h3`
  grid-area: 2 / 1 / 2 / 1;
  margin-bottom: 10px;
  width: 200px;
`;

const StyledEmail = styled.p`
  grid-area: 3 / 1 / 3 / 1;
  margin-bottom: 2px;
  width: 250px;
  align: top;
`;

const StyledMobile = styled.p`
  grid-area: 4 / 1 / 4 / 1;
  width: 250px;
`;

const InputFirstName = styled.input`
  margin-bottom: 10px;
  grid-area: 1 / 2 / 1 / 2;
`;

const InputLastName = styled.input`
  margin-bottom: 10px;
  grid-area: 1 / 1 / 1 / 1;
`;

const InputEmail = styled.input`
  margin-bottom: 10px;
  grid-area: 1 / 1 / 1 / 1;
`;
const InputMobile = styled.input`
  margin-bottom: 10px;
  grid-area: 1 / 1 / 1 / 1;
`;

const EditButton = styled.button`
  display: grid;
  margin: auto;
  margin-top: 5px;
  margin-right: 0px;
  padding: 0;
  border: none;
  background: none;
  font-size: 14px;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
`;
