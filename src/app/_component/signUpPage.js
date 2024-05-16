const RestaurantSignUp = () =>{
    return (
        <div className="container">
        SignUp
        <div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter email" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter contact number" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter restaurant name" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter city" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="text" placeholder="Enter full address" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Enter Password" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <input type="password" placeholder="Confirm Password" className="input-field"></input>
            </div>
            <div className="input-wrapper">
                <button className="button">Sign in</button>
            </div>
        </div>
        </div>
    )
}

export default RestaurantSignUp;