//create map
const map = L.map("mapid").setView([-23.5614378, -46.6592714], 16);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170,2]
});

//create popup
const popup = L.popup({
  closeButton:false,
  className:"map-popup",
  minWidth:240,
  minHeight:240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"></a>')

L.marker([-23.5614378, -46.6592714], {icon: icon})
  .addTo(map)
  .bindPopup(popup)
