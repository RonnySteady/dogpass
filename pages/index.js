import Heading from "../components/Heading";
import DogList from "../components/DogList";
import App from "../pages/_app";

export default function Home({ dogs }) {
  return (
    <main>
      <Heading>Dog Pass 🐕‍🦺</Heading>
      <DogList dogs={dogs} />
    </main>
  );
}
