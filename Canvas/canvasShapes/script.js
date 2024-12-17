const clickingEvent = document.getElementById("event")


function drawHappy() {
    const canvas = document.getElementById("tutorial");
   
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
        

        //Rectangles
        // ctx.fillRect(25, 25, 100, 100);
        // ctx.clearRect(45, 45, 60, 60);
        // ctx.strokeRect(50, 50, 50, 50);
        //Top, Left, Width, Length

        //Triangle
        // ctx.beginPath()
        // ctx.moveTo(75, 50);
        // ctx.lineTo(100, 75);
        // ctx.lineTo(100, 25);
        // ctx.fill();

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // //Smiley Face
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //Outer Circle
        ctx.moveTo(110, 75);
        ctx.arc(75, 75, 35, 0, Math.PI, false); //Mouth (clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI *  2, true); //left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); //Right eye
        ctx.stroke();

        

        //Two triangles - one filled and one stroked
        // ctx.beginPath();
        // ctx.moveTo(25, 25);
        // ctx.lineTo(105, 25);
        // ctx.lineTo(25, 105);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.moveTo(125, 125);
        // ctx.lineTo(125, 45);
        // ctx.lineTo(45, 125);
        // ctx.closePath()
        // ctx.stroke();

        clickingEvent.removeEventListener("click", drawHappy);
        clickingEvent.addEventListener("click",drawSad);
       
        
    }}


function drawSad() {
    
    const canvas = document.getElementById("tutorial");
   
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //Sad Face
        
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); //Outer Circle
        ctx.moveTo(110, 105);
        ctx.arc(75, 105, 35, 0, Math.PI, true); //Mouth (anti-clockwise)
        ctx.moveTo(65, 65);
        ctx.arc(60, 65, 5, 0, Math.PI *  2, true); //left eye
        ctx.moveTo(95, 65);
        ctx.arc(90, 65, 5, 0, Math.PI * 2, true); //Right eye
        ctx.stroke();

        clickingEvent.removeEventListener("click", drawSad);
        clickingEvent.addEventListener("click", drawHappy);

        
    }}
    

// draw()
clickingEvent.addEventListener("click", drawHappy);


