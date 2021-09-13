// get input
function number(num){
    let display = document.getElementById("input");
    display.value += num;
}
// calculate result
function result(){
    let display = document.getElementById("input");
    display.value = eval(display.value);
}
// clear result
function clearResult(){
    let display = document.getElementById("input");
    display.value = "";
}
// delete one by one
function deleteOneByOne(){
    let display = document.getElementById("input");
    let remove = display.value;
    remove = remove.slice(0,-1); // delete last character
    display.value = remove;
}