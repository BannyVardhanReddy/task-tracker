import { useState } from "react"
import Register from "../components/Register";
import Login from "../components/Login";
import './Home.css';

export default function Home(){
    const [login,setLogin] = useState(true);

    function handleOnClick(){
        setLogin(prev => !prev);
    }

    return(
        <div className="container">
            <h1>Task Ledger</h1>
            <p>Sign in to keep your entries</p>

            <div className="options">
                <p onClick={handleOnClick} className="active">Login</p>
                <p onClick={handleOnClick}>Register</p>
            </div>

            {login ? <Login /> : <Register />}
        </div>
    )
}