import Heading from "/components/Heading";
import OwnerCard from "../../components/OwnerCard";
import BackButton from "../../components/BackButton";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Owner({ dogs }) {
  console.log(dogs ? dogs : 0);
  return (
    <main>
      <Heading>Dog 🦮 Owner</Heading>
      <OwnerCard />
      <Link href="/">
        <BackButton />
      </Link>
    </main>
  );
}
