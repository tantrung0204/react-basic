import React from "react";
import axios from "axios";
import './ListUser.scss'

class ListUser extends React.Component {
    state = {
        listUsers: []
    }

    async componentDidMount() {
        let res = await axios.get('https://fakestoreapi.com/users');
        this.setState({
            listUsers: res && res.data ? res.data : []
        })
    }

    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="title">
                    Get all list users
                </div>
                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (<div className="child" key={item.id}>
                                {index + 1} - {item.name.firstname} {item.name.lastname}
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListUser