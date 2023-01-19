import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
      </Head>
      <div className="content">
        <NavBar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
