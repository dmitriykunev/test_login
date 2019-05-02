class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            messages: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event) {
        this.setState( {
            input: event.target.value
        });
    };


    submitMessage() {
        let data = this.state.message.slice(0);
        let data2 = data.push(this.state.input);
        this.setState({
            messages: data2,
            input: ''
        });
    }

    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                { /* render an input, button, and ul here */ }
                <input onChange={this.handleChange} value={this.state.input} ></input>
                <button onClick={this.submitMessage}>Add Message</button>
                <ul>{
                    this.state.messages.map(function(elem) {
                        return <li>{elem}</li>
                    })
                }
                </ul>
                { /* change code above this line */ }
            </div>
        );
    }
};

// На твой вопрос почему не сделать все проверки сразу в одном месте - можно ответить по всякому.
// К примеру ткнуть какой-нибудь книгой, а-ля "Библия по языку...." и прочими.
// Книг написанно много. Людьми умными и не очень, всех не перечитать. Просто сам почувствуешь в какой теме нужно будет продвинуться.

// Я могу лишь ответить чем я руководствуюсь когда попадаются такие моменты.

// 1. Когда ты пишешь код, ты пиши его так как не для себя.
//		Его должен прочитать любой и понять что происходит не отвлекаясь на детали. Поверь, даже спустя недельку-две ты и сам потратишь
//		время что бы понять что тут происходит.

// 2. Как я уже упоминал ранее, разбей задачу на несколько мелких.
//		Плюсы такого подхода: пока будешь писать не запутаешся в мыслях, легко тестируемый код и скорее всего будет видно какие куски ты сможешь переиспользовать в другом месте.


const db = [
    { id: 1, name: 'John', password: '123456', active: false },
    { id: 2, name: 'Tom', password: '654321', active: false },
    { id: 3, name: 'Jack', password: '789012', active: false },
    { id: 4, name: 'Sam', password: '210987', active: false }
];


function lookUpUser(name, password) {
    //  ищем нашего пользователя в базе
    const user = getUserByName(name, db);

    if(!user) {
        // если не нашли, к примеру кидаем ошибку
        throw Error('user not found')
    }

    if(!isPasswordMatch(user, password)) {
        // отрабатываем не совпадение пароля
        throw Error('password doesn\'t match')
    }

    // начиная с этой строки, мы знаем:
    // что наш user - существует и пароль совпал, делаем что задумывали
    // к примеру меняем active на true и возвращаем OK.
    setUserActive(user, db)

    return 'OK'
}


// *детали реализации которые отвлекают от логики решения поставленной задачи
function getUserByName(name, db) {
    // вот к примеру функция которая ищет юзера по имени в какой-то базе
    // не забываем о проверке на нужные нам переменные
    if(!name || !db){
        throw Error('name or db not found')
    }
    // реализация поиска может быть разная
    // даже если она со временем измениться или усложнится, тебе нужно будет поменять только здесь
    // к примеру в некоторых случаях нужно искать на совпадение даже в разных регистрах jOHN = John
    // либо ещё чего пожелает заказчик
    return db.find((user) => user.name === name);
}

function isPasswordMatch(user, password){
    // обычно пароль в базе в зашифрованном виде
    // опять есть место где может что-то поменяться, выносим отдельно
    const userPassword = user.password; // some magic
    return userPassword === password
}

function setUserActive(currentUser, db) {
    // не забываем о проверке на нужные нам переменные
    if(!name || !db){
        throw Error('name or db not found')
    }

    // реализация может зависить от многих факторов, тут просто forEach
    db.forEach((user) => {
        if(user.id === currentUser.id) {
            user.active = true
        }
    });
}







