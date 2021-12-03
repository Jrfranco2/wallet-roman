import { AuthUserProvider } from "../hooks/useAuth";
import "../styles/tailwind.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
