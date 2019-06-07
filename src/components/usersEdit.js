import React, {Component} from 'react';
import '../index.css';
import NavBar from "./navbar";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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

const data = this.props.users.map(function(elem) {
    return
})
const rows = []
// const rows = [
//     this.createData(this.props.users, 159, 6.0, 24, 4.0),
// ];

function createData(name, password, email) {
    return { name, password, email };
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 650,
    },
}));

const classes = useStyles();

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
            return (
                <div>
                    <NavBar/>
                    <Paper className={classes.root}>
                        <Table className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Login</TableCell>
                                    <TableCell align="right">Password</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map(row => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            )

        };
    }

export default connect(mapStateToProps) (UsersEdit);