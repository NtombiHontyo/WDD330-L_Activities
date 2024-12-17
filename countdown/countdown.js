const countdown = document.getElementById('countdown');
const countDownBtn = document.getElementById('startButton');
let startTime = 10000;

function startCountDown() {
    let startTime = 10;
    let timerId = setInterval(function() {
        countdown.innerHTML = startTime;
        if(startTime === 0) {
            setTimeout(() => {clearInterval(timerId); alert('Time is up!');}, 0)
        }
        startTime--;
    }, 1000);
    
    
}

countDownBtn.addEventListener('click', startCountDown)

//  function printNumbers(from, to) {
//     let current = from;

//     let timerId = setInterval(function() {
//         alert(current);
//         if (current === to) {
//             clearInterval(timerId);
//         }
//         current++;
//     }, 1000)
//  }

//  printNumbers(45, 52);