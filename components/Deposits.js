import { firebaseApp } from "../lib/firebase";
import { getFirestore, collection, doc } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import CrudTable from "./CrudTable";
import { FaPlusCircle } from "react-icons/fa";

const Deposits = () => {
  const [depositos, loadingDepositos, errorDepositos] = useCollection(
    collection(getFirestore(firebaseApp), "depositos")
  );

  return (
    <section>
      <button className="mb-3 flex items-center text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <FaPlusCircle />
        <span className="ml-1">Agregar depósito</span>
      </button>
      {errorDepositos && <strong>Error: {JSON.stringify(error)}</strong>}
      {loadingDepositos && <span>Loading...</span>}
      {depositos && <CrudTable data={depositos} />}
    </section>
  );
};

export default Deposits;
