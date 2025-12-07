const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hi Harsha, welcome to devops using docker and jenkins');
})

app.listen(3000, () => console.log('Hiii '));