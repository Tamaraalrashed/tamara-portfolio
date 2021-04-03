'use strict';

const express=require('express');

const server= express();
const PORT = process.env.PORT || 3000;
//route definitions
//localhost:3000/test

server.use(express.static('./public'));


server.get('/',(req,res)=>{
    res.send('home route')
})
server.get('/test', (request, response)=>{
response.send('you server');
})


server.listen(PORT, ()=>{
    console.log(`LISTENING TO PORT:${PORT}`);
} )
