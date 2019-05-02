var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
let userList = [
    {
        userName: 'dmitriy',
        passwd: 123456,
        token: 'otsotzlinl',
        active: true
    },
    {
        userName: 'B@rt',
        passwd: 123456,
        token: '89gwrzedtyi',
        active: true
    }
];

function userLookUp(name, passwd) {
    console.log('Searching a user');

    for (let i = 0; i < userList.length; i++) {
        if(userList[i].userName == name) {
            if(userList[i].passwd == passwd) {
                if(userList[i].active == true) {
                    return true
                }
                }
            }
    } return false
}

function findTokenByUser(user) {
    console.log('User Found checking token...');
    for (let i = 0; i < userList.length; i++) {
        if(userList[i].userName == user) {
        return userList[i].token
        }
    }
}

function checkOutToken(data) {
    console.log('Token check out started ...');
    const {token} = data;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].token === token) {
            // let user = {};
            return {userName: userList[i].userName, token: userList[i].token, loggedIn: userList[i].active};
        }
    }

    return false
}

    function userRegister(name, passwd, token) {
        console.log('Registering started');
        if (!userLookUp(name, passwd)) {
            userList.push({
                userName: name,
                passwd: passwd,
                token: token,
                active: true
            });
            return true;
        } else {
            return false
        }

    }

    app.use(cors());

    app.post('/login', jsonParser, function (req, res) {
        console.log(req.body);
        if (req.body) {
            if (userLookUp(req.body.userName, req.body.password)) {
                const token = findTokenByUser(req.body.userName);
                res.send({userName: req.body.userName, passwd: req.body.password, loggedIn: true, token: token});
                console.log('Query finished')
            } else {
                res.send({userName: req.body.userName, passwd: req.body.password, loggedIn: false})
            }
        } else {
            res.statusCode = 400
        }
    });

    app.post('/token', jsonParser, function (req, res) {
        console.log(req.body);
        const isToken = checkOutToken(req.body);
        if (isToken) {
            res.send(isToken);
            res.statusCode = 200;
        } else {
            res.send(false);
            res.statusCode = 400;
        }
    });

    app.put('/register', jsonParser, function (req, res) {
        console.log(req.body);
        if (req.body) {
            if (userRegister(req.body.userName, req.body.password, req.body.token)) {
                res.send({
                    userName: req.body.userName,
                    passwd: req.body.password,
                    loggedIn: true,
                    token: req.body.token});
            }
            res.send('This user is already registered, Choose another name!');
            res.statusCode = 400
        }
    });

    app.listen(3001, function () {
        console.log('App listening on port 3001!');
    });
