import Link from "next/link"
import "./registerForm.css"

const RegisterForm = () => {
    return (
        <div className="register-container">
            <div className="register-title">Registration</div>
            <form action="#">
                <div className="register-details">
                    <div className="input-box">
                        <span className="details">Full Name</span>
                        <input type="text" placeholder="Enter your name" required className=""/>
                    </div>
                    <div className="input-box">
                        <span className="details">User Name</span>
                        <input type="text" placeholder="Enter your username to login" required className=""/>
                    </div>
                    <div className="input-box">
                        <span className="details">Email</span>
                        <input type="text" placeholder="Enter your email" required className=""/>
                    </div>
                    <div className="input-box">
                        <span className="details">Phone Number</span>
                        <input type="text" placeholder="Enter your number" required className=""/>
                    </div>
                    <div className="input-box">
                        <span className="details">Password</span>
                        <input type="text" placeholder="Enter your password" required className=""/>
                    </div>
                    <div className="input-box">
                        <span className="details">Confirm Password</span>
                        <input type="text" placeholder="Comfirm your password" required className=""/>
                    </div>
                </div>

                <div className="register-btn">
                    <input type="submit" value="Register" />
                </div>

                <div className="text">
                    <span>Already have an account?</span>
                    <Link href="/login" className="link-login">
                        <span>Login now</span>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm