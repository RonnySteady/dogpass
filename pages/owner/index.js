import Header from "../../components/Header";
import Navbar from "../../components/NavBar";
import OwnerCard from "../../components/OwnerCard";

export default function Owner({ dogs }) {
  return (
    <main>
      <Header />
      <OwnerCard />
      <Navbar
        buttonText1="Go to dogs"
        link1="/"
        buttonText2="Add a dog"
        link2="/newdog"
      />
    </main>
  );
}
