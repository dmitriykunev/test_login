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
        info: 'This is my Profile information'
    },
    {
        userName: 'B@rt',
        passwd: '123456',
        token: '89gwrzedtyi',
        email: 'bArt@gmail.com',
        info: 'This is my Profile information'
    }
];

function userLookUp(name, passwd) {
    console.log('Searching a user');

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].userName === name) {
            if (userList[i].passwd === passwd) {
                return userList[i]
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

function removeUserByToken(data) {
    for(let i = 0; i < userList.length; i++) {
        if(userList[i].token === data.token) {
            const removed = userList.splice(i, 1);
            return true
        }
    }  return false
};

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
                token: userList[i].token,
                info: userList[i].info
            };
        } console.log('Token check out failed...');
        return false;
    }
}

function modifyUser(payload) {
    console.log('Modification started...');
    for (let i = 0; i < userList.length; i+= 1) {
        if (userList[i].token === payload.token) {
            console.log('Token Matched... Start Changing the DB...');
            const newUserList = userList.splice(i, 1, payload);
            console.log(newUserList);
            console.log(userList);
            // userList = newUserList;
            console.log('Modification Done!');
            return userList[i]
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
    if (req.body) {
        const user = userLookUp(req.body.userName, req.body.password);
        console.log(user);
        if(user) {
            res.send(user);
            console.log('Query finished')
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
        console.log(isToken);
        res.send({token: isToken.token,
            userName: isToken.userName,
            email: isToken.email,
            passwd: isToken.passwd,
            info: isToken.info});
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
    const data = modifyUser(req.body);
    console.log(data);
    res.send(data);
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
        res.writeHead(res.statusCode = 400);
        res.send('This user is already registered, Choose another name!');
    }
});

app.post('/remove', jsonParser, function (req, res) {
    console.log(req.body);
   if (req.body) {
       if(removeUserByToken(req.body)) {
           res.end(userList);
           res.statusCode = 200

       }
       res.writeHead(res.statusCode = 400);
       res.end('Something wend wrong ... User was not removed!');
   }
});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
});
