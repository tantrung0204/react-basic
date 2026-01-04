import React from 'react';

class MyComponent extends React.Component {

    // Key: value
    // state nó là 1 object
    state = {
        name: "Jun",
        channel: "Jun Nguyen"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        alert("Click me")
    }


    /*
    JSX => return a block of HTML tags
    */
    render() {


        return (
            <>
                <div className='first'>
                    <input value={this.state.name} type='text'
                        onChange={(event) => this.handleOnChangeName(event)} /> <br />
                    Hello my component, My name is {this.state['name']}
                </div>
                <div className='second'>
                    My channel is: {this.state.channel}
                </div>
                <div className='third'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;