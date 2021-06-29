import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {logOut} from "../../store/userSlice"

export default function Settings() {
    const handleOnClick = (e) => {
        e.preventDefault();
    }
    const dispatch = useDispatch();
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update Your Account</span>
                    <Link onClick={()=>dispatch(logOut())} className="settings-delete-button" to="/">Delete Your Account</Link>
                </div>
                <form className="settings-form">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            src="https://images.unsplash.com/photo-1541576980233-97577392db9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1104&q=80"
                            alt=""
                        />
                        <label htmlFor="fileInput">
                            <i className="settings-ppicon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Ozan"/>
                    <label>Email</label>
                    <input type="email" placeholder="ozansoyupak@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button onClick={handleOnClick} className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
