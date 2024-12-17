function doFV() {
	// INPUT
	let p = parseFloat(document.getElementById("principle").value);
	let r = parseFloat(document.getElementById("annualrate").value);
	let n = parseInt(document.getElementById("periods").value);
	let y = parseInt(document.getElementById("years").value);
	// PROCESSING
	let output = computeFutureValue(p, r, n, y);
	// OUTPUT with formatting
    console.log(output)
	document.getElementById("output").innerHTML = `$${output.toFixed(2)}`;
}

// computer future value function
// p = principal, r = annual rate, y = number of years, n = periods of year.

function computeFutureValue(p, r, n, y) {
	let er = r / n; // effective rate per period
	let totalperiods = n * y;
	return p * Math.pow(1 + er, totalperiods);
}

// get current year
let thedate = new Date();
document.getElementById("theyear").innerHTML = thedate.getFullYear();


//Form Validation
const form = document.querySelector("form");
const p =document.getElementById("principle");
const cp = document.getElementById("confprinciple")
const span = document.querySelector("#confprinciple + span.error");
const click = document.querySelector("#click")

cp.addEventListener("input", (event) => {
    if (cp.value === p.value) {
        span.textContent = "";
        span.className = "error"
    } else {
        showError()
    }
});



form.addEventListener("submit", function(event) {
    
        event.preventDefault()
 
    
});



function showError() {
    if (cp.value !== p.value) {
        span.textContent = "You need to enter a value that matches the principle amount above."
    }
    span.className = "error active"
}


