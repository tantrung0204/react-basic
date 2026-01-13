import React from "react";
import Color from "../HOC/Color";

class Home extends React.Component {


    render() {

        return (
            <div>
                Hello world from homepage with Jun Nguyen
            </div>
        )
    }
}

export default Color(Home);