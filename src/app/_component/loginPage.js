const Login = () =>{
    return (
    <div className="container">
        <h3>Login</h3>
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter username" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter Password" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <button className="button">Sign in</button>
            </div>
        </div>
    </div>
    )
}

export default Login