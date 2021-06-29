import "./register.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logIn} from "../../store/userSlice"

export default function Register() {
    const dispatch = useDispatch();
    return (
        <div className="register">
            <span className="register-title">Register</span>
            <form className="register-form">
                <label>Username</label>
                <input 
                    type="text" 
                    placeholder="Enter your username..."
                />
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
                <button onClick={()=> dispatch(logIn())} className="register-button"><Link className="link" to="/">Register </Link></button>
            </form>
            <Link to="/login" className="link register-register-button">Login</Link>
        </div>
    )
}
