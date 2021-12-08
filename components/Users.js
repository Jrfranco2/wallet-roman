import { useFetchUsers } from "../hooks/useFetchUsers";
import UsersTable from "./UsersTable";

const Users = () => {
  const { data, loading } = useFetchUsers();
  return <section>{!loading && <UsersTable data={data} />}</section>;
};

export default Users;
