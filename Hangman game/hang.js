const Allletter ="abcdefghijklmnopqrstuvwxyz";
let letterArray =Array.from(Allletter);
let letterContainer = document.querySelector(".letters");

letterArray.forEach(letter => {
    let span =document.createElement("span");
    let textLitter =document.createTextNode(letter);
    span.appendChild(textLitter);
    span.className ='letter-box';
    letterContainer.appendChild(span);

});

const words  ={
    programming:["php" , "javascript","go","scala","r","python","mysql","fortran","c"],
    sportsTeam:["liverpool","mancity","manunited","arsnal","totingham","real madrid","barcelona"],
    programmingdegree:["frontend","backend","cybersecurity","mobiledeveloper","ai","is","embeddedsystem"],
    country:["egypt","palestine","yemen","libya","saudi arabia","soudan"]

}


let allkeys = Object.keys(words);
let randomNumber = Math.floor(Math.random()* allkeys.length);
let randomNumberNew  = allkeys[randomNumber ];
let randomprop=words[randomNumberNew];
let randomvalueprop =Math.floor(Math.random()* randomprop.length);
let writeRandomValueProp =randomprop[randomvalueprop];
document.querySelector(".game_info .category span").innerHTML= randomNumberNew ;

let letterGuessContainer = document.querySelector(".letters-guess");
let LetterAndSpace = Array.from(writeRandomValueProp);
LetterAndSpace.forEach(letter =>{
let emptySpan =document.createElement("span");
if(letter ==' '){
    emptySpan.className="with-span";
}

letterGuessContainer.appendChild(emptySpan);
});
let geussspans =document.querySelectorAll(".letters-guess span");
let successSound= document.querySelector(".success-sound");
let failSound= document.querySelector(".fail-sound");
let wrongAttemps = 0;
let theDraw =document.querySelector(".human-draw");
let counter=0;
document.addEventListener("click",(e)=>{
    let theStuts =false ;
    
if(e.target.className === 'letter-box'){
   e.target.classList.add("clicked");
   let theClickedLitter = e.target.innerHTML.toLowerCase();
//    console.log( LetterAndSpace);
   LetterAndSpace.forEach((wordlitter ,wordindex)=> {
if (theClickedLitter === wordlitter) {
    theStuts =true;
    successSound.play();
geussspans.forEach((span, spanindex)=>{
    if(wordindex === spanindex){
   
        span.innerHTML = theClickedLitter;
  counter++;
if(LetterAndSpace.length === counter){
    goodGame();
}
    }
});

}

   });
 if(theStuts !== true){
    wrongAttemps++;
    failSound.play();
    theDraw.classList.add(`wrong-${wrongAttemps}`);
    
    if(wrongAttemps === 8){
        endGame();
        letterContainer.classList.add("finished");
    }
 }
 console.log(theStuts);
}

});

function endGame(){
    let div =document.createElement("div");
    let divtext =document.createTextNode(`Game Over , the word is ${writeRandomValueProp}`);
    div.appendChild(divtext);
    div.className ="popup";
    document.body.appendChild(div);
}
function goodGame(){
    let div =document.createElement("div");
    let divtext =document.createTextNode(`congradulations`);

        div.onclick =function(){
            location.reload(); 
        }
    
    div.appendChild(divtext);
    div.className ="popup";
    document.body.appendChild(div);
}
