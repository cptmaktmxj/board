import { useNavigate } from "react-router-dom";
import { AuthForm } from "../../components/temp.jsx";

export default function RegisterPage() {
  const navigate = useNavigate();

  const fields = [
    { label: "이름", name: "name", type: "text", required: true },
    { label: "학번", name: "studentId", type: "text", required: true },
    { label: "학년", name: "grade", type: "text", required: true },
    { label: "동아리", name: "club", type: "text", required: true },
    { label: "아이디", name: "id", type: "text", required: true },
    { label: "비밀번호", name: "password", type: "password", required: true },
  ];

  return (
    <div className="app auth-page">
      <AuthForm
        title="회원가입"
        fields={fields}
        submitLabel="가입하기"
        onSubmit={() => navigate("/login")}
        footerLinks={[{ to: "/login", label: "로그인으로 돌아가기" }]}
      />
    </div>
  );
}
