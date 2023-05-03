import type { AppProps } from "next/app";
import "./app.css";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "../services";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Music Jam</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}
