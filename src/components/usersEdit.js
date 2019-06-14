import React, {Component} from 'react';
import '../index.css';
import NavBar from "./navbar";
import { connect } from 'react-redux';
import { createStyles, withStyles } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const mapStateToProps = state => {
    return {
        users: state.usersReducer
    }
};

// const usersFlat = () => {
//     const newArray = this.props.users.map(function(elem) {
//         return (Object.values(elem));
//     });
// };
//
// const rows = createData(usersFlat());
//
// function createData(name, password, email) {
//     return { name, password, email };
// };




const drawerWidth = 240;

const styles = (theme) => createStyles({
    root: {
        width: '70%',
        marginTop: '50px',
        marginLeft: '20%',
        marginRight: '20%',
        overflowX: 'auto',
        alignCenter: 'center',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    table: {
        minWidth: 650,
        positionAlign: 'center',
        boxAlign: 'center',
    },
});

class UsersEdit extends Component {


    componentWillMount() {
        const token = localStorage.getItem('token');
        const data = {token: token};
        this.props.dispatch({
            type: 'TOKEN_CHECK',
            token: data
        });
        this.props.dispatch({
            type: 'POPULATE_USERS'
        });
           if (!token) {
                this.props.history.push('/login')
            } else {
               return false
           }
    };

    render() {
        const rows = this.props.users;
            return (
                <div>
                    <NavBar/>
                    <Paper className={this.props.classes.root}>
                        <Table className={this.props.classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Login</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.userName}>
                                        <TableCell component="th" scope="row">
                                            {row.userName}
                                        </TableCell>
                                        <TableCell align="right">{row.passwd}</TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            )

        };
    }

export default connect(mapStateToProps) (withStyles(styles)(UsersEdit));