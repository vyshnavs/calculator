function buttonclick(val)
{ 

  document.getElementById("screen").value+=val;

}

function clearDisplay(){

    document.getElementById("screen").value= "";
}
function  equalclick() 
{
   var text=document.getElementById("screen").value
var result=eval(text)/* eval is used to do entire arithematic operation of a text */
document.getElementById("screen").value=result


}
