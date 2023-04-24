import type { AppProps } from "next/app";
import "./app.css";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Music Jam</title>
        <meta
          name="description"
          content="Music Jam is the easiest way to make music"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
