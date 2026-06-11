const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBt');
const decreaseBtn = document.getElementById('decreaseBt');
const resetBtn = document.getElementById('resetBt');

let count = 0;


increaseBtn.onclick = function(){
    count ++;
    counter.textContent = count
}
decreaseBtn.onclick = function(){
    count --;
    counter.textContent = count
}
resetBtn.onclick = function(){
    count = 0;
    counter.textContent = count
}