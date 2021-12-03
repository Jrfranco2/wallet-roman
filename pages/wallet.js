import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

const Wallet = () => {
  const { authUser, loading } = useAuth();
  const router = useRouter();

  // Listen for changes on loading and authUser, redirect if needed
  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading, router]);
  return <div>esto es walllet</div>;
};

export default Wallet;
