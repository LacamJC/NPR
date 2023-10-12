
/*let h2 = document.querySelector('h2');*/

function success(pos) {
    console.log(pos.coords.latitude, pos.coords.longitude);

    /* h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.londitude}`; */

    var map = L.map('map').setView([pos.coords.latitude, pos.coords.longitude], 22);
    /* Esses comandos servem para que o mapa possa conseguir a nossa atual localização,
    o nome 22 é o nivel de zoom do mapa */

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);    /*Essa linha serve para criar a parte visual do nosso mapa  */

    L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(map)
        .bindPopup('Você')
        .openPopup();  /*Esse comando Serve para colocar acrecentar aquele ponto,aonde fica a nossa localização*/
}

function error(err) {
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000

});



