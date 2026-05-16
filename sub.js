function subcalculations(){
    debugger;
    var fristnumber = Number(document.getElementById("txtfristnumber").value);
    var secondnumber = Number(document.getElementById("txtsecondnumber").value);
    sub =fristnumber-secondnumber;
    document.getElementById("result").innerHTML=sub;

}