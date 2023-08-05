import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import { BiSolidEdit } from "react-icons/bi";
import { database } from "../firebase/database";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { useAuth } from "../firebase/auth"; // Import the AuthContext


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
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && user) {
      const fetchOwnerDataFromFirebase = async () => {
        const userId = user.uid; // Get the user ID
        const ownerDocRef = doc(database, "users", userId, "owner", "owner_id");
        const ownerDocSnapshot = await getDoc(ownerDocRef);
        if (ownerDocSnapshot.exists()) {
          const ownerData = ownerDocSnapshot.data();
          setFormData(ownerData);
          Object.keys(ownerData).forEach((key) => {
            setValue(key, ownerData[key]);
          });
        } else {
          setIsEditing(true);
        }
      };

      fetchOwnerDataFromFirebase();
    }
  }, [loading, user, setValue]);



  const onSubmit = async (data) => {
    try {
      if (!user) {
        console.error("User is not logged in.");
        return;
      }

      const userId = user.uid; // Get the user ID
      const ownerDocRef = doc(database, "users", userId, "owner", "owner_id");
      await setDoc(ownerDocRef, data);
      setFormData(data);
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving owner data:", error);
    }
  };
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onUpdate(editedDog);
    setIsEditMode(false);
  };

  const onCancel = () => {
    setIsEditing(false);
  };
  


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
              <EditCardButton onClick={handleEditClick}>
                <BiSolidEdit size={22} />
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
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.backgroundColor};
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6px);
  border: 1px solid ${({ theme }) => theme.borderColor};
  z-index: 3;
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
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  top: 20px;
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
