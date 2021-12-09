import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../lib/firebase";

export const getFetchUsers = async () => {
  let users = [];
  const querySnaphot = await getDocs(collection(firestore, "usuarios"));
  querySnaphot.forEach(async (doc) => {
    const newItem = { id: doc.id, ...doc.data() };
    users.push(newItem);
  });
  return users;
};
