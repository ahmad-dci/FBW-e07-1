// let i = 0;
// const bla = setInterval(() => {
//     i++;
//     document.body.textContent = '';
//     document.write(i);
//     //document.write('<br>');
//     if (i === 10) {
//        clearInterval(bla) 
//     }
// }, 2000)

let seconds = 0; 
let minutes = 0;
let hours = 0;

// increase the seconds by 1 every second
// if seconds  = 60 increase the minutes and reset the seconds = 0
// if minutes  = 60 increase the hours and reset the minutes = 0
setInterval(() => {
    seconds++;
    document.body.textContent ='' ;
    document.write(`${format(hours)}:${format(minutes)}:${format(seconds)}`);
    if (seconds === 60) {
        minutes++;
        seconds = 0;
    }
    if (minutes === 60) {
        hours++;
        minutes = 0;
    }
    if (hours === 24) {
        hours = 0;
    }
}, 1000);
// extra: print the time with this format '00:00:00'
function format (num) {
    // if (num < 10) {
    //     return '0' + num
    // }
    // return num
    return num < 10 ? '0' + num : num;
}