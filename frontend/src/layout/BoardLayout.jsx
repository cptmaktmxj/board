import { Outlet } from "react-router-dom";
import { Footer } from "../components/temp.jsx";

export default function BoardLayout() {
  return (
    <div className="app">
      <Outlet />
      <Footer />
    </div>
  );
}
