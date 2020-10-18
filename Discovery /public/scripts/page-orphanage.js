const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
}

//create map
const map = L.map("mapid", options).setView([-23.5614378, -46.6592714], 16);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
});



L.marker([-23.5614378, -46.6592714], {icon: icon})
  .addTo(map)

function selectImage(event){
  //botão clicado
  const button = event.currentTarget

  //remover todas as classes active
  const buttons = document.querySelectorAll(".images button")
  
  buttons.forEach((item) => {
    item.classList.remove("active")
  })

  //selecionar a imagem clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img")

  //atualizar o container de imagens
  imageContainer.src = image.src

  //adicionar a classe .active para o botão que foi clicado
  button.classList.add('active')
}