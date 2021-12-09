import { useFetchFirestore } from "../hooks/useFetchFirestore";
import UsersTable from "./UsersTable";

const Users = () => {
  const { data, loading } = useFetchFirestore("usuarios");
  return (
    <section>
      {loading && <div>Loading...</div>}
      {!loading && <UsersTable data={data} />}
    </section>
  );
};

export default Users;
