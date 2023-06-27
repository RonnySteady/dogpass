import GlobalStyle from "../styles";
import Head from "next/head";
import { dogs } from "../lib/data";

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
