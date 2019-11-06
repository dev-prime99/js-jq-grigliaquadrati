
var pod, pariodispari;

var contatore = 0;

var i = 0;

$("a").click(function (){

  pod = Math.floor(Math.random() * 100) + 1;
  console.log(pod);
  if (pod % 2 == 0 && i < 15) {
    console.log("pari");
    $(this).css("background-color", "red");
    i += 1;
  } else{
    console.log("dispari");
    $(this).css("background-color", "green");
  }
  console.log(i);
  
})
