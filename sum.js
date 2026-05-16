function sumcalculations(){
    debugger;
     var fristnumber = Number(document.getElementById("txtfristnumber").value);
     var secondnumber =Number(document.getElementById("txtsecondnumber").value);
     sum = fristnumber +  secondnumber ;
     document.getElementById("result").innerHTML=sum;
}