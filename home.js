document.addEventListener('DOMContentLoaded', function() {
    // Check if 'name' exists in localStorage
    if (localStorage.getItem("name")) {
        // Get the stored name from localStorage
        var userName = localStorage.getItem("name");
        // Update the content of <b id="user-name">
        document.getElementById('user-name').textContent = `Hello ${userName}`;
    }
});
function toggleMenu(){
    var ul=document.querySelector('ul');
    ul.classList.toggle('active');
}
const slides=document.querySelectorAll(".slides img");
let slideindex=0;
let intervalId=null;
document.addEventListener("DOMContentLoaded",initialization);
function initialization(){
    if(slides.length>0){
    slides[slideindex].classList.add("displaySlide");
    intervalId=setInterval(nextslide,5000);
    }
}
function showSlide(index){
    if(index>=slides.length){
        slideindex=0;
    }
    else if(index<0){
        slideindex=slides.length-1;
    }
slides.forEach(slide =>{
    slide.classList.remove("displaySlide");
});
slides[slideindex].classList.add("displaySlide");
}
function prevslide(){
slideindex--;
showSlide(slideindex);
}
function nextslide(){
slideindex++;
showSlide(slideindex);
}

