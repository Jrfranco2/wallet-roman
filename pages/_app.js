import { AuthUserProvider } from "../hooks/useAuth";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp;
