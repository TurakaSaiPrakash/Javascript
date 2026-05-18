function onClickNumber(){
    debugger;
    var number=Number(document.getElementById("txtinputnumber").value);
    var result=document.getElementById("presult");
    if (number %2 ==0)
    {
        result.innerText=number +"is even"; 
    
    }
    else
        {
        result.innerText=number +"is odd";
    }
}