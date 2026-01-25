import {SetCookieButton,LoginForm} from "../../components/temp.jsx";

export default function LoginPage(){
    const [cookie,setCookie]=useState(false)

    function handleLogin(){
        //navigate
    }

    function handleCookie(){
        //cookie 상태에 따른 조건문 (allow일때는 navigate)
    }

    return (
        <div>
            <LoginForm login={handleLogin}/>
            <SetCookieButton allowCookie={handleCookie} blockCookie={handleCookie}/>
        </div>
    )
}