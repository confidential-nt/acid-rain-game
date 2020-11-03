const gameView = document.querySelector(".game-view");
const startBtn = document.querySelector(".start-btn");
const gameInput = document.querySelector(".game-input");
const gameForm = document.querySelector(".game-form");
const containers = document.querySelectorAll(".container");
const containerOne = document.querySelector("#container1");
const containerTwo = document.querySelector("#container2");
const containerThree = document.querySelector("#container3");
// const span = document.querySelector(".game-view span");


let words = ["Star","Tree", "Airplane", "Tail", "Basketball",  "Mouth", "Telephone", "Chin", "Jar",  "Smile", "Cheek", "Ear", "Drum","Room", "Turtle","Wings","Doll","Bird","Spider","Hopscotch","Happy","Baby","Monkey","Pig","Jump","Crayon", "Arm","Arm","Rabbit", "Book", "Camera", "Rock", "Chicken", "Robot", "Drink","Balloon","Kangaroo","Clap","Baseball","Milk","Icecream", "Circle","Book","Sneeze","Dog","Flower","Pillow","Sleep","Spoon","Skip","Football", "Kick","Head","Sunglasses","Mosquito","Pinch","Chair","Jump"]
let proceed = 0;
// let randomSelectedWords = [];
// const unit = "px";
let funcArray = [];
let first = true;
let second = false;
let done = 0;
let randomWords = [];

function handleTextAlign(){
    const randomNumForStyle = Math.floor(Math.random() * 4);
    const divs = document.querySelectorAll(".moving");
    const lastValue = divs.length -1
    if(divs[lastValue] === undefined) return;
    else{
        if(randomNumForStyle === 0) {
            divs[lastValue].style.display = "none";
        }
        if(randomNumForStyle === 1){
            divs[lastValue].style.textAlign = "left";
        }
        else if(randomNumForStyle === 2){
            divs[lastValue].style.textAlign = "center";
        }
        else{
            divs[lastValue].style.textAlign = "right";
        }
    }

}



function handleGamePlay(event){
    event.preventDefault();
    const playSpan = document.querySelectorAll("span");
    playSpan.forEach(span => {
        if(span.innerText == gameInput.value){
            span.classList.add("hide");
            gameInput.value = "";
        }
    })
}

function dada(number, word){
    const containerEls = containerTwo.querySelectorAll(".container-el");
    // let forBlank = 3-(2*number)
    // let forWord = 2*number
    if(word === undefined || number < 2) return;
    if(number === 2){
        second = true;
    }
    if(second === true){
        containerEls[number-2].innerText = word
    }else{
       containerEls[number-3].innerText = "";
       containerEls[number-2].innerText = word
    }

    second = false;
}

function rainWord(number, word){
    const containerEls = containerOne.querySelectorAll(".container-el");
    // let forBlank = 3-(2*number)
    // let forWord = 2*number
    if(word === undefined) return;
    if(first === true){
        containerEls[number].innerText = word
    }else{
        containerEls[number-1].innerText = "";
        containerEls[number].innerText = word
    }

    
        
    first = false;    

   
    // const divs = document.querySelectorAll(".moving");
    // first = true;
    // if(first){
    //     divs.forEach(div => {
    //     div.style.top = "0";
        
    //     });
    //     first = false;
    // }else if(first === false){
    //     divs.forEach(div => {
       
    //         div.style.top = `${10*number}`;
    //         // div.offsetTop = 10*number;
    //     });
    // }
// document.documentElement.style.setProperty(
//     "--drop",
//     `${proceed}`+unit
//         );
//    proceed = proceed + 20;
// const translateY = `${proceed}`+unit


    // divs.forEach(div => {
       
    //     div.style.setProperty("transform", `translateY(${10*number}px)`)
    //     // div.offsetTop = 10*number;
    // });

    // for(let i = 0;i <divs.length; i++){
    //     divs[i]
    // }
    // divs.forEach(div => {
    //     const isItFirst = div.classList.contains("first")
    //     if(isItFirst){
    //         div.classList.remove("first");

    //     }

    // })
    
    // handleTextAlign();    
    //완전 새로 생긴것과 누적된 것 구분하기

        //rainword를 독립적으

}

function genertateRandomWord(){
    setTimeout(()=>{
        showRandomWords();
        genertateRandomWord();
    },3000);
}

function showRandomWords(){
    const randomNum = Math.floor(Math.random() * (words.length + 1));
    const randomWord = words[randomNum];
    if(done == 0){
        for(let i = 0; i < (gameView.offsetHeight/20); i++){
            const diva = document.createElement("div");
            const divb = document.createElement("div");
            const divc = document.createElement("div");
            // div.id = i + 1;
            diva.classList.add("container-el");
            divb.classList.add("container-el");
            divc.classList.add("container-el");
            // div.innerText = randomWord;
        //    containers.forEach(container => container.appendChild(div));
            containerOne.appendChild(diva)
            containerTwo.appendChild(divb)
            containerThree.appendChild(divc)
        }
    }



   
    // const wordSpan = document.createElement("span");
    // const wordDiv = document.createElement("div")
    // wordDiv.classList.add("moving");
    // // ads.push(wordDiv);
    // // const divId = wordDiv.length + 1;
    // // wordDiv.id = divId;
    // wordDiv.classList.add("first");
    // wordSpan.innerText = randomWord;
    // // wordSpan.style.setProperty("transform", `translateY(${8*proceed}px)`)
    // // wordSpan.id = Math.floor(Math.random() * 30);
    // wordDiv.appendChild(wordSpan);
 
    // const container = document.querySelector(".container");

    // container.appendChild(wordDiv);

    // randomWords.push(randomWord)

    // gameView.innerHTML = randomWords.map( (el, i) => {
        
    //     return `<div class="container">
    //             ${}
    //         </div>`
    // })

    // funcArray.push(function (){
    //     return randomWords[proceed];
    // })

    // funcArray.forEach(func =>{
    //     rainWord(proceed, func());
    // })

    rainWord(proceed, randomWord);
    dada(proceed, randomWord);
    // adas(proceed,randomWord);
    done++;
    proceed++;
}

// showRandomWords();
 
startBtn.addEventListener("click", rainWord);
startBtn.addEventListener("click", genertateRandomWord);
//array에 숫자넣어서 해보기..
gameForm.addEventListener("submit", handleGamePlay);
// rainWord(proceed); 