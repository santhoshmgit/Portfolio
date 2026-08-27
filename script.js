// Typing Effect

const text = [
    "Computer Science Student",
    "Web Developer",
    "Python Programmer",
    "Future Software Engineer"
];

let index = 0;
let char = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = text[index];

    if(!deleting){
        typing.textContent = current.substring(0,char++);
        if(char>current.length){
            deleting = true;
            setTimeout(typeEffect,1000);
            return;
        }
    }else{
        typing.textContent = current.substring(0,char--);
        if(char<0){
            deleting = false;
            index = (index+1)%text.length;
        }
    }

    setTimeout(typeEffect,deleting?50:100);
}

typeEffect();


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top = section.getBoundingClientRect().top;
const visible = 150;

if(top<window.innerHeight-visible){
section.classList.add("active");
}

});

});
