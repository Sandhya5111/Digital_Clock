let time = () => {
    let element = document.querySelector("h1")
    let date = new Date()
    hours = date.getHours()
    min = date.getMinutes()
    sec = date.getSeconds()
    week = date.getDay()

    let w = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
    weeks = w[week]

    let day;
    day=hours < 12 ?  "AM" : "PM"

    let weeek=["SUN","MON","TUE","WED","THURS","FRI","SAT"];

    hours=hours<10? `0${hours}` :hours;
    min=min<10? `0${min}` :min;
    sec=sec<10? `0${sec}` :sec;

    dayy=weeek[week];
    
    element.innerHTML=`${hours}:${min}:${sec}:${day}:${week}:${dayy}:${month}:${year}`

}
setInterval(() => {
    time()
},1000)