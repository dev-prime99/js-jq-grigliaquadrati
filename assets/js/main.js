
var pod, pariodispari, rossi, verdi;

var contatore = 0;

rossi = 0;

verdi = 0;

/*
  //BONUS

for (var i = 0; i < 8; i++) {
  document.getElementById('cube').innerHTML += "<div class='flex riga'><a href='#'></a><a href='#'></a><a href='#'></a><a href='#'></a><a href='#'></a><a href='#'></a><a href='#'></a><a href='#'></a></div>"
}
*/


$("a").click(function (){

  pod = Math.floor(Math.random() * 100) + 1;
  console.log(pod);
  if (pod % 2 == 0 && rossi < 15) {
    console.log("pari");
    $(this).addClass("no-active red"); //BONUS
    rossi += 1;
    $("#rossi").html(rossi);
  } else{
    console.log("dispari");
    $(this).addClass("no-active green"); //BONUS
    verdi += 1;
    $("#verdi").html(verdi);
  }

})
