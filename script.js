let inputEle = document.getElementById("large-input");
let btnEle = document.getElementById("btn");
let abc = document.getElementById("abc");

btnEle.addEventListener("click", function () {

  x=inputEle.value;
  console.log(x);
  let lowerCase=x.toLowerCase();
  check=lowerCase;

  let revStr=lowerCase.split("");
  revStr.reverse();
  let revStr1=revStr.join("")

    
    if(revStr1==check){
        abc.innerHTML=`${x} is a Palindrome`
    }
    else {
        abc.innerHTML=`${x} is not a Palindrome`
    } 
  }

  

);
