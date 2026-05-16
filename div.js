function divcalculations(){
    debugger;
    var fristnumber=Number(document.getElementById("txtfristnumber").value);
    var secondnumber=Number(document.getElementById("txtsecondnumber").value);
    div=fristnumber/secondnumber;
    document.getElementById("result").innerHTML=div;
}