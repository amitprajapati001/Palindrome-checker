let inputEle = document.getElementById("large-input");
let btnEle = document.getElementById("btn");
let abc = document.getElementById("abc");

btnEle.addEventListener("click", function () {

  x=inputEle.value;
  console.log(x);

  check=x;

  let revStr=x.split("");
  revStr.reverse();
  let revStr1=revStr.join("")

    
    if(revStr1==check){
        abc.innerHTML=`${check} is a Palindrome`
    }
    else {
        abc.innerHTML=`${check} is not a Palindrome`
    } 
  }

  

);
