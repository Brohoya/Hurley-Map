
const ecoles = [
	{"nom": "City Wave", "adresse": ["Machtlfinger Str. 21, 81379 München, Allemagne"], "site": "https://citywave.de/fr/"},
	{"nom": "Pukas Surf Club San Sebastien", "adresse": ["Zurriola Hiribidea, 24, 20002 Donostia, Gipuzkoa, Espagne"], "site": "https://pukassurf.com/"},
	{"nom": "Pukas Surf Club Zarautz", "adresse": ["Lizardi Kalea, 9, 20800 Zarautz, Gipuzkoa, Espagne"], "site": "https://pukassurf.com/"},
	{"nom": "TAKE Surf School", "adresse": ["Paseo Maritimo, Playa, 11159 El Palmar de Vejer, Cádiz, Espagne"], "site": "https://takesurfelpalmar.com/"},
	{"nom": "Mission Surf School", "adresse": ["PO-308, 36990, Pontevedra, Espagne"], "site": "https://missionsurfshop.com/"},
	{"nom": "Surf School BuenaOnda", "adresse": ["Av. Francisco Giner de los Ríos, 48, 39540 San Vicente de la Barquera, Cantabria, Espagne"], "site": "https://escueladesurfbuenaonda.com/"},
	{"nom": "Rebels Tarifa Kitesurfing School", "adresse": ["C. Coronel Francisco Valdés, 4, 11380 Tarifa, Cádiz, Espagne"], "site": "https://www.rebelstarifa.com/fr/kitesurf-a-tarifa/"},
	{"nom": "Fitenia Surf Shop", "adresse": ["Av. Ángel Guimerá, 13, 38003 Santa Cruz de Tenerife, Espagne"], "site": "https://www.fiteniasurfshop.es/"},
	{"nom": "ByTheWave", "adresse": ["Camping les Cigales, Avenue de l\\'Océan, 40660 Moliets-Plage, France"], "site": "https://bythewave.surf/"},
	{"nom": "Darrigood Surf School", "adresse": ["Plage de la Gravière, 40150 Soorts-Hossegor, France"], "site": "https://ecoledesurf.com/hossegor/"},
	{"nom": "Bréti Surf School", "adresse": ["Plage des dunes, Bretignolles-sur-Mer, 1 Avenue des Dunes, 85470, France"], "site": "https://www.breti-surfschool.com/"},
	{"nom": "Hossegor Surf Center", "adresse": ["Plage Naturiste, Bouldevard du Front de Mer, 40150 Soorts-Hossegor, France"], "site": "https://www.hossegorsurfcenter.com/"},
	{"nom": "MSC-SurfCoaching", "adresse": ["2 Boulevard de l\\'Océan, 56270 Ploemeur, France"], "site": "https://www.msc-surfcoaching.com/accueil"},
	{"nom": "SURF EVOLUTION", "adresse": ["1 plage des Casernes, 40510 Seignosse, France"], "site": "https://www.surfevolution.fr/"},
	{"nom": "Ecole de Surf Océan Expérience", "adresse": ["1 Place du Général de Gaulle, 33680 Lacanau, France"], "site": "https://www.ecoledesurf-lacanau.com/"},
	{"nom": "Ecole de Surf TAKE OFF", "adresse": ["23 Route du Jard, 17370 Le Grand-Village-Plage, France"], "site": "https://ecole-take-off.com/"},
	{"nom": "Surfing Life Club", "adresse": ["Av. Gen. Norton de Matos 378, 4450-208 Matosinhos, Portugal"], "site": "https://www.surfinglifeclub.com/en/"},
];

var mymap = L.map('map');
var markerGroup = L.layerGroup().addTo(mymap)
const liste = document.getElementById('listeEcoles');

var iconNormal = L.icon({
	iconUrl: "Images/hurleyLogo.png",
	iconSize:[50,64.5],
	shadowSize:[50,64.5],
	iconAnchor:[25,64.5],
	popupAnchor:[0,-64.5]
})

var iconHightlight = L.icon({
	iconUrl: "Images/hurleyHighlight.png",
	iconSize:[50,64.5],
	shadowSize:[50,64.5],
	iconAnchor:[25,64.5],
	popupAnchor:[0,-64.5]
})

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 15,
		minZoom: 3,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
}).addTo(mymap);

var popup = L.popup();
var view=[46.918797, 2.427992];
var zoom=5;
mymap.setView(view,zoom);

function afficherMarker(nom, adresse, site) {
	setTimeout(function(){ mymap.invalidateSize(true)}, 0);
	L.esri.Geocoding.geocode({requestParams:{maxLocations:1}}).text(adresse).run((error,results) => {
		L.marker([results.results[0].latlng.lat,results.results[0].latlng.lng],{icon: iconNormal})
		.addTo(markerGroup)
		.bindPopup("<b>Ecole de surf : </b>" + nom + "<br>" + "<b>Site Web : </b><a href='" + site + "' target='_blank'>" + site + "</a>")
	})
}

function zoomer(nom, adresse, site) {
	markerGroup.clearLayers();
	for (let i = 0; i < ecoles.length; i++) {if(ecoles[i].adresse[0] != adresse) {afficherMarker(ecoles[i].nom, ecoles[i].adresse[0], ecoles[i].site)}};
	setTimeout(function(){ mymap.invalidateSize(true)}, 0);
	L.esri.Geocoding.geocode({requestParams:{maxLocations:1}}).text(adresse).run((error,results) => {
		view=[results.results[0].latlng.lat, results.results[0].latlng.lng];
		zoom=12;
		mymap.flyTo(view, zoom, {"animate": true, "duration": 3});
		L.marker([results.results[0].latlng.lat,results.results[0].latlng.lng],{icon: iconHightlight})
		.addTo(markerGroup)
		.bindPopup("<b>Ecole de surf : </b>" + nom + "<br>" + "<b>Emplacement : </b>" + adresse + "<br>" + "<b>Site Web : </b><a href='" + site + "' target='_blank'>" + site + "</a>")
		.openPopup()
	}).catch((e) => console.log("Erreur : ",e))
}

for (let i = 0; i < ecoles.length; i++) {
	liste.innerHTML += `<tr><td>` + ecoles[i].adresse[0].split(',')[ecoles[i].adresse[0].split(',').length-1] + `</td><td cellpadding="0" cellspacing="0">` + ecoles[i].nom + `</td><td><button onclick="zoomer('` + ecoles[i].nom + `','` + ecoles[i].adresse[0] + `','` + ecoles[i].site + `')">Go</button></td></tr>`;
	afficherMarker(ecoles[i].nom, ecoles[i].adresse[0], ecoles[i].site);
	console.log(ecoles[i].nom, ecoles[i].adresse[0], ecoles[i].site);
}