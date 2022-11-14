// Data una lista della spesa, 
// stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, 
// e poi fate lo stesso con il while (che lasciate attivo).










// dichiarazioni
let lista = ["latte", "miele", "sale",  "pepe",];


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


const button = document.querySelector("button");
const newElement = document.getElementById("newElement");


button.addEventListener("click",
    function(){
        // if che serve per far sì che non vada a capo quando clicco il tasto con niente scritto
        if(newElement.value != ""){

            // incremento l'array con il div con scritto il nuovo elemento
            arrInnerHtml += [`<div class="tessera">${newElement.value}</div>`];
            // ricopio l'array aggiornato nell'inner del container
            contenitore.innerHTML= arrInnerHtml;


            // cancello ciò che c'è scritto nell'input
            newElement.value = "";

        };
        
    }
);













































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