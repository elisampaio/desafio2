//APAGAR OS h2: eliminando o texto
// for(let i = 0; i < 6; i++){
//   document.querySelectorAll("h2")[i].innerHTML = "";
// }

//APAGAR OS h2: utilizando o display
for(let i = 0; i < 6; i++){
  document.querySelectorAll("h2")[i].style.display = "none";
}

//APAGAR OS h2: retirando-os da página : Não sei porque não está a funcionar(?)
// for(let i = 0; i < 6; i++){
//   let subtitles = document.querySelectorAll("h2")[i];
//   subtitles.remove();
// }

// APAGAR O h1: retirando-o da página
let title = document.querySelector("h1");
title.remove();

// ADICIONAR UM LINK
let newLink = document.createElement('a');
let target = document.querySelector('header>nav');
target.appendChild(newLink);

newLink.innerHTML = "FBAUP";
newLink.setAttribute( "href", "https://www.fba.up.pt/" );

//ALTERAR O CSS:
//Côr de fundo - tentativa falhada porque a côr no CSS está definida com uma variável
// document.querySelector('body').style.backgroundColor = "RebeccaPurple";

// Solução encontrada em: https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript
document.documentElement.style.setProperty('--main-bg-color', 'RebeccaPurple');

//CSS da secção about + footer
//(Existe alguma forma de fazer as alterações todas juntas??)
document.querySelector('#about').style.color = 'white';
document.querySelector('#about').style.textAlign = 'center';
document.querySelector('#about').style.fontSize = '15px';
document.querySelector('#about').style.lineHeight = '22px';
document.querySelector('#about').style.marginTop = '10px';

for(let i = 0; i < 2; i++){
document.querySelectorAll('#about>article>p')[i].style.fontFamily = 'Roboto, sans-serif';
document.querySelectorAll('#about>article>p')[i].style.fontWeight = '300';
document.querySelectorAll('#about>article>p')[i].style.fontSize = '13.5px';
}

document.querySelector('footer').style.color = 'white';
