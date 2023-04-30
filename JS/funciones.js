/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
/*variables*/
let area= document.querySelector(".area")
let encriptar= document.querySelector(".encriptar")
let desencriptar= document.querySelector(".desencriptar")
let mensaje= document.querySelector(".mensaje")
let copiar= document.querySelector(".copiar")
let escuchar= document.querySelector(".escuchar")

/*cursos en la entrada de texto*/
area.focus()

/*funciones*/
function validarEntrada(texto) {
    let regex= /[a-z\ñ\s]+$/ /*expresión regular*/
    if (regex.test(texto)) {
        return area.value
    }
    else {
        return alert("Solo letras minúsculas y sin acentos")
    }
}
function encriptarTexto() {
    let texto= validarEntrada(area.value)
    area.focus()
    let encriptado= texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat")
    mensaje.value= encriptado
}
function desencriptarTexto() {
    let texto= area.value
    let desencriptado= texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u")
    mensaje.value= desencriptado
}
function copiarTexto() {
    let texto= mensaje.value
    navigator.clipboard.writeText(texto)
    mensaje.value= ""
    let area= document.querySelector(".area")
    area.value= ""
    area.focus()
    pegarTexto()
}
function pegarTexto() {
    navigator.clipboard.readText().then(texto => {
        area.value= texto
    })
}
function reproducir() {
    let texto= mensaje.value
    /*crear nueva solicitud de voz*/
    let voz= new SpeechSynthesisUtterance()
    voz.text= texto
    voz.lang= "es-Es"
    /*activar síntesis de voz*/
    window.speechSynthesis.speak(voz)
}



/*llamar función*/
encriptar.onclick= encriptarTexto
desencriptar.onclick= desencriptarTexto
copiar.onclick= copiarTexto
escuchar.onclick= reproducir

/* CONSOLA DE  ENCRIPTACION*/

var canvas = document.getElementById('canvas');
                            var context = canvas.getContext('2d');
                            var W = window.innerWidth;
                            var H = window.innerHeight;

                            canvas.width = W;
                            canvas.height = H;

                            var fontSize = 15;
                            var columns = Math.floor(W / fontSize);
                            var drops = [];
                            for(var i=0; i<columns; i++){
                                drops.push(0);
                            }
                            var str = "JavaScript Hacking Effect";
                            function draw(){
                                context.fillStyle = "rgba(0,0,0,0.05)";
                                context.fillRect(0, 0, W, H);
                                context.fontSize = "700 " + fontSize + "px";
                                context.fillStyle = "#00cc33";
                                for(var i=0; i<columns; i++){
                                    var index = Math.floor(Math.random()*str.length);
                                    var x = i * fontSize;
                                    var y = drops[i] * fontSize;
                                    context.fillText(str[index], x, y);
                                    if(y >= canvas.height && Math.random() > 0.99){
                                        drops[i] = 0;
                                    }
                                    drops[i]++;
                                }
                            }
                            draw();
                            setInterval(draw, 35);
/*INGPATO*/               