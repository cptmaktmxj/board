import SetCookieButton from "../../components/temp.jsx";
import Temp from "../../components/temp.jsx";

export default function LoginPage(){
    const [cookie,setCookie]=useState(false)

    

    return (
        <div>
            <LoginForm/>
            <SetCookieButton/>
        </div>
    )
}