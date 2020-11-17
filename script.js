const gameView = document.querySelector(".game-view");
const startBtn = document.querySelector(".start-btn");
const gameInput = document.querySelector(".game-input");
const gameForm = document.querySelector(".game-form");
const containers = document.querySelectorAll(".container");
const containerOne = document.querySelector("#container1");
const containerTwo = document.querySelector("#container2");
const containerThree = document.querySelector("#container3");
const childOriginDiv = document.querySelector(".container-el");


let words = ["Star","Tree", "Airplane", "Tail", "Basketball",  "Mouth", "Telephone", "Chin", "Jar",  "Smile", "Cheek", "Ear", "Drum","Room", "Turtle","Wings","Doll","Bird","Spider","Hopscotch","Happy","Baby","Monkey","Pig","Jump","Crayon", "Arm","Arm","Rabbit", "Book", "Camera", "Rock", "Chicken", "Robot", "Drink","Balloon","Kangaroo","Clap","Baseball","Milk","Icecream", "Circle","Book","Sneeze","Dog","Flower","Pillow","Sleep","Spoon","Skip","Football", "Kick","Head","Sunglasses","Mosquito","Pinch","Chair","Jump"]

let done = 0;
let randomWords = [];
let oper = false;
let operSec = false;
let operThir = false;
let finish = false;


function handleGameOver(){
    const divColOne = document.querySelectorAll("#container1 .container-col");
    const divColTwo = document.querySelectorAll("#container2 .container-col");
    const divColThree = document.querySelectorAll("#container3 .container-col");
    const divEl = document.querySelectorAll("#container1 .container-col .container-el");
    if(divColOne[divColOne.length -1].hasChildNodes() || divColTwo[divColTwo.length -1].hasChildNodes() || divColThree[divColThree.length -1].hasChildNodes()){
        alert("game over!");
        finish = !finish;
        
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

function rainWordThir(word){
    setTimeout(() => {
        operThir = !operThir;
    // const randomNum = MMath.floor(Math.random() * 3) + 1
    const containerCols = containerThree.querySelectorAll(".container-col");
    if(operThir === true){
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

    }
    }

    ,6000)
}

function rainWordSec(word){
    setTimeout(() => {
        operSec = !operSec;
    // const randomNum = MMath.floor(Math.random() * 3) + 1
    const containerCols = containerTwo.querySelectorAll(".container-col");
    if(operSec === true){
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

    }
    }

    ,3000)
}


function rainWord(word){
    oper = !oper;
    // const randomNum = MMath.floor(Math.random() * 3) + 1
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

    }

}

function genertateRandomWord(){
   const loop = setTimeout(()=>{
        showRandomWords();
        handleGameOver()
        genertateRandomWord();
    },3000);
   
   if(finish){
       clearTimeout(loop);
   } 
}

function showRandomWords(){
   
    const randomNum = Math.floor(Math.random() * (words.length + 1));
    const randomWord = words[randomNum];
    const randomWordSec = words[randomNum + 1];
    const randomWordThir = words[randomNum + 2];
    if(done == 0){
        for(let i = 0; i < (gameView.offsetHeight/20); i++){
            const diva = document.createElement("div");
            const divb = document.createElement("div");
            const divc = document.createElement("div");
         
            diva.classList.add("container-col");
            divb.classList.add("container-col");
            divc.classList.add("container-col");
   
            containerOne.appendChild(diva)
            containerTwo.appendChild(divb)
            containerThree.appendChild(divc)
        }
    }


    rainWord(randomWord);
    
    rainWordSec(randomWordSec);
    
    rainWordThir(randomWordThir);
  
    done++;
    
}


startBtn.addEventListener("click", genertateRandomWord);
gameForm.addEventListener("submit", handleGamePlay);

