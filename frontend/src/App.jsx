import { Routes, Route, Navigate } from "react-router-dom";
import BoardLayout from "./layout/BoardLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import BoardListPage from "./pages/Board/BoardListPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<BoardLayout />}>
            <Route path="/boards" element={<BoardListPage />} />
        </Route>
        
        <Route path="*" element={<NotFoundPage />} />

    </Routes>

  )
}
