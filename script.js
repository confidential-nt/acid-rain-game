const gameView = document.querySelector(".game-view");
const startBtn = document.querySelector(".start-btn");
const gameInput = document.querySelector(".game-input");
const gameForm = document.querySelector(".game-form");
const containers = document.querySelectorAll(".container");
const containerOne = document.querySelector("#container1");
const containerTwo = document.querySelector("#container2");
const containerThree = document.querySelector("#container3");
// const span = document.querySelector(".game-view span");
const childOriginDiv = document.querySelector(".container-el");


let words = ["Star","Tree", "Airplane", "Tail", "Basketball",  "Mouth", "Telephone", "Chin", "Jar",  "Smile", "Cheek", "Ear", "Drum","Room", "Turtle","Wings","Doll","Bird","Spider","Hopscotch","Happy","Baby","Monkey","Pig","Jump","Crayon", "Arm","Arm","Rabbit", "Book", "Camera", "Rock", "Chicken", "Robot", "Drink","Balloon","Kangaroo","Clap","Baseball","Milk","Icecream", "Circle","Book","Sneeze","Dog","Flower","Pillow","Sleep","Spoon","Skip","Football", "Kick","Head","Sunglasses","Mosquito","Pinch","Chair","Jump"]
let proceed = 0;
// let randomSelectedWords = [];
// const unit = "px";
let funcArray = [];
let first = true;
let second = false;
let done = 0;
let randomWords = [];
let oper = false;
let fff = [];

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


function handleGameOver(){
    const divCol = document.querySelectorAll("#container1 .container-col");
    const divEl = document.querySelectorAll("#container1 .container-col .container-el");
    if(divEl.length === divCol.length - 1){
        alert("game over!");
    }
}


function handleGamePlay(event){
    event.preventDefault();
    const playDiv = document.querySelectorAll(".container-col");
    const haveChild = [...playDiv].filter(div => div.hasChildNodes());
    haveChild.forEach(div => {
        if(div.childNodes[0].innerText == gameInput.value){
            div.removeChild(div.childNodes[0]);
            this.reset();
        }
    })
}

// function dada(number, word){
//     const containerEls = containerTwo.querySelectorAll(".container-col");
//     // let forBlank = 3-(2*number)
//     // let forWord = 2*number
//     if(word === undefined || number < 2) return;
//     if(number === 2){
//         second = true;
//     }
//     if(second === true){
//         containerEls[number-2].innerText = word
//     }else{
//        containerEls[number-3].innerText = "";
//        containerEls[number-2].innerText = word
//     }

//     second = false;
// }

function rainWord(number, word){
    oper = !oper;
    const containerCols = containerOne.querySelectorAll(".container-col");
    if(oper === true){
        const div = document.createElement("div");
        div.classList.add("container-el");
        div.innerText = word;
        containerCols[0].appendChild(div); 
    }else{
        const haveChildCols = [...containerCols].filter((col) => {
            return col.hasChildNodes();
        })
       
        const originWords = haveChildCols.reduce((acc, cur, i) => {
            acc[i] = cur.children[0].innerText;
            return acc;
        },[])

        console.log(originWords);

        haveChildCols.map((col,i) => {
            col.removeChild(col.childNodes[0]);
            const div = document.createElement("div");
            div.classList.add("container-el")
            div.innerText = originWords[i];
            col.nextElementSibling.appendChild(div);
        })

        // const sadas = [...containerCols];
        // sadas.forEach((col,i) => {
        //     if(col.hasChildNodes()){
        //         fff.push(i);
        //     }
        // })

        // haveChildCols.map((col,i)=>{

        // })
        // for(let col of )
        // const resultIndex = [...containerCols].findIndex( col => col.hasChildNodes())//얘보다 더 좋은 방법을 찾아야 
        // const childDiv = containerCols[resultIndex].children[0]
        // const originWord = childDiv.innerText;
        // childDiv.innerText = "";
        // const newDiv = document.createElement("div");
        // newDiv.classList.add("container-el");
        // newDiv.innerText = originWord;
        // containerCols[resultIndex +  1].appendChild(newDiv);
    }
    

    
    // const containerHTML = `<div>${word}</div>`
    // let forBlank = 3-(2*number)
    // let forWord = 2*number
    // if(word === undefined) return;
    // if(first === true){
    //     containerEls[number].innerHTML = containerHTML
    // }else{
    //     containerEls[number-1].innerText = "";
    //     containerEls[number].innerHTML = containerHTML
    // }

    // if(second === true){
        
    // }
        
    // first = false;
    // containerEls.forEach((el, i) => {
    //     if(oper === true){
            
    //     }
    // })    

   
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
    //random word 생길때마다 음.. 그거 그 뭐냐 디브 추가해줘야 할듯 그걸 옮겨야 할 듯 텍스트를 옮기는게 아니라
    const randomNum = Math.floor(Math.random() * (words.length + 1));
    const randomWord = words[randomNum];
    if(done == 0){
        for(let i = 0; i < (gameView.offsetHeight/20); i++){
            const diva = document.createElement("div");
            const divb = document.createElement("div");
            const divc = document.createElement("div");
            // div.id = i + 1;
            diva.classList.add("container-col");
            divb.classList.add("container-col");
            divc.classList.add("container-col");
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
    handleGameOver();
    // dada(proceed, randomWord);
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
