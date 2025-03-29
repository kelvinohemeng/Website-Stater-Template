import { Outlet } from "react-router";
import Header from "../components/navigation/Header";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
