const express =  require('express');
const fs = require('fs')

const router = express.Router();

const data = [
    { id: 1, title: 'testes',  order: 1, completed: true, createdOn: new Date() }
];

//ler os dados do usuário do arquivo json
const saveUserData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('users.json', stringifyData)
}
//obter os dados do usuário do arquivo json
const getUserData = () => {
    const jsonData = fs.readFileSync('users.json')
    return JSON.parse(jsonData)    
}



router.get('/', function (req, res) {
    res.status(200).json(data);
});


module.exports =  router;