import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import withRouter from "../HOC/withRouter";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.params && this.props.params.id) {
            let id = this.props.params.id;
            let res = await axios.get(`https://fakestoreapi.com/users/${id}`);
            this.setState({
                user: res && res.data ? res.data : {}
            })
            console.log('>>> chech res user: ', res)
        }
    }

    handleBackButton = () => {
        this.props.navigate(`/user`)
    }

    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <>
                <div>
                    Hello world from Detail User with id: {this.props.params.id}
                </div>
                {isEmptyObj === false &&
                    <>
                        <div>
                            User's name: {user.username}
                        </div>
                        <div>
                            User's email: {user.email}
                        </div>
                        <div>
                            <button onClick={() => this.handleBackButton()}>Back</button>
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailUser);