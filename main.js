let toggle = document.querySelector(".cheeseburger");
let menu = document.querySelectorAll(".menu");
let color = document.getElementById("burger");

toggle.addEventListener('click', function(){
    // console.log("world")
    menu.forEach(col => col.classList.toggle("menu-toggle"))
    color.style.color = 'bisque';
    
    
})