import { AuthUserProvider } from "../hooks/useAuth";
import { ToastContainer, Flip } from "react-toastify";
import { createContext, useContext } from "react";
import { collection, getDocs } from "@firebase/firestore";
import { firestore } from "../lib/firebase";

import "../styles/tailwind.css";
import "react-toastify/dist/ReactToastify.css";

const FamilyContext = createContext();

const MyApp = ({ Component, pageProps, families }) => {
  return (
    <AuthUserProvider>
      <FamilyContext.Provider value={{ families }}>
        <ToastContainer
          transition={Flip}
          position="top-right"
          autoClose={3000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          limit={4}
        />
        <Component {...pageProps} />
      </FamilyContext.Provider>
    </AuthUserProvider>
  );
};

MyApp.getInitialProps = async () => {
  const querySnapshot = await getDocs(collection(firestore, "familias"));
  const families = [];
  querySnapshot.forEach((doc) => {
    families.push({ id: doc.id, data: doc.data() });
  });

  return {
    families,
  };
};

export const useFamiliesContext = () => {
  return useContext(FamilyContext);
};

export default MyApp;
