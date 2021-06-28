import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
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
                <button className="login-button"><Link className="link" to="/">
                Login
              </Link></button>
            </form>
            <button className="login-register-button">Register</button>
        </div>
    )
}
