setInterval(showTime, 1000);
function showTime() {
    let date = new Date();
    let hour = date.getHours(); 
    let min = date.getMinutes(); 
    let sec = date.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let day = date.getDay();
    let week = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]
    let divas = date.getDate();
    let month = date.getMonth();
    divas = divas < 10 ? "0" + divas : divas;
    month = month < 10 ? "0" + month : month;
    let year = date.getFullYear();
    let d = divas + ":" + month + ":" + year;

    document.getElementById('d').innerHTML = d;
    document.getElementById('d1').innerHTML = week[day];

    document.getElementById('h').innerText = hour;
    document.getElementById('m').innerText = min;
    document.getElementById('s').innerText = sec;    
}

showTime();


