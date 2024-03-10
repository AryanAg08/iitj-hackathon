import "./index.css"
export default function Login(){
    return (
        <div className="row">
            <div className="col-7 image">
                <h1 className="img-txt ">Welcome Back !</h1>
            </div>
            
            <div className="login col-5">
            <h2><b>Login</b></h2>
            <p>Welcome back! Please login to your account.</p>
            <br></br>
            <form className="needs-validation">
                <p>Username</p>
                <input placeholder="  Enter Username" className="input col-12" required></input>
                <br></br><br></br>
                <p>Password</p>
                <input placeholder="  Enter Password" className="input col-12" type="password" required></input>
                <br></br><br></br>
                <input type="checkbox" ></input>Remember Me
                <br></br><br>
                </br>
                <button className="btn  col-12 btn-dark" type="submit">Login</button><br></br>
                <a href="signup.jsx"><h7>New User? Signup</h7></a>
                </form>
            </div>
        </div>

    );
}