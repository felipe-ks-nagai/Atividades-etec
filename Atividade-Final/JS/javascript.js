const currenttheme = localStorage.getItem("theme");
if (currenttheme == "dark") {
  setTimeout(() => {
    document.body.classList.toggle("dark");  
  }, 1);
}
function teste()
{

$( () => {
  document.body.classList.toggle("dark");
  let theme = "light";
  if (document.body.classList.contains("dark")) {
    theme = "dark";
  }
 localStorage.setItem("theme", theme);
});
}

function hipotenusa(){
  var cat1 = prompt("Digite um cateto");
  var cat2 = prompt("Digite o outro cateto");
  var X = 0;
  var catmul1 = 0;
  catmult1 = cat1*cat1;
  var catmul2 = 0;
  catmult2 = cat2*cat2;
  var soma = catmult1 + catmult2;
  X = Math.sqrt(soma);
  alert("A medida da hipotenusa é " + X);
}

function cateto(){
  var hip = prompt("Digite a hipotenusa");
  var cat1 = prompt("Digite um cateto");
  var X = 0;
  catmult1 = cat1*cat1;
  var hipmult = 0;
  hipmult = hip*hip;
  var soma = hipmult - catmult1;
  X = Math.sqrt(soma);
  alert("A medida do seu cateto é " + X);
}
