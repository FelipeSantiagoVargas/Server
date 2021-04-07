const socket = io()

const newTime = document.getElementById('new-time');
const log = document.getElementById('log');

function changeTime(){
    let values = {
        hours: newTime.value.split(':')[0],
        minutes: newTime.value.split(':')[1]
    }
    console.log(values)
    socket.emit('date',values)
    newTime.value = undefined
}

const clock_show = document.getElementById('clock-show'); 

socket.on('date',(data)=>{
    let date = new Date(data);
    console.log(date)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock_show.innerHTML = `${hours}:${minutes} ${seconds}`
})

socket.on('info',(data)=>{
    console.log(data)
    let actualDate = new Date(data.actualDate)
    let newDate = new Date(data.newDate)
    log.innerHTML += `<p> <strong>Fecha Anterior:</strong>${actualDate.getHours()}:${actualDate.getMinutes()}  <strong>Ajuste en segundos:</strong>${data.adjust}  <strong> Nueva Fecha: </strong>${newDate.getHours()}:${newDate.getMinutes()}</p>`
})
