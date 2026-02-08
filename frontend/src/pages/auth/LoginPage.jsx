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
        onSubmit={() => navigate("/boards/notice")}
        footerLinks={[
          { to: "/register", label: "회원가입" },
          { to: "/register", label: "아이디/비밀번호 찾기" },
        ]}
      />
    </div>
  );
}
