import { Outlet } from "react-router-dom";
import { Footer } from "../components/temp.jsx";

export default function BoardLayout() {
  return (
    <div className="app">
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
