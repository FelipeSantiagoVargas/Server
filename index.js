const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors')

let hours, minutes, seconds = 0;
let dateServer = new Date();

//settings
app.set('port', process.env.PORT || 3000);

//static files
app.use(express.static(path.join(__dirname,'public')))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//start server
const server = app.listen(app.get('port'),()=>{
    axios.post('http://192.168.1.14:3000/register',{
        port: app.get('port'),
        ip: '',
    }).then(response=>{
        console.log(response)
    }).catch(function (error) {
        console.log("El servidor coordinador no esta conectado");
      })
    console.log('Server on port', app.get('port'));
})

app.post('/currentTime',(req,res)=>{
    let serverCorDate = new Date(req.body.date)
    console.log('hola')
    let difference = dateServer - serverCorDate;
    console.log(dateServer.getMinutes()+':'+dateServer.getSeconds()+'===='+serverCorDate.getMinutes()+':'+serverCorDate.getSeconds())
    console.log(difference)
    res.json({difference:difference})
})

app.post('/adjust',(req,res)=>{
    console.log(req.body)
    console.log(req.body.data)
    dateServer.setMilliseconds(dateServer.getMilliseconds()+req.body.data)
    res.json({message:"Hora ajustada correctamente"})
})

//Web Sockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket)=>{
    console.log('New Connection',socket.id)

    socket.on('date',(data)=>{
        dateServer.setHours(parseInt(data.hours),parseInt(data.minutes));
    })
});

setTimeout(function() {
    setInterval(function(){
        io.sockets.emit("date", dateServer.setSeconds(dateServer.getSeconds()+1))
    },1000) 
},2000)