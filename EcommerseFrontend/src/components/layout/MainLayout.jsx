import { Outlet } from "react-router-dom";
import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;