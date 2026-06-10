const number = document.getElementById("count-number");
const increaseBt = document.getElementById("increase-btn");
const decreaseBt = document.getElementById("decrease-btn");
const resetBt = document.getElementById("reset-btn");

let count = 0;

increaseBt.onclick = function(){
    count ++;
    number.textContent = count;
}

decreaseBt.onclick = function(){
    count --;
    number.textContent = count;
}

resetBt.onclick = function(){
    count = 0;
    number.textContent = count;
}