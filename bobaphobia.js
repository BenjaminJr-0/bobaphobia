const increase = document.getElementById("increase");
const tradein = document.getElementById("trade_in");
const countlabel = document.getElementById("count_label");
const bobas = document.getElementById("bobacups");

let count = 0;
let bobacups = 0;

increase.onclick = function(){
    count++
    countlabel.textContent = count;
}

tradein.onclick = function(){
    if(count >= 100){
        console.log("Here is your boba, Enjoy :3");
        count -= 100;
        bobacups++
        bobas.textContent = bobacups;
    }
}