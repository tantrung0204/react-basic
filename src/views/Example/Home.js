import React from "react";
import Color from "../HOC/Color";
import logo from "../../assets/images/clublogo.png"
import { connect } from "react-redux";
import { type } from "@testing-library/user-event/dist/type";

class Home extends React.Component {


    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }

    handleCreateUser = () => {
        this.props.addUserRedux();
    }

    render() {
        console.log('>>> check props redux: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux;
        return (
            <>
                <div>
                    Hello world from homepage with Jun Nguyen
                </div>
                <div>
                    <img src={logo} style={{ width: '200px', height: '200px', margin: '10px' }} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} {item.name}
                                    &nbsp;<span onClick={() => this.handleDeleteUser(item)}> X </span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));