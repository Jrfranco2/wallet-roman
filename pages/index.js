import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

export default function Home() {
  const { authUser, loading, disconnect } = useAuth();
  const router = useRouter();

  console.log(authUser);

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/login");
  }, [authUser, loading, router]);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <button
          onClick={disconnect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
        <div>hola putitos</div>
      </main>

      <footer className="">
        <div>este es el footer</div>
      </footer>
    </div>
  );
}
