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


function printNumbers(from, to) {
    let current = from;
    setTimeout(function run() {
        alert(current);
        
        if(current < to) {
            setTimeout(run, 1000); 
        }
        current++;
    }, 1000)
}

printNumbers(45, 50);