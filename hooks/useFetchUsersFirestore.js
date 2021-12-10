import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, setDoc } from "@firebase/firestore";
import { firestore } from "../lib/firebase";

export const useFetchUsersFirestore = () => {
  const [users, setUsers] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const usersCollection = collection(firestore, "usuarios");
    const unsubscribe = onSnapshot(usersCollection, (querySnapshot) => {
      setUsers({
        data: querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        loading: false,
      });
    });
    return unsubscribe;
  }, []);

  const saveUser = async (oldUser) => {
    const usersRef = doc(
      firestore,
      "usuarios",
      `${oldUser.name} ${oldUser.lastName}`
    );
    const { family, ...newUser } = oldUser;
    const user = {
      ...newUser,
      cantidad: 0,
      family: doc(firestore, `familias/${oldUser.family}`),
    };
    await setDoc(usersRef, user);
  };

  return { users, saveUser };
};
