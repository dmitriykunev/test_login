var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


// const {NewUserBase: NewUserBase} = require('./models');
// // const Op = Sequelize.Op;
// return NewUserBase.findAll({
//     raw: true,
//     // where: {
//     //     id: {
//     //         $gt: 0,
//     //     }
//     // }
// }).then((data) => {
//     // const [ result ] = data;
//     console.log(data);
// });


function userLookUp (name, passwd) {
    console.log('Searching a user');
    const {NewUserBase: NewUserBase} = require('./models');
    return NewUserBase.findAll({
        raw: true,
        where: {
            userName: name,
            password: passwd
        }
    });
};

function getAllUsers() {
    const {NewUserBase: NewUserBase} = require('./models');
    return NewUserBase.findAll({
        raw: true,
    })
}

function removeUserByToken(data) {
    const {NewUserBase: NewUserBase} = require('./models');
    NewUserBase.destroy({
        // raw: true,
        where: {
            token: data.token
        }
    })
};

function checkOutToken(data) {
    console.log('Token check out started ...');
    // const {token} = data;
    console.log(data);
    const {NewUserBase: NewUserBase} = require('./models');
    return NewUserBase.findAll({
        raw: true,
        where: {
            token: data.token
        }
    });
}

function getUserByToken(token){
    const {NewUserBase: NewUserBase} = require('./models');
    return NewUserBase.findOne({
        where: {
            token: token
        }
    });
}

function modifyUser(user, payload) {
    console.log('Modification started...');
    console.log(payload);
    const {NewUserBase: NewUserBase} = require('./models');

    return user.update({
        raw: true,
        userName: payload.userName,
        password: payload.password,
        email: payload.email,
        info: payload.info
    })
}

function userRegister(name, passwd, token, email, info) {
    console.log('Registration started');
    const {NewUserBase: NewUserBase} = require('./models');
    return NewUserBase.create({
            raw: true,
            userName: name,
            password: passwd,
            token: token,
            email: email,
            info: info
    })
}
app.use(jsonParser);
app.use(cors());

app.post('/login', async function (req, res) {
    if (req.body) {
        const user = await userLookUp(req.body.userName, req.body.password);
        console.log(user);
        if (user) {
            const [data] = user;
            res.send(data);
            console.log('Query finished')
        }
    } else {
        res.statusCode = 400
    }
});

app.post('/token', async function (req, res) {
    console.log(req.body);
    const [ isToken ] = await checkOutToken(req.body);
    console.log('Token checkout finished...');
    console.log(isToken);
    if (isToken) {
        res.statusCode = 200;
        res.send(isToken);
    } else {
        res.statusCode = 400;
    }
});

app.get('/getUsers', async function (req, res) {
    const users = await getAllUsers();
    res.send(users);
    res.statusCode = 200
});

app.put('/modify', async function (req, res) {
    console.log(req.body);
    const user = await getUserByToken(req.body.token);
    console.log('User returns' + user);
    const data = await modifyUser(user, req.body);
    console.log(data);
    res.send(data);
    res.statusCode = 200
});
app.put('/register', async function (req, res) {
    const {userName, password, token, email, info} = req.body;
    console.log(req.body);
    if (req.body) {
        const data = await userRegister(userName, password, token, email, info);
        if (data) {
            console.log(data);
            res.send(data);
        }
    } else {
    res.writeHead(res.statusCode = 400);
    res.send('This user is already registered, Choose another name!');}
});

app.post('/remove', async function (req, res) {
    const removed =  await removeUserByToken(req.body);
    console.log(removed);
    if (removed) {
            res.end(removed);
            res.statusCode = 200

        } else {
        res.writeHead(res.statusCode = 400);
        res.end('Something wend wrong ... User was not removed!');
    }
});

app.listen(3001, function () {
    console.log('App listening on port 3001!');
});
