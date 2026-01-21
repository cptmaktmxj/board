import { Outlet } from "react-router-dom";
import Header from "../widgets/Header/Header.jsx";
import Footer from "../widgets/Footer/Footer.jsx";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 960, margin: "0 auto", padding: 16 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
