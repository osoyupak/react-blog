import "./register.css";

export default function Register() {
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
                <button className="register-button">Register</button>
            </form>
            <button className="register-register-button">Login</button>
        </div>
    )
}
