const express =  require('express');
const cors = require('cors');

const app = express();

app.use(express.json({extended: true}));
app.use(cors());

require('./src/routes/users')(app);
require('./src/routes/projectController')(app);

app.listen(3002, ()=>{
    console.log('porta 3002');
})