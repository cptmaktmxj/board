import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/temp.jsx";

export default function LoginPage() {
  const navigate = useNavigate();

  const fields = [
    { label: "아이디", name: "id", type: "text", required: true },
    { label: "비밀번호", name: "password", type: "password", required: true },
  ];

  return (
    <div className="app auth-page">
      <AuthForm
        title="로그인"
        fields={fields}
        submitLabel="로그인"
        footerLinks={[
          { to: "/register", label: "회원가입" },
          { to: "/register", label: "아이디/비밀번호 찾기" },
        ]}
      />

      <section className="cookie-prompt">
        <p>쿠키를 설정하시겠습니까?</p>
        <div className="cookie-actions">
          <button
            type="button"
            onClick={() => navigate("/boards/:boardId")}
          >
            허용
          </button>
          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            차단
          </button>
        </div>
      </section>
    </div>
  );
}
