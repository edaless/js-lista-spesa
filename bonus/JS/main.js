// Data una lista della spesa, 
// stampare sulla pagina gli elementi della lista individualmente con un ciclo for che poi commentate, 
// e poi fate lo stesso con il while (che lasciate attivo).


// dichiarazioni
let lista = ["latte", "miele", "sale",  "pepe"];
const contenitore = document.querySelector(".container");


// ciclo for
// for(let i = 0; i < lista.length; i++){
//     contenitore.innerHTML += `<div class="tessera">${lista[i]}</div>`;  
// };

// ciclo while
let i = 0;
while(i < lista.length){
    contenitore.innerHTML += `<div class="tessera">${lista[i]}</div>`;

    i++;
};



const button = document.querySelector("button");
const newElement = document.getElementById("newElement");


button.addEventListener("click",
    function(){

        // if che serve per far sì che non vada a capo quando clicco il tasto con niente scritto
        if(newElement.value != ""){            
            contenitore.innerHTML += `<div class="tessera">${newElement.value}</div>`;
            
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