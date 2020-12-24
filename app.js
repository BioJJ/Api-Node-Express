const express =  require('express');
const cors = require('cors');

const user = require('./src/routes/users');

const app = express();

app.use(express.json({extended: true}));
app.use(cors());

// app.use('/', function(req, res) {
//     res.send('wiki :-)');
// });

// app.use('/user', user);
require('./src/routes/users')(app);
require('./src/routes/projectController')(app);

app.listen(3002, ()=>{
    console.log('porta 3002');
})