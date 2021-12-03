import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import Layout from "../components/Layout";

export default function Home() {
  // const { authUser, loading, disconnect } = useAuth();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!loading && !authUser) router.push("/login");
  // }, [authUser, loading, router]);

  return (
    <Layout>
      <div>hola</div>
    </Layout>
  );
}
