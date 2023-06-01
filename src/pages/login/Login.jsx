import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Social App</h3>
                <span className="logindesc">Connect with your friends</span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Email" className="logininput" />
                    <input placeholder="Password" className="logininput" />
                    <button className="loginbutton">Log In</button>
                    <span className="forgotpassword">forgot password?</span>
                    <button className="loginregisterbutton">Create a New Accout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
