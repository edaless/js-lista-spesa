// Data una lista della spesa, 
// stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, 
// e poi fate lo stesso con il while (che lasciate attivo).










// dichiarazioni
let lista = ["latte", "miele", "sale", "sale", "sale", "sale", "sale", "pepe", "sale", "sale"];


let arrInnerHtml= [];
// ciclo for per costruire arrInnerHtml
// for(let i = 0; i < lista.length; i++){
//     console.log("lista[" + i + "]: " + lista[i]);
//     arrInnerHtml += [`<div class="tessera">${lista[i]}</div>`];
    
    
// };

// ciclo while per costruire arrInnerHtml
let i = 0;
while(i < lista.length){
    console.log("lista[" + i + "]: " + lista[i]);
    arrInnerHtml += [`<div class="tessera">${lista[i]}</div>`];


    i++;
};

const contenitore = document.querySelector(".container");
contenitore.innerHTML= arrInnerHtml;



















































// ciclo for console esplicativo 
// for(let i = 0; i < arr.length; i++){
//     console.log("arr[" + i + "]: " + arr[i]);

// };

// ciclo while console esplicativo 
// let i = 0;
// while(i < arr.length){
//     console.log("arr[" + i + "]: " + arr[i]);

//     i++;
// };

// backtick  ``

// for(){};

// A = document.getElementById("B").value;




// console.log("");
// for(let i = 0; i < 10; i++){

// }