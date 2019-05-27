// Lägger till class när knappen trycks 
document.addEventListener('keydown', function (event) {
    console.log(event.code);

    document.getElementById(event.code).classList.add("pressed-button");
});

// Tar bort samma class när knappen släpps
document.addEventListener('keyup', function(event) {
    console.log(event.code);
    
    document.getElementById(event.code).classList.remove("pressed-button");  
}); 
