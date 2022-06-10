const resetBtn = document.querySelector(".resetBtn");
const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreseBtn");
const counter = document.querySelector(".counter");
let count = 0;




resetBtn.addEventListener("click" ,() => {
    count = 0;
    counter.innerHTML = count;

})

increaseBtn.addEventListener("click" ,() => {
    count++;
    counter.innerHTML = count;

})

decreaseBtn.addEventListener("click" ,() => {

    if(0>=count){
        return;
    }else{
    count--;
    counter.innerHTML = count;
    }

})