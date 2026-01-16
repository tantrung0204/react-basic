import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/clublogo.png"

class Home extends React.Component {


    render() {

        return (
            <>
                <div>
                    Hello world from homepage with Jun Nguyen
                </div>
                <div>
                    <img src={logo} style={{ width: '400px', height: '400px', margin: '10px' }} />
                </div>
            </>
        )
    }
}

export default Color(Home);