import { useEffect, useState } from "react";
import { getFetchUsers } from "../helpers/getFetchUsers";

export const useFetchUsers = () => {
  const [users, setUsers] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getFetchUsers().then((users) => setUsers({ data: users, loading: false }));
  }, []);
  return users;
};
