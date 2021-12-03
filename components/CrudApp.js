import { firebaseApp } from "../lib/firebase";
import { getFirestore, collection, doc } from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import CrudTable from "./CrudTable";
import { FaPlusCircle } from "react-icons/fa";

const CrudApp = () => {
  const [depositos, loadingDepositos, errorDepositos] = useCollection(
    collection(getFirestore(firebaseApp), "depositos")
  );

  const [usuarios, loadingUsuarios, errorUsuarios] = useCollection(
    collection(getFirestore(firebaseApp), "usuarios")
  );

  return (
    <div className="px-4">
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center my-4">
        <FaPlusCircle />
        <span className="ml-1">Agregar depósito</span>
      </button>
      {errorDepositos && <strong>Error: {JSON.stringify(error)}</strong>}
      {loadingDepositos && <span>Collection: Loading...</span>}
      {depositos && <CrudTable data={depositos} />}
      {usuarios &&
        usuarios.docs.map((user) => {
          const comment = user.data();
          comment.userRef.get().then((familia) => {
            console.log(familia.data());
          });
        })}
    </div>
  );
};

export default CrudApp;
