import { useNavigate } from "react-router-dom";
import {RegisterForm} from "../../components/temp.jsx";

export default function RegisterPage(){
    const navigate=useNavigate()

    function handleRegister(){
        navigate("/login")
    }

    return (
        <RegisterForm onSubmit={handleRegister}/>
    )
}