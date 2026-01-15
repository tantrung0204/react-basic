import React, { use } from "react";
import axios from "axios";
import './ListUser.scss';
import { withRouter } from "../HOC/withRouter";

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

    handleViewUserDetail = (user) => {
        this.props.navigate(`/user/${user.id}`)
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
                            return (<div className="child" key={item.id}
                                onClick={() => this.handleViewUserDetail(item)}>
                                {index + 1} - {item.name.firstname} {item.name.lastname}
                            </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);