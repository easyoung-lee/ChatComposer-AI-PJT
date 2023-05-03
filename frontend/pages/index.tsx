import Head from "next/head";
import Library from "../components/dashboard/library";
import MusicPlayer from "../components/dashboard/musicPlayer";

export default function Home() {
  return (
    <>
      <Library />
      <MusicPlayer />
    </>
  );
}
