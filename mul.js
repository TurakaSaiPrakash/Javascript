function mulcalculations(){
    debugger;
    var fristnumber=Number(document.getElementById("txtfristnumber").value);
    var secondnumber=Number(document.getElementById("txtsecondnumber").value);
    mul=fristnumber*secondnumber;
    document.getElementById("result").innerHTML=mul;
}