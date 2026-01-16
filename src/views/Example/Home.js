import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/clublogo.png"
import { connect } from "react-redux";

class Home extends React.Component {


    render() {
        console.log('>>> check props redux: ', this.props.dataRedux)
        return (
            <>
                <div>
                    Hello world from homepage with Jun Nguyen
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', margin: '10px' }} />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

export default connect(mapStateToProps)(Color(Home));