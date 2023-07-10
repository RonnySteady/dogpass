import Heading from "/components/Heading";
import OwnerCard from "../../components/OwnerCard";
import styled from "styled-components";
import Link from "next/link";

export default function Owner({ dogs }) {
  return (
    <main>
      <Heading>Owner 🦮 </Heading>
      <OwnerCard />
      <StyledLink href="/">Go to dogs</StyledLink>
    </main>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 140px;
  margin: auto;
  margin-bottom: 25px;
  background-color: #445540;
  color: whitesmoke;
  padding: 5px;
  border-radius: 15px;
  text-decoration: none;
`;
