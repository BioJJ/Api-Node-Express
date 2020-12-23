const express =  require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', function(req, res) {
    res.send('wiki :-)');
});

app.listen(3001, ()=>{
    console.log('porta 3001');
})