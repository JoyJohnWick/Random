// COLOR
document.querySelector(".box01").addEventListener('mouseover', alertmsg)
document.querySelector(".box02").addEventListener('mouseover', alertmsgg)
document.querySelector(".box03").addEventListener('mouseover', alertmsggg)
document.querySelector(".time").addEventListener('mouseover', get)
document.querySelector(".timee").addEventListener('mouseover', gett)
document.querySelector(".timeee").addEventListener('mouseover', gettt)
document.querySelector(".result").addEventListener('mouseover', ranac)
document.querySelector(".boxx").addEventListener('mouseover', final)
document.querySelector(".ran").addEventListener('mouseover', finall)
function alertmsg(event){  
    document.querySelector(".box01").style.boxShadow = `0px 0px 50px 32px #${event.offsetX}`
}
function alertmsgg(event){
    document.querySelector(".box02").style.boxShadow = `0px 0px 50px 32px #${event.offsetX}`
}
function alertmsggg(event){
    document.querySelector(".box03").style.boxShadow = `0px 0px 50px 32px #${event.offsetX}`
}
function get(event){
    document.querySelector(".time").style.color = `#${event.offsetX}`
}
function gett(event){
    document.querySelector(".timee").style.color = `#${event.offsetX}`
}
function gettt(event){
    document.querySelector(".timeee").style.color = `#${event.offsetX}`
}
function ranac(event){
    document.querySelector("body").style.background = `#${event.offsetX}`
}
function final(event){
    document.querySelector("body").style.background = `#fff`
    document.querySelector(".ran").style.background = `#${event.offsetX}`
}
function finall(event){
    document.querySelector(".ran").style.background = `transparent`
    document.querySelector(".box01").style.boxShadow = `0px 0px 40px 5px #000`
    document.querySelector(".box02").style.boxShadow = `0px 0px 40px 5px #000`
    document.querySelector(".box03").style.boxShadow = `0px 0px 40px 5px #000`
    
}

// RANDOM
let action = document.querySelector(".action")
action.onclick = function(){
    let result = document.querySelector(".result")
    let a = Math.random()*100
    a = Math.ceil(a)
    result.innerHTML = a
}

// TIME
function newtime(){
    let time = document.querySelector(".time")
    let now = new Date();
    time.innerHTML = `${now.getHours()}`
}
setInterval(newtime, 1000)

function newtimee(){
    let time = document.querySelector(".timee")
    let now = new Date();
    time.innerHTML = `${now.getMinutes()}`
}
setInterval(newtimee, 1000)

function newtimeee(){
    let time = document.querySelector(".timeee")
    let now = new Date();
    time.innerHTML = `${now.getSeconds()}`
}
setInterval(newtimeee, 1000)

