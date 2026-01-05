import React from 'react';
import ChildComponent from './ChildComponent';

// Nesting Components: Trong component có thể lồng components
class MyComponent extends React.Component {

    // Key: value
    // state nó là 1 object
    state = {
        firstName: "",
        lastName: ""
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert("Click me")
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(">>> Check data input: ", this.state)
    }

    /*
    JSX => return a block of HTML tags
    */
    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br />
                    <input
                        type="button"
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    ></input>
                </form >

                <ChildComponent name={"Child 1"} />
                <ChildComponent name={"Child 2"} />
                <ChildComponent name={"Child 3"} />
            </>
        )
    }
}

export default MyComponent;