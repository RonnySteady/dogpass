import GlobalStyle from "../styles";
import Head from "next/head";

const dogs = [
  {
    id: 1,
    name: "Anton",
    dateOfBirth: "14.07.2014",
    placeOfBirth: "Romania",
    sex: "male",
    color: "black",
    breed: "Shepard Labrador Mix",
  },
  {
    name: "Canella",
    dateOfBirth: "01.05.2018",
    placeOfBirth: "Spain",
    sex: "female",
    color: "brown",
    breed: "Unknown Mix",
  },
];

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Component {...pageProps} dogs={dogs} />
    </>
  );
}
