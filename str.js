let strings = "";
function length(){
 let num = document.getElementById("input").value;
 let result = document.getElementById("output");
 strings=num.length;
 result.value=strings;
}
function replace(){
    let num = document.getElementById("input").value;
    let result = document.getElementById("output");
    let a=prompt("why remove");
    let b=prompt("why add");
    result.value=num.replace(a,b);
}
function indexof(){
    let num = document.getElementById("input").value;
    let result = document.getElementById("output");
    let c =prompt("find the index");
    result.value=num.indexOf(c);

}
function lastindex(){
    let num = document.getElementById("input").value;
    let result = document.getElementById("output");
    let d =prompt("find the lastindex");
    result.value=num.lastIndexOf(d);
}
function upper(){
    let num = document.getElementById("input").value;
    let result= document.getElementById("output");
    result.value=num.toUpperCase();
}
function lower(){
    let num = document.getElementById("input").value;
    let result= document.getElementById("output");
    result.value=num.toLowerCase();
}
function repeat(){
    let num = document.getElementById("input").value;
    let result= document.getElementById("output");
    let e =prompt("how many times repeated");
    result.value=num.repeat(e);
}
function concat(){
    let num = document.getElementById("input").value;
    let result = document.getElementById("output");
    let f =prompt("joining");
    result.value=num.concat(f);
}
function slice(){
    let num = document.getElementById("input").value;
    let result = document.getElementById("output");
    let x = prompt("enter start");
    let y = prompt("enter end");
    result.value=num.slice(x,y);
}
function trim(){
    let num = document.getElementById("input").value;
    let result= document.getElementById("output");
    result.value=num.trim();
}











































