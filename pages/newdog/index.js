import Header from "../../components/Header";
import AddDogForm from "../../components/AddDogForm";
import NavBar from "../../components/NavBar";

export default function DogForm({ dogs }) {
  return (
    <main>
      <Header />
      <AddDogForm dogs={dogs} />
      <NavBar
        buttonText1="Go to dogs"
        link1="/"
        buttonText2="Go to owner"
        link2="/owner"
      />
    </main>
  );
}
