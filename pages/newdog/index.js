import Header from "../../components/Header";
import AddDogForm from "../../components/AddDogForm";

export default function DogForm({ dogs }) {
  return (
    <main>
      <Header />
      <AddDogForm dogs={dogs} />
    </main>
  );
}
