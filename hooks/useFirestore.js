import { firebaseApp } from "../lib/firebase";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useState } from "react";

export const useFirestore = async () => {
  const db = getFirestore(firebaseApp);
  const [collectionDepositos, setCollectionDepositos] = useState([]);
  const querySnapshot = await getDocs(collection(db, "depositos"));
  querySnapshot.forEach((doc) => {
    setCollectionDepositos(doc.data());
  });

  return {
    collectionDepositos,
  };
};
