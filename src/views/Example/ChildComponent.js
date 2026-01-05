import React from 'react';

class ChildComponent extends React.Component {

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
                <div>Child component: {this.props.name}</div>
            </>
        )
    }
}

export default ChildComponent;