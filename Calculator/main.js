const b1 = document.querySelector(".one");
const b2 = document.querySelector(".two");
const b3 = document.querySelector(".three");
const b4 = document.querySelector(".four");
const b5 = document.querySelector(".five");
const b6 = document.querySelector(".six");
const b7 = document.querySelector(".seven");
const b8 = document.querySelector(".eight");
const b9 = document.querySelector(".nine");
const bplus = document.querySelector(".plus");
const bminus = document.querySelector(".minus");
const bmultiply = document.querySelector(".multiply");
const bdivide = document.querySelector(".divide");
const bac = document.querySelector(".clear");
const bequal = document.querySelector(".equal");
const screentext=document.querySelector(".screen-text");
const answertext=document.querySelector(".answer-text");

b1.addEventListener("click", function(e){
    fun1(e,1);
});
b2.addEventListener("click", function(e){
    fun1(e,2);
});
b3.addEventListener("click", function(e){
    fun1(e,3);
});
b4.addEventListener("click", function(e){
    fun1(e,4);
});
b5.addEventListener("click", function(e){
    fun1(e,6);
});
b6.addEventListener("click", function(e){
    fun1(e,6);
});
b7.addEventListener("click", function(e){
    fun1(e,7);
});
b8.addEventListener("click", function(e){
    fun1(e,8);
});
b9.addEventListener("click", function(e){
    fun1(e,9);
});

bplus.addEventListener("click", function(e){
    fun1(e,"+");
});
bminus.addEventListener("click", function(e){
    fun1(e,"-");
});
bmultiply.addEventListener("click", function(e){
    fun1(e,"*");
});
bdivide.addEventListener("click", function(e){
    fun1(e,"/");
});
bac.addEventListener("click", fun2);
bequal.addEventListener("click", fun3);


function fun1(e, num) 
{
    e.preventDefault();
    screentext.append(num);
    console.log(num);
    const ex=`${screentext.textContent}`;
}

function fun2(e){
    screentext.textContent="";
    answertext.textContent="";

}

function fun3(e){
    const str=screentext.textContent;
    const length=str.length;
    let num="";
    let num2=0;
    let operator="";

    for(let i=0;i <= length;++i)
    {
        if(str[i] != "+" && str[i] != "-" && str[i] != "/" && str[i] != "*" && i !=length)
       {
        num+=str[i];
       }
       else
       {
        if(operator ==""){
            num2=parseInt(num);
            if(i != length)
                operator=str[i];
            num="";
        }
        else if(operator == "+")
        {
            num2= num2 + parseInt(num);
            if(i != length)
                operator=str[i];
            num="";
        }
        else if(operator == "-")
            {
                num2= num2 - parseInt(num);
                if(i != length)
                operator=str[i];
                num="";
            }
        else if(operator == "/")
        {
            num2= num2 / parseInt(num);
            if(i != length)
                operator=str[i];
            num="";
        }
        else if(operator == "*")
            {
                num2= num2 * parseInt(num);
                if(i != length)
                    operator=str[i];
                num="";
            }
       }
    }
    fun4(num2);
    
    
    
}

function fun4(num){
    answertext.textContent=num;
}

