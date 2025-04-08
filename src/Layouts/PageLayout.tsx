import { Outlet } from "react-router";
import Header from "../components/navigation/Header";
import Footer from "../components/Footer/Footer";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
