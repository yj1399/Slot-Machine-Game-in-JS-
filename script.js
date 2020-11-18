let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let inpSpeed = document.getElementById("inpSpeed");
let spinbtn = document.getElementById("spinbtn");
let stopbtn = document.getElementById("stopbtn");


let input = document.getElementById("inpSpeed").value;


let element1 = document.getElementById("value1");
let element2 = document.getElementById("value2");
let element3 = document.getElementById("value3");

let hasAnimationPaused = true;
let startAnimationClass = 'animation'
let aniamtionPausedClass = 'off'



let value = [ "😋" , "😛" ,  "😝" ,  "😜" , "🤪" , "🤨" ,
 "🧐" , "🤓" , "😎" , "😀" , "😃" , "😄" ,"😁" , "😆" , "😅" , "😂" , "🤣" , "🤩" , "🥳"  , "😏" , "😒" , "😞"  ,"😔"  , "😟" , "😕"]


function getRandomValues(){
    return value[Math.floor(Math.random() *  25)];
}

let animationid ;

function updateAnimation( newSpeed) {

    if( animationid ) clearInterval(animationid)
    animationid = setInterval( () => {
    value1.innerText = getRandomValues();
    value2.innerText = getRandomValues();
    value3.innerText = getRandomValues();
    } , 1000 / newSpeed )
    console.log(animationid);

}


inpSpeed.onchange = function(ev){
    
    document.documentElement.style.setProperty('--speed' , event.target.value)
}



spinbtn.onclick = function(){
    if( element1.className != "value"){
        element1.className = "value";
        element2.className = "value";
        element3.className = "value";
    }
    let name = 'animation';
    if ( hasAnimationPaused) {
        element1.className += " " + name;
        element2.className += " " + name;
        element3.className += " " + name;
    }
    console.log(element1.className);
    console.log(input);
    updateAnimation(input);
    hasAnimationPaused = false ;
}

stopbtn.onclick = function(){
    if( element1.className != "value"){
        element1.className = "value";
        element2.className = "value";
        element3.className = "value";
    }
    let name = 'off';
    if (!hasAnimationPaused) {
        element1.className += " " + name;
        element2.className += " " + name;
        element3.className += " " + name;
    }
    console.log(element1.className);
    if(animationid) clearInterval(animationid)
    hasAnimationPaused = true ;
}

