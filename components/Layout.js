import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Wallet Roman | xD</title>
        <meta name="description" content="Wallet Roman" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
