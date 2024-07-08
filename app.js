
/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */

let btnEncriptar = document.querySelector(".encriptar");
console.log(btnEncriptar);
let btnDesencriptar = document.querySelector(".desencriptar");
console.log(btnDesencriptar);


/* =========================================================== */
/* FUNCION PARA ENCRIPTAR EL TEXTO INGRESADO */
/* =========================================================== */
function clickEncriptar (){

    let txtInput = document.querySelector(".txtInput").value.toLowerCase();
    console.log(txtInput);

    let newTextInput ="";
    for (const char of txtInput) {
        switch(char){
            case "a":
                newTextInput += "ai";
                break;
            case "e":
                newTextInput += "enter";
                break;
            case "i":
                newTextInput += "imes";
                break;
            case "o":
                newTextInput += "ober";
                break;
            case "u":
                newTextInput += "ufat";
                break;
            default:
                newTextInput += char;
                break;
        }   
    }
    console.log(newTextInput);

    incrustarTextoParaMostrar(newTextInput);

}   

/* =========================================================== */
/* FUNCION PARA DESENCRIPTAR EL TEXTO ENCRIPTADO */
/* =========================================================== */

function clickDesencriptar (){
    let textoEncriptado = document.querySelector(".txtInput").value.toLowerCase();

/*     let textoEncriptado ="haibimesai ufatnai venterz ufatn bairqufatimestober chimesqufatimestimescober";
 */ let palabrasAReemplazar  = ["ai","enter","imes","ober","ufat"];
    let nuevasPalabras  = ["a","e","i","o","u"];
/*     let mapaDeReemplazo  = {};
 */
 
     for (let index = 0; index < palabrasAReemplazar.length; index++) {
        console.log("antes--->" + textoEncriptado);
         textoEncriptado = textoEncriptado.split(palabrasAReemplazar[index]);
         console.log("despues del split --->" + textoEncriptado);

         textoEncriptado = textoEncriptado.join(nuevasPalabras[index]);
         console.log("despues del join --->" + textoEncriptado);
     }

    incrustarTextoParaMostrar(textoEncriptado);


    // Reemplazar palabras
/*     let newStr = replaceWords(textoEncriptado, palabrasAReemplazar, nuevasPalabras);
 */    
/*     console.log(newStr); 
 */


}

/* =========================================================================== */
/* FUNCIONES PARA ORGANIZAR EL CODIGO Y SEGMENTAR */
/* =========================================================================== */

function replaceWords(str, wordsToReplace, newWords) {
    // Verificar que los arrays tengan la misma longitud
    if (wordsToReplace.length !== newWords.length) {
        throw new Error("Los arrays wordsToReplace y newWords deben tener la misma longitud");
    }

    // Reemplazar cada palabra en wordsToReplace por su correspondiente en newWords
    for (let i = 0; i < wordsToReplace.length; i++) {
        // Usar split y join para reemplazar la palabra
        str = str.split(wordsToReplace[i]).join(newWords[i]);
    }

    return str;
}

/* =========================================================================== */

function reemplazoRegex(str, wordsToReplace, newWords, mapaDeReemplazo){
    for (let i = 0; i < palabrasAReemplazar.length; i++) {
        mapaDeReemplazo[palabrasAReemplazar[i]] = nuevasPalabras[i];
        console.log(mapaDeReemplazo[palabrasAReemplazar[i]] = nuevasPalabras[i]);
        

    }
    let regex = new RegExp(palabrasAReemplazar.join('|'), 'g');
    let newStr = textoEncriptado.replace(regex, (matched) => mapaDeReemplazo[matched]);

/*     console.log(newStr); 
 */    return newStr;
}
/* =========================================================================== */

function ocultarSeccionImagen (){
    let imagenOcultar = document.querySelector(".main_mostrar_datos_imagen");
    if(imagenOcultar){
        imagenOcultar.style.display = "none";
        imagenOcultar.remove();
    }
 
    let tituloOcultar = document.querySelector(".main_mostrar_datos_titulo");
    if(tituloOcultar){
        tituloOcultar.style.display= "none";
        tituloOcultar.remove();
    }
 
    let parrafoOcultar = document.querySelector(".main_intro_datos_parrafo");
    if(parrafoOcultar){
        parrafoOcultar.style.display= "none";
        parrafoOcultar.remove();
    }
}

/* =========================================================================== */

function incrustarTextoParaMostrar(texto){

    /* OCULTAMOS IMAGEN Y TEXTO PARA INCRUSTAR EL NUEVO MENSAJE  */
    ocultarSeccionImagen ();

    /* TOMAMOS LOS CONTENEDORES QUE VAMOS A USAR */
    let contenedorTextoParaMostrar = document.querySelector(".main_intro_datos_container_texto");
    let contenedorMostrarDatos = document.querySelector(".main_mostrar_datos");

    /* CREAMOS NUEVAS ETIQUETAS */
    let parrafoTextoParaMostrar ;
    let botonCopiarParaMostrar ; 
    /* undefined */
    if(!parrafoTextoParaMostrar && !botonCopiarParaMostrar ){
        parrafoTextoParaMostrar = document.createElement("p");
        botonCopiarParaMostrar  = document.createElement("button");
    }
    /* AGREGAMOS LOS HIJOS CREADOS A LA ETIQUETA PADRE  */
    
    if(!contenedorTextoParaMostrar.contains(document.querySelector("p")) && !contenedorTextoParaMostrar.contains(document.querySelector("button"))){
        contenedorTextoParaMostrar.append(parrafoTextoParaMostrar);
        contenedorTextoParaMostrar.append(botonCopiarParaMostrar);
         /* LE ASIGNAMOS CONTENIDO A LAS ETIQUETAS */
         parrafoTextoParaMostrar.innerHTML = texto;
         botonCopiarParaMostrar.innerHTML = "Copiar";
    }else{
            /* LE ASIGNAMOS CONTENIDO A LAS ETIQUETAS */
        document.querySelector("p").innerHTML=texto;
    }


    /* EN ESTA SECCION SE LE DA ESTILO A LAS ETIQUETAS NUEVAS QUE SE CREARON */
    darEstiloEtiquetasCreadas(parrafoTextoParaMostrar, botonCopiarParaMostrar, contenedorMostrarDatos, contenedorTextoParaMostrar );

    /* EN ESTA PARTE SE AGREGA FUNCIONALIDAD AL BOTON COPIAR */


   
}

/* =========================================================================== */
/* =========================================================================== */


/* ESTA FUNCIONALIDAD CREA UN EVENTO PARA ACTUALIZAR LA ALTURA 
    DEL TEXTAREA AUTOMATICAMENTE CUANDO LAS PALABRAS A ENCRIPTAR SEAN MUY LARGAS */

document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('multiline-input');

    textarea.addEventListener('input', function () {
        // Restablece la altura para recapturar el scrollHeight
        this.style.height = 'auto';
        // Ajusta la altura al contenido actual
        this.style.height = (this.scrollHeight) + 'px';
    });

    // Llama al ajuste de altura al cargar la página para asegurar que el texto inicial (si lo hay) se ajuste
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
});
/* =========================================================================== */
/* =========================================================================== */


function darEstiloEtiquetasCreadas(parrafo, boton, contenedorGeneral, contenedorTexto ){
     /* MODIFICAMOS LOS ESTILOS DE LAS ETIQUETAS */
     boton.style = 
     "width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
     "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;";
     boton.setAttribute("onclick","copiarTexto(this)");

     contenedorGeneral.style="display : block " ;

     contenedorTexto.style = "margin: 0 ; padding : 11% ; height : 100% ;justify-content:space-between";

     parrafo.style ="font-size: 2rem ; width: 100%  ; overflow: auto;  word-wrap: break-word; ";
     parrafo.setAttribute("class","texto-para-copiar")
}

function copiarTexto(boton){

     // Selecciona el párrafo cuyo texto será copiado
     const textToCopy = document.querySelector('.texto-para-copiar').innerHTML;

     // Usa la API de Portapapeles para copiar el texto
     navigator.clipboard.writeText(textToCopy)
         .then(() => {
             // Muestra un mensaje de éxito
                // Opcional: Restablece el estilo del botón después de unos segundos
                boton.innerHTML="Copiado";
                boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                                 "border-radius: 24px ; color: #0A3871 ; background-color: #8ff799;";
                setTimeout(() => {
                    boton.innerHTML = "Copiar";
                    boton.style="width: 100% ; height: 67px ; padding: 24px ;border: 1px solid #0A3871 ;"+
                                 "border-radius: 24px ; color: #0A3871 ; background-color: #D8DFE8;"
                }, 2000); // 2000 ms = 2 segundos
            })
         .catch(err => {
             // Muestra un mensaje de error
             console.error('Error al copiar el texto: ', err);
             alert('Error al copiar el texto');
         });
}