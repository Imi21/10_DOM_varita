let enlace = document.getElementsByTagName('a');

function noClick(e){
    e.preventDefault();
}   

// event.preventDefault;
// Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.


// for ([expresion-inicial]; [condicion]; [expresion-final])sentencia  
for( let n = 0; n < enlace.length; n++){
    enlace[n].addEventListener("click", noClick); 
};




let magia = document.getElementsByTagName("img");
   
for (let n = 0; n < magia.length; n++){
    magia[n].addEventListener("click", funcion => magia[n].src="./assets/magic-6.gif");
};



let colorText = document.getElementsByTagName("p");

for (let n = 0; n < colorText.length; n++){colorText[n].addEventListener("click", funcion => {colorText[n].style.backgroundColor="blue";
colorText[n].style.color="yellow"})
}




let bckSection = document.getElementsByTagName("section");

for (let n = 0; n < bckSection.length; n++){
    bckSection[n].addEventListener("click", funcion => {bckSection[n].style.backgroundColor="grey"})
}



let hoverThings = document.getElementsByTagName("img");

for (let n = 0; n < hoverThings.length; n++){
    hoverThings[n].addEventListener("mouseenter", funcion => {hoverThings[n].src="./assets/abracadabra.gif"})
}



let hoverArticle = document.getElementsByTagName("article");

for (let n = 0; n < hoverArticle.length; n++){
    hoverArticle[n].addEventListener("mouseenter", funcion => {hoverArticle[n].style.backgroundColor="purple"})
}


let hoverParagraf = document.getElementsByTagName("p");

for (let n = 0; n < hoverParagraf.length; n++){
    hoverParagraf[n].addEventListener("mouseenter", funcion => {hoverParagraf[n].style.backgroundColor="green";
     hoverParagraf[n].style.color="pink"   })
}




