import { useNavigate } from "react-router-dom";
import {SetCookieButton,LoginForm} from "../../components/temp.jsx";

export default function LoginPage(){
    const navigate=useNavigate()
    const [cookie,setCookie]=useState(false)

    function handleLogin(){
        navigate("/boards")
    }

    function handleCookie(){
        /*버튼 클릭하면 쿠키 상태 설정하고 쿠키 상태에 따라 navigate*/
        /*또는 버튼 자체에 링크 이동을 걸어놓고 상태 토글+서버에 정보 보내기만 이벤트로 추가*/
    }

    return (
        <div>
            <LoginForm login={handleLogin}/>
            <SetCookieButton allowCookie={handleCookie} blockCookie={handleCookie}/>
        </div>
    )
}