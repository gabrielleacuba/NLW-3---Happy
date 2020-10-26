//create map
const map = L.map("mapid").setView([-23.5614378, -46.6592714], 16);

//create and add titleLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id,name,latitude,longitude}) {
  //create popup
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg"></a>`,
  );

  L.marker([latitude, longitude], { icon: icon })
    .addTo(map)
    .bindPopup(popup);
}

const orphanageSpan = document.querySelectorAll('.orphanages span')

orphanageSpan.forEach((item) => {
  const orphanageItem = {
    id: item.dataset.id,
    name: item.dataset.name,
    latitude: item.dataset.latitude,
    longitude: item.dataset.longitude,
  }

  console.log(orphanageItem)
  addMarker(orphanageItem)
})