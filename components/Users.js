import { collection, getDocs, getDoc, onSnapshot } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../lib/firebase";
import UsersTable from "./UsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const usersRef = collection(db, "usuarios");
    const unsubscribe = onSnapshot(usersRef, (querySnapshot) => {
      setUsers(querySnapshot.docs.map((doc) => ({ ...doc.data() })));
    });
    return unsubscribe;
  }, []);
  //   useEffect(() => {
  //     const getUsers = async () => {
  //       const querySnapshot = await getDocs(collection(db, "usuarios"));
  //       let users = [];
  //       querySnapshot.forEach(async (doc) => {
  //         let newUser = { id: doc.id, ...doc.data() };
  //         if (newUser.familia) {
  //           let infoFamilia = await getDoc(newUser.familia);
  //           if (infoFamilia.exists()) {
  //             newUser.familia = {
  //               familiaID: infoFamilia.id,
  //               ...infoFamilia.data(),
  //             };
  //             users.push(newUser);
  //           } else {
  //             users.push(newUser);
  //           }
  //         }
  //       });
  //       setUsers(users);
  //     };
  //     getUsers();
  //   }, []);

  return (
    <section>
      <UsersTable data={users} />
    </section>
  );
};

export default Users;
