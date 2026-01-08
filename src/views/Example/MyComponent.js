import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

// Nesting Components: Trong component có thể lồng components
class MyComponent extends React.Component {

    // Key: value
    // state nó là 1 object
    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project Managers', salary: '1000' },
        ]
    }

    /*
    JSX => return a block of HTML tags
    */
    render() {
        console.log(">>> call render: ", this.state)
        return (
            <>
                <AddComponent />

                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;