import Heading from "/components/Heading";
import OwnerCard from "../../components/OwnerCard";
import styled from "styled-components";
import Link from "next/link";

export default function Owner({ dogs }) {
  return (
    <main>
      <Heading>Dog 🦮 Owner</Heading>
      <OwnerCard />
      <StyledLink href="/">Go to dogs</StyledLink>
    </main>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 160px;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: white;
  padding: 5px;
  font-size: 16px;
  border-radius: 15px;
  text-decoration: none;
`;
