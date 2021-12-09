import { useFetchFirestore } from "../hooks/useFetchFirestore";
import { FaPlusCircle } from "react-icons/fa";
import { useModal } from "../hooks/useModal";
import Modal from "./common/Modal";
import UsersTable from "./tables/UsersTable";
import UserRegister from "./forms/UserRegister";

const Users = () => {
  const { data, loading } = useFetchFirestore("usuarios");
  const [isOpen, openModal, closeModal] = useModal(false);
  return (
    <section>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div>
          <button
            className="mb-3 flex items-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            onClick={openModal}
          >
            <FaPlusCircle />
            <span className="ml-1">Agregar Usuario</span>
          </button>
          <Modal
            isOpen={isOpen}
            closeModal={closeModal}
            title={"Registrar Usuario"}
          >
            <UserRegister />
          </Modal>
          <UsersTable data={data} />
        </div>
      )}
    </section>
  );
};

export default Users;
