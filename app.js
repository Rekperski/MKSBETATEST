//Loading
window.addEventListener('load', function() {
document.body.classList.remove('loading');
document.body.classList.add('loaded');
});
//Timer
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('hr_dot');
let min_dot = document.querySelector('min_dot');
let sec_dot = document.querySelector('sec_dot');

let endDate = '2/23/2024 16:00:00';

let x = setInterval(function(){

let now = new Date(endDate).getTime();
let countDown = new Date().getTime();
let distance = now - countDown;

let d = Math.floor(distance / (1000 * 60 * 60 *
24));
let h = Math.floor((distance % (1000 * 60 * 60 *
24)) / (1000 * 60 * 60));
let m = Math.floor((distance % (1000 * 60 *
60)) / (1000 * 60));
let s = Math.floor((distance % (1000 * 60)) / (1000));

days.innerHTML = d + "<br><span>Dni<span>";
hours.innerHTML = h + "<br><span>Godzin<span>";
minutes.innerHTML = m + "<br><span>Minut<span>";
seconds.innerHTML = s + "<br><span>Sekund<span>";

dd.style.strokeDashoffset = 440 - (440 * d) / 365;
hh.style.strokeDashoffset = 440 - (440 * h) / 24;
mm.style.strokeDashoffset = 440 - (440 * m) / 60;
ss.style.strokeDashoffset = 440 - (440 * s) / 60;
        
if(distance < 0){
    clearInterval(x);
    document.getElementById("time").style.display = 'none';
    document.querySelector(".timertext").style.display = 'block';
}
});
//Button To Top
