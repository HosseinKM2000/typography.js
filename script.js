'use strict'

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200 ;

hero.addEventListener('mousemove',function(event){
    const{offsetWidth : width , offsetHeight: height}= hero ; 
    let {offsetX : x , offsetY : y}= event
    
    x += event.target.offsetLeft;
    y += event.target.offsetTop;

    const xwalk = Math.round((x / width * walk) - (walk / 2));
    const ywalk = Math.round((y / height * walk) - (walk / 2));

    text.style.textShadow = `
    ${xwalk}px ${ywalk}px 5px rgb(0, 245, 245),
    ${xwalk * -1}px ${ywalk}px 5px rgb(238, 255, 0),
    ${ywalk}px ${xwalk *-1}px 5px rgb(255, 0, 128),
    ${ywalk * -1}px ${xwalk}px 5px rgb(140, 0, 255)
    `
 
    
    console.log(xwalk , ywalk)
})