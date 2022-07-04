import React from "react";
import UserContext from "./UserContext";

const randomColor = () => '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
class BGcolor extends React.Component {

 handleBGColor = () => {
            document.body.style.background = randomColor();
 }
    render() {
       
        
        return (


                <div className="container">
                    <h1>Change color</h1>
                    <button className="btn btn-primary" onClick={this.handleBGColor}>change color</button>


                </div>
            



        )
    }
}

export default BGcolor;