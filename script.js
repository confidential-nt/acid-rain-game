const gameView = document.querySelector(".game-view");
const startBtn = document.querySelector(".start-btn");
const gameInput = document.querySelector(".game-input");
const gameForm = document.querySelector(".game-form");
// const span = document.querySelector(".game-view span");


let words = ["Star","Tree", "Airplane", "Tail", "Basketball",  "Mouth", "Telephone", "Chin", "Jar",  "Smile", "Cheek", "Ear", "Drum","Room", "Turtle","Wings","Doll","Bird","Spider","Hopscotch","Happy","Baby","Monkey","Pig","Jump","Crayon", "Arm","Arm","Rabbit", "Book", "Camera", "Rock", "Chicken", "Robot", "Drink","Balloon","Kangaroo","Clap","Baseball","Milk","Icecream", "Circle","Book","Sneeze","Dog","Flower","Pillow","Sleep","Spoon","Skip","Football", "Kick","Head","Sunglasses","Mosquito","Pinch","Chair","Jump"]
let proceed = 0;
// const unit = "px";
let ads = [];
let first = true;
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

function rainWord(number, word){
    const containers = document.querySelectorAll(".container");
    if(word === undefined) return;
    if(first === true){
        containers[number].innerText = word
    }else{
        containers[number-1].innerText = "";
        containers[number].innerText = word
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
        for(let i = 0; i < gameView.offsetHeight/20; i++){
            const div = document.createElement("div")
            div.classList.add("container");
            // div.innerText = randomWord;
            gameView.appendChild(div);
        }
    }
   
    const wordSpan = document.createElement("span");
    const wordDiv = document.createElement("div")
    wordDiv.classList.add("moving");
    // // ads.push(wordDiv);
    // // const divId = wordDiv.length + 1;
    // // wordDiv.id = divId;
    // wordDiv.classList.add("first");
    // wordSpan.innerText = randomWord;
    // // wordSpan.style.setProperty("transform", `translateY(${8*proceed}px)`)
    // // wordSpan.id = Math.floor(Math.random() * 30);
    wordDiv.appendChild(wordSpan);
 
    const container = document.querySelector(".container");

    container.appendChild(wordDiv);

    randomWords.push(randomWord)

    rainWord(proceed, randomWords[0]);
    done++;
    proceed++;
}

// showRandomWords();
 
startBtn.addEventListener("click", rainWord);
startBtn.addEventListener("click", genertateRandomWord);
//array에 숫자넣어서 해보기..
gameForm.addEventListener("submit", handleGamePlay);
rainWord(proceed); 