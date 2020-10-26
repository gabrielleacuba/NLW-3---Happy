//create map
const map = L.map("mapid").setView([-23.5614378, -46.6592714], 16);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [48, 48],
  iconAnchor: [29, 68],
});

let marker;
//create and add marker
map.on("click", (event) => {
  const latitude = event.latlng.lat;
  const longitude = event.latlng.lng;

  document.querySelector("[name=lat]").value = latitude;
  document.querySelector("[name=lng]").value = longitude;
  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([latitude, longitude], { icon }).addTo(map);
});

//campo fotos
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-upload");
  //realizar o clone da última imagem adiciona.
  const cloneFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);

  //verificar se o campo está vazio, se sim, não adicionar o container de fotos.
  const input = cloneFieldContainer.children[0];

  //limpar o campo da imagem
  if (input.value === "") {
    return;
  }

  input.value = "";
  //adicionar o clone ao container de #images
  container.appendChild(cloneFieldContainer);
}

function removePhotoField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    //limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  //deletar o campo
  span.parentNode.remove();
}

//select yes or no
function toggleButton(event) {
  //retirar a class .ative
  document.querySelectorAll(".button-select button").forEach((button) => {
    button.classList.remove("active");
  });

  //colocar a class .active no botao clicado
  const button = event.currentTarget;
  button.classList.add("active");

  //atualizar input hidden com o valor selecionar
  const input = document.querySelector('[name="open_on_weekends"]');
  input.value = button.dataset.value;
}
