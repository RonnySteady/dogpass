import GlobalStyle from "../styles";
import Head from "next/head";
import { dogs } from "../lib/data";
import { AuthProvider } from '../firebase/auth'; 

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Dog Pass</title>
      </Head>
      <Component {...pageProps} dogs={dogs} />
    </AuthProvider>
  );
}
