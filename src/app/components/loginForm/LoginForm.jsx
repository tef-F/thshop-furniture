import Link from "next/link"
import "./loginForm.css"

const LoginForm = () => {
    return (
        <div className="login-container">
            <div className="login-title">Login</div>
            <form action="#">
                <div className="login-details">
                    <div className="input-box">
                        <span className="details">User Name</span>
                        <input type="text" placeholder="Enter your username" required className=""/>
                    </div>
                    
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="text" placeholder="Enter your password" required className=""/>
                    </div>
                    
                </div>

                <div className="login-btn">
                    <input type="submit" value="Login" />
                </div>

                <div className="login-text">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/register" className="link-register">
                        <span>Register</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default LoginForm