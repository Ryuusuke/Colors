var colors = ["cyan", "aliceblue", "darkmagenta", "gold", "azure", "green", "moccasin", "red", "black"];
var index = 0;
function changeColor() {
    document.body.style.backgroundColor = colors[index];
    index++;
    if (index == 9) {
        return index = 0
    }
    
    
        
    
}
function cyan() {
    document.body.style.backgroundColor = colors[0]
}
function aliceblue() {
    document.body.style.backgroundColor = colors[1]
}
function darkmagenta() {
    document.body.style.backgroundColor = colors[2]
}
function gold() {
    document.body.style.backgroundColor = colors[3]
}
function azure() {
    document.body.style.backgroundColor = colors[4]
}
function green() {
    document.body.style.backgroundColor = colors[5]
}
function moccasin() {
    document.body.style.backgroundColor = colors[6]
}
function red() {
    document.body.style.backgroundColor = colors[7]
}
function black() {
    document.body.style.backgroundColor = colors[8]
}
function random() {
    var rand = Math.floor((Math.random()*8)+1)
    document.body.style.backgroundColor = colors[rand];
}
function choose() {
    var choose1 = prompt("Choose from the spectrum");
     document.body.style.backgroundColor = choose1;
}

