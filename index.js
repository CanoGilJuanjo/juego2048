//Creators
/**
 * Juanjo Cano Gil
 * Jorge Moyano Ocaña
 * Juan Naor Kadosh Peña
 */

//Variables
var matriz = [];
// Crear matriz vacía   Create an empty matrix
for (var i = 0; i < 4; i++) {
    matriz[i] = [];
    for (var j = 0; j < 4; j++) {
      matriz[i][j] = 0;
    }
  }
//Part Common
crearMatriz();
representar();
//Part Jorge

//Part Naor

function crearMatriz() {
    // Generar posiciones aleatorias    Generate random positions 
    var posicion1 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
    var posicion2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];

    // Asegurarse de que las posiciones sean diferentes     Be sure the positions are diferents
    while (posicion1[0] === posicion2[0] && posicion1[1] === posicion2[1]) {
        posicion2 = [Math.floor(Math.random() * 4), Math.floor(Math.random() * 4)];
    }

    // Asignar el número "2" a las posiciones aleatorias    Put the numbers 2 on random positions
    matriz[posicion1[0]][posicion1[1]] = 2;
    matriz[posicion2[0]][posicion2[1]] = 2;
} 

//Part Juanjo
//represent the matrix on the display
function representar(){
    for(let i = 0;i<matriz.length;i++){
        for(let j = 0;j<matriz[i].length;j++){
            let caja = document.getElementById(`fila${(i+1)}columna${(j+1)}`);
            if(matriz[i][j]<10){
                caja.innerText = "0"+matriz[i][j];
            }else{
                caja.innerText = matriz[i][j];
            }
            
            if(matriz[i][j] == 0){
                caja.style.backgroundColor = "rgb(163,160,160)";
                caja.style.color = "rgb(163,160,160)";
            }else if(matriz[i][j] == 4){
                caja.style.backgroundColor = "rgb(222,222,193)";
                caja.style.color = "white";
            }else if(matriz[i][j] == 8){
                caja.style.backgroundColor = "lightsalmon";
                caja.style.color = "white";
            }else if(matriz[i][j] == 16){
                caja.style.backgroundColor = "orange";
                caja.style.color = "white";
            }else if(matriz[i][j] == 2){
                caja.style.backgroundColor = "white";
                caja.style.color = "black";
            }else if(matriz[i][j] ==32){
                caja.style.backgroundColor = "rgb(181,107,107)";
                caja.style.color = "white";
            }else if(matriz[i][j] ==64){
                caja.style.backgroundColor = "red";
                caja.style.color = "white";
            }else{
                caja.style.backgroundColor = "rgb(194,194,128)";
                caja.style.color = "white";
                caja.style.fontSize = "50px";
            }
        }
    }
}

function comprobarLaterales(event){
    //Movimiento 
    if(event.keyCode === 87 ){  //W     necesita arreglo
        for(let i = 0;i<matriz.length;i++){ 
            for(let j = 0;j<matriz[i].length;j++){
                if(i+1<matriz.length && (matriz[i][j]==matriz[i+1][j] || matriz[i][j] == 0)){
                    matriz[i][j] += matriz[i+1][j];
                    matriz[i+1][j] = 0;
                }
            }
        }
    }else if(event.keyCode === 83 ){ //S
        for(let i = 0;i<matriz.length;i++){
            for(let j = 0;j<matriz[i].length;j++){
                if(i-1>=0 && ((matriz[i][j] == matriz[i-1][j] || matriz[i][j] == 0))){
                    matriz[i][j] += matriz[i-1][j];
                    matriz[i-1][j] = 0;
                }
            }
        }
    }else if(event.keyCode === 68 ){ //D   
        for(let i = 0;i<matriz.length;i++){
            for(let j = 0;j<matriz[i].length;j++){
                if(j-1>=0 && (matriz[i][j] == matriz[i][j-1] || matriz[i][j] == 0)){
                    matriz[i][j] += matriz[i][j-1];
                    matriz[i][j-1] = 0;
                }
            }
        }
    }else if(event.keyCode === 65 ){ //A  necesita arreglo
        for(let i = 0;i<matriz.length;i++){
            for(let j = 0;j<matriz[i].length;j++){
                if(j+1<matriz.length && (matriz[i][j]==matriz[i][j+1] || matriz[i][j] == 0)){
                    matriz[i][j] += matriz[i][j+1];
                    matriz[i][j+1] = 0;
                }
            }
        }
    }else{
        console.log("Tecal incorrecta");
    }
}

 
// Asignar el evento a la ventana
window.addEventListener("keydown", comprobarLaterales);
window.addEventListener("keyup",crearMatriz);
window.addEventListener("keyup",representar);
