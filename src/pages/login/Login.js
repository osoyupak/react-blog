import "./login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/userSlice";

export default function Login() {
    const dispatch = useDispatch();
    return (
        <div className="login">
            <span className="login-title">Login</span>
            <form className="login-form">
                <label>Email</label>
                <input 
                    type="text" 
                    placeholder="Enter your email..."
                />
                <label>Password</label>
                <input 
                    type="password" 
                    placeholder="Enter your password..."
                />
                <button onClick={()=>dispatch(logIn())} className="login-button"><Link className="link" to="/">
                Login
              </Link></button>
            </form>
            <button className="login-register-button"><Link className="link" to="/register">
                Register
              </Link></button>
        </div>
    )
}
