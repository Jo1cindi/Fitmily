const todayDate = new Date();

let startDate = new Date();
let endDate = new Date();

startDate.setDate(todayDate.getDate() - 5);
endDate.setDate(todayDate.getDate() + 5);

let arrayDate = getDatesInRange(startDate, endDate);
const divObj = document.querySelectorAll(".dateCal");

for(let i=0; i<divObj.length; i++) {
    let dateObj = getDayObj(arrayDate[i]);
    divObj[i].children[0].innerHTML = dateObj.weekday;
    divObj[i].children[1].innerHTML = dateObj.day;
}

function getDatesInRange(startDate, endDate) {
    const date = new Date(startDate.getTime());
    const dates = [];  
    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    } 
    return dates;
}

function getDayObj(date, locale = 'en-NG') {
    const dayObj = {
        weekday: '',
        day: null
    }
    dayObj.weekday =  date.toLocaleDateString(locale, {weekday: 'short'});
    dayObj.day =  date.toLocaleDateString(locale, {day: 'numeric'});
    return dayObj;
}

