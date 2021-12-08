import { collection, getDocs, getDoc } from "@firebase/firestore";
import { firestore } from "../lib/firebase";

export const getFetchUsers = async () => {
  const userRef = collection(firestore, "usuarios");
  const usersDocs = await getDocs(userRef);
  let users = [];
  usersDocs.forEach(async (doc) => {
    let newUser = { id: doc.id, ...doc.data() };
    if (newUser.familia) {
      let infoFamilia = await getDoc(newUser.familia);
      if (infoFamilia.exists()) {
        newUser.familia = {
          familiaID: infoFamilia.id,
          ...infoFamilia.data(),
        };
        users.push(newUser);
      } else {
        users.push(newUser);
      }
    }
  });
  return users;
};
