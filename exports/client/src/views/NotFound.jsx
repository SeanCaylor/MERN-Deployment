import img from "../img/notTheDroid.gif";
import React from "react"

const NotFound = (props) => {
    console.log(props);
    return (
        <div style={{ textAlign: "center", marginTop:"5%"}}>
                <h1>This was not the route that you were looking for...</h1>
                <img style={{ width: "80%" }} src={img} alt="Not the droids you're looking for" />
        </div>
    );
};

export default NotFound;