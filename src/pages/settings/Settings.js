import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-title">
                    <span className="settings-update-title">Update Your Account</span>
                    <span className="settings-delete-title">Delete Account</span>
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
                    <button className="settings-submit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
