// Eventos keydow e keyup

// keydow
document.addEventListener("keydown" , function(event) {
    if(event.key === "Enter") {
        console.log("Apertou Enter");
    }
});


// keyup
document.addEventListener("keyup", function(e) {
    if(event.key === "Enter") {
        console.log("Soutou o Enter");
    }
});




