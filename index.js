//Creators
/**
 * Juanjo Cano Gil
 * Jorge Moyano Ocaña
 * Juan Naor Kadosh Peña
 */

//Variables
var matriz = [];
var exit = false;
// Crear matriz vacía   Create an empty matrix
for (var i = 0; i < 4; i++) {
    matriz[i] = [];
    for (var j = 0; j < 4; j++) {
      matriz[i][j] = 0;
    }
  }
//Part in Common
crearMatriz();
representar();
//Part Jorge
//look for index.html file

//Part Naor
function crearMatriz(){
    let num1 = Math.floor(Math.random() * matriz.length),num2 = Math.floor(Math.random() * matriz[0].length);
    for(let i = 0;i<2;i++){
        let codigoError = 0;
        while(matriz[num1][num2]!=0){
            if(codigoError == (matriz.length*matriz[0].length)){
                console.log("Codigo de error ejecutado");
                return 0;   
            }else{
                num1 = Math.floor(Math.random() * matriz.length);
                num2 = Math.floor(Math.random() * matriz.length);
                codigoError++;
            }
        }
        matriz[num1][num2] = 2;
    }
}
function generarCelda(event){
    if(!exit && (event.keyCode == 87 || event.keyCode == 83 ||event.keyCode == 68 ||event.keyCode == 65) ){
        let num1 = Math.floor(Math.random() * matriz.length),num2 = Math.floor(Math.random() * matriz[0].length);
        let codigoError = 0;
        while(matriz[num1][num2]!=0){
            if(codigoError == (matriz.length*matriz[0].length)){
                console.log("Codigo de error ejecutado");
                return 0;   
            }else{
                num1 = Math.floor(Math.random() * matriz.length);
                num2 = Math.floor(Math.random() * matriz.length);
                codigoError++;
            }
        }
        matriz[num1][num2] = 2;
    }
}
// Ejemplo de uso
  

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
            
            caja.style.fontSize = "100px";
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
    if(!exit){
        if(event.keyCode === 87 ){  //W  key
            for(let c = 0;c<matriz.length;c++){
                for(let i = 0;i<matriz.length;i++){ 
                    for(let j = 0;j<matriz[i].length;j++){
                        if(i+1<matriz.length && (matriz[i][j]==matriz[i+1][j] || matriz[i][j] == 0)){
                            matriz[i][j] += matriz[i+1][j];
                            matriz[i+1][j] = 0;  
                            if(matriz[i][j] >= 2048){
                                exit = true;
                            }  
                        }
                    }
                }
            }
        }else if(event.keyCode === 83 ){ //S key
            for(let c = 0;c<matriz.length;c++){
                for(let i = 0;i<matriz.length;i++){
                    for(let j = 0;j<matriz[i].length;j++){
                        if(i-1>=0 && ((matriz[i][j] == matriz[i-1][j] || matriz[i][j] == 0))){
                            matriz[i][j] += matriz[i-1][j];
                            matriz[i-1][j] = 0;
                            if(matriz[i][j] >= 2048){
                                exit = true;
                            }
                        }
                    }
                }
            }
        }else if(event.keyCode === 68 ){ //D   key
            for(let c = 0;c<matriz.length;c++){     //Inneficient code, this should be improved 
                for(let i = 0;i<matriz.length;i++){
                    for(let j = 0;j<matriz[i].length;j++){
                        if(j-1>=0 && (matriz[i][j] == matriz[i][j-1] || matriz[i][j] == 0)){
                            matriz[i][j] += matriz[i][j-1];
                            matriz[i][j-1] = 0;
                            if(matriz[i][j] >= 2048){
                                exit = true;
                            }
                        }
                    }
                }
            }
        }else if(event.keyCode === 65 ){ //A  key
            for(let c = 0;c<matriz.length;c++){
                for(let i = 0;i<matriz.length;i++){
                    for(let j = 0;j<matriz[i].length;j++){
                        if(j+1<matriz.length && (matriz[i][j]==matriz[i][j+1] || matriz[i][j] == 0)){
                            matriz[i][j] += matriz[i][j+1];
                            matriz[i][j+1] = 0;
                            if(matriz[i][j] >= 2048){
                                exit = true;
                            }
                        }
                    }
                }
            }
        }else{
            console.log("Tecal incorrecta"); //incorect key pressed
        }
        if(exit){
            alert("WELL DONE, YOU WIN !!!");
        }
    }
}

 
// Asignar el evento a la ventana    Asign the event to a specific function
window.addEventListener("keydown", comprobarLaterales);
window.addEventListener("keyup",generarCelda);
window.addEventListener("keyup",representar);
