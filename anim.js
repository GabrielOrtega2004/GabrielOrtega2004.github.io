// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Voy a bajar del cielo una constelación, que haga brillar esos ojitos con amor", time: 17 },
  { text: "Para que, hasta el final sepas que aquí yo voy a estar y si algún día una estrella se llega a apagar", time: 27 },
  { text: "Voy a encontrar otra razón pa' que vuelvas a sonreír tu corazón ya está cansado de sufrir", time: 35 },
  { text: "Buscando a quien amar, buscando a alguien para sentir, alguien con quien soñar soñar antes de ir a dormir", time: 46 },
  { text: "Y si me lo preguntas, nada dura para siempre, pero es más que suficiente una vida contigo, amor", time: 57 },
  { text: "Si un día no estamos juntos, y dudas de lo que sientes, O te sientes diferente, solo escucha esta canción", time: 66.5 },
  { text: "Recuérdame, aquí estaré yo", time: 76.5 },
  { text: "Voy a guardar dinero bajo mi colchón para comprar una casita pa' los dos, donde quepa tu amor", time: 83 },
  { text: "Donde quepa cada ilusión, que nos haga sentir que apenas viene lo mejor", time: 96 },
  { text: "Voy a esperar, voy a esperarte si me voy, Si ya no puedo estar para cuidar nuestro rincón, No tendrás que llorar", time: 101},
  { text: "Tus lágrimas se acabarán, de tanto sonreír hasta llorar de la emoción", time: 116 },
  { text: "Y si me lo preguntas, nada dura para siempre Pero es más que suficiente una vida contigo, amor", time: 121.5 },
  { text: "Si un día no estamos juntos, y dudas de lo que sientes O te sientes diferente, solo escucha esta canción", time: 133 },
  { text: "Recuérdame, aquí estaré yo....", time: 144 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 10
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);