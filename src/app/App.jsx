import { Routes, Route, Navigate } from "react-router-dom";
import RootLayout from "./layout/RootLayout.jsx";
/*import LoginPage from "./pages/Auth/LoginPage.jsx";
import BoardListPage from "./pages/Board/BoardListPage.jsx";
import BoardDetailPage from "./pages/Board/BoardDetailPage.jsx";
import BoardWritePage from "./pages/Board/BoardWritePage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";*/

export default function App() {
  return (
    <Routes>
      {/* 레이아웃(헤더/푸터) 포함 */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<Navigate to="/boards/free" replace />} />

        <Route path="/login" element={<LoginPage />} />

        {/* 게시판 5종류면 :board로 처리 가능 */}
        <Route path="/boards/:board" element={<BoardListPage />} />
        <Route path="/posts/:id" element={<BoardDetailPage />} />
        <Route path="/write" element={<BoardWritePage />} />

        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}