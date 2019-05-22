var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
let userList = [
    {
        userName: 'dmitriy',
        passwd: '123456',
        token: 'otsotzlinl',
        email: 'dmitriy@gmail.com',
        active: true
    },
    {
        userName: 'B@rt',
        passwd: '123456',
        token: '89gwrzedtyi',
        email: 'bArt@gmail.com',
        active: true
    }
];

function userLookUp(name, passwd) {
    console.log('Searching a user');

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userName === name) {
            if (userList[i].passwd === passwd) {
                return true
            }
        }
    }
    return false
}

function findTokenByUser(user) {
    console.log('User Found checking token...');
    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userName === user) {
            return userList[i].token
        }
    }
}

function checkOutToken(data) {
    console.log('Token check out started ...');
    const {token} = data;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].token === token) {
            console.log('Token check out finished...');
            return {
                userName: userList[i].userName,
                passwd: userList[i].passwd,
                email: userList[i].email,
                token: userList[i].token
            };
        }
        console.log('Token check out failed...')
    }

    return false;
    console.log('Token check out failed...')
}

function modifyUser(payload) {
    console.log('Modification started...');
    for (let i = 0; i < userList.length; i+= 1) {
        if (userList[i].token === payload.token) {
            console.log('Token Match... Start Changing the DB...');
            const newUserList = userList.splice(i, 1, payload);
            console.log(newUserList);
            console.log(userList);
            // userList = newUserList;
            return 'Modification Done!'
        }
    } return console.log('Modification failed...')
}

function userRegister(name, passwd, token, email) {
    console.log('Registering started');
    if (!userLookUp(name, passwd)) {
        userList.push({
            userName: name,
            passwd: passwd,
            token: token,
            email: email
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
            res.send({userName: req.body.userName, passwd: req.body.password, token: token});
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
    console.log(isToken);
    if (isToken) {
        res.send({token: isToken.token, userName: isToken.userName, email: isToken.email, passwd: isToken.passwd});
        res.statusCode = 200;
    } else {
        res.send(false);
        res.statusCode = 400;
    }
});

app.get('/getUsers', function (req, res) {
    const users = userList;
    res.send(users);
    res.statusCode = 200
});

app.put('/modify', jsonParser, function (req, res) {
    console.log(req.body);
    modifyUser(req.body);
    res.send(userList);
    res.statusCode = 200
});

app.put('/register', jsonParser, function (req, res) {
    console.log(req.body);
    if (req.body) {
        if (userRegister(req.body.userName, req.body.password, req.body.token, req.body.email)) {
            res.send({
                userName: req.body.userName,
                passwd: req.body.password,
                email: req.body.email,
                token: req.body.token
            });
        }
        res.send('This user is already registered, Choose another name!');
        res.statusCode = 400
    }
});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
});
