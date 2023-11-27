var number=0;
var before="Let's Go!"
function reset()
{
  
  //document object-->html document real world entity i.e. the object
  var text = document.getElementById("counter");
  if(text.innerHTML!=0)
  {
    text.innerHTML=0;
  }
  else
  {

    text.innerHTML=before;
  }
  
}
function inc()
{
   number=number+1;
   var text=document.getElementById("counter");
   text.innerHTML=number;
}
function dec()
{
  number=number-1;
  var text=document.getElementById("counter");
  text.innerHTML=number;
}