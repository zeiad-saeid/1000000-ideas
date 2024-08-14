import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import WhatsappBtn from "../components/WhatsappBtn/WhatsappBtn";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsappBtn />
    </>
  );
}
