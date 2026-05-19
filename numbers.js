function number(){
    debugger;
    var num=Number(document.getElementById("txtinputnumber").value);
    var result=document.getElementById("presult");
    if (num==2)
    {
        result.innerText=("this is two");
    }   
     else if (num==3)
     {
        result.innerText=("this is three");
     }  
     else if (num==4)
     {
        result.innerText=("this is four");
     }  
}