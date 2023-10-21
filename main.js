let num=parseInt(prompt("enter a number"));
let a;
let random=function(num){
     a=Math.ceil(Math.random()*10);
    if(a==num){
        return `matched`
    }
    else{
        return `not Matched`
    }
}
let result=random(num);
console.log(result);
document.write(`Your Number is ${num} and it is ${result} <br> Random number is ${a}`)