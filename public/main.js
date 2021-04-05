const socket = io()

const newTime = document.getElementById('new-time');

function changeTime(){
    let values = {
        hours: newTime.value.split(':')[0],
        minutes: newTime.value.split(':')[1]
    }
    socket.emit('date',values)
    newTime.value = undefined
}

alert()
const clock_show = document.getElementById('clock-show'); 

socket.on('date',(data)=>{
    let date = new Date(data);
    console.log(date)
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    clock_show.innerHTML = `${hours}:${minutes} ${seconds}`
})
