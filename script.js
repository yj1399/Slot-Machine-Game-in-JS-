let value1 = document.getElementById("value1");
let value2 = document.getElementById("value2");
let value3 = document.getElementById("value3");
let inpSpeed = document.getElementById("inpSpeed");

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
    updateAnimation(event.target.value);
}