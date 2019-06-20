import React, {Component} from 'react';
import '../index.css';
import NavBar from "./navbar";
import UsersForm from "./usersForm";
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        users: state.usersReducer
    }
};

class UsersEdit extends Component {


    componentWillMount() {
        const token = localStorage.getItem('token');
        const data = {token: token};
        this.props.dispatch({
            type: 'POPULATE_USERS'
        });
           if (!token) {
                this.props.history.push('/login')
            } else {
               this.props.dispatch({
                   type: 'TOKEN_CHECK',
                   token: data
               });
           }
    };

    handleRender = (list) => {
        console.log(list);
        return list.map(function(elem) {
            return <div key={elem.token}>
                <UsersForm
                    userName={elem.userName}
                    password={elem.password}
                    email={elem.email}
                    token={elem.token}
                />
            </div>
        })
    };

    render() {
            return (
                <div>
                <NavBar />
        {
            this.handleRender(this.props.users)
        }
                </div>
            )

        };
    }

export default connect(mapStateToProps) (UsersEdit);