const photos = ["src/img/perfil.jpeg"];

let currentIndex = 0;
const photoElement = document.getElementById("photo");

function changePhoto() {
  photoElement.classList.add("fade-out");
  setTimeout(() => {
    photoElement.src = photos[currentIndex];
    photoElement.classList.remove("fade-out");
    currentIndex = (currentIndex + 1) % photos.length;
  }, 1000);
}

changePhoto();

setInterval(changePhoto, 99999999);

const musica = document.getElementById("musica");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

// Define a posição de início assim que os metadados forem carregados
musica.addEventListener("loadedmetadata", () => {
  musica.currentTime = 102;
});

playButton.addEventListener("click", () => {
  // Garante que sempre vá para 102 se ainda não tocou
  if (musica.currentTime < 102) {
    musica.currentTime = 102;
  }

  musica.play();
  playButton.disabled = true;
  pauseButton.disabled = false;
});

pauseButton.addEventListener("click", () => {
  musica.pause();
  playButton.disabled = false;
  pauseButton.disabled = true;
});
