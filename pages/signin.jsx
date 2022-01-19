import Head from "next/head";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex justify-center items-center h-[calc(100vh-126px)] text-4xl text-blue gill-medium">
        Sign In
      </div>
    </Layout>
  );
}
