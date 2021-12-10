import { useEffect, useState } from "react";
import { collection, onSnapshot, getDocs } from "@firebase/firestore";
import { firestore } from "../lib/firebase";

export const useFetchFirestore = (category) => {
  const [users, setUsers] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const usersCollection = collection(firestore, category);
    const unsubscribe = onSnapshot(usersCollection, (querySnapshot) => {
      setUsers({
        data: querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        loading: false,
      });
    });
    return unsubscribe;
  }, [category]);

  return { users };
};
