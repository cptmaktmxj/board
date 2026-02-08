import { Navigate, Route, Routes } from "react-router-dom";
import BoardLayout from "./layout/BoardLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import BoardListPage from "./pages/board/BoardListPage.jsx";
import PostDetailPage from "./pages/board/PostDetailPage.jsx";
import BoardWritePage from "./pages/board/BoardWritePage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<BoardLayout />}>
        <Route path="/boards/:boardId" element={<BoardListPage />} />
        <Route path="/boards/:boardId/search" element={<BoardListPage />} />
        <Route path="/boards/:boardId/posts/new" element={<BoardWritePage />} />
        <Route path="/boards/:boardId/posts/:postId" element={<PostDetailPage />} />
        <Route path="/boards/:boardId/posts/:postId/edit" element={<BoardWritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
