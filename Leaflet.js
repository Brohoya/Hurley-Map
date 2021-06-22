
const ecoles = [
	{"nom": "Pukas Surf Club San Sebastien", "adresse": ["Zurriola Hiribidea, 24, 20002 Donostia, Gipuzkoa, Espagne"], "site": "https://pukassurf.com/"},
	{"nom": "Pukas Surf Club Zarautz", "adresse": ["Lizardi Kalea, 9, 20800 Zarautz, Gipuzkoa, Espagne"], "site": "https://pukassurf.com/"},
	{"nom": "ByTheWave", "adresse": ["619 Bis Avenue des Artisans, 40150 Soorts-Hossegor, France"], "site": "https://bythewave.surf/"},
	{"nom": "Darrigood Surf School", "adresse": ["Plage de la Gravière, 40150 Soorts-Hossegor, France"], "site": "https://ecoledesurf.com/hossegor/"},
	{"nom": "Bréti Surf School", "adresse": ["Plage des dunes, Bretignolles-sur-Mer, 1 Avenue des Dunes, 85470, France"], "site": "https://www.breti-surfschool.com/"},
	{"nom": "Fitenia Surf Shop", "adresse": ["Av. Ángel Guimerá, 13, 38003 Santa Cruz de Tenerife, Espagne"], "site": "https://www.fiteniasurfshop.es/"},
	{"nom": "Hossegor Surf Center", "adresse": ["Plage Naturiste, Bouldevard du Front de Mer, 40150 Soorts-Hossegor, France"], "site": "https://www.hossegorsurfcenter.com/"},
	{"nom": "MSC-SURFCOACHING & PERFORMANCE SURF CENTER", "adresse": ["2 Boulevard de l'Océan, 56270 Ploemeur, France"], "site": "https://www.msc-surfcoaching.com/accueil"},
	{"nom": "SURF EVOLUTION", "adresse": ["1 plage des Casernes, 40510 Seignosse, France"], "site": "https://www.surfevolution.fr/"},
	{"nom": "Ecole de Surf Océan Expérience", "adresse": ["1 Place du Général de Gaulle, 33680 Lacanau, France"], "site": "https://www.ecoledesurf-lacanau.com/"},
	{"nom": "Ecole de Surf TAKE OFF", "adresse": ["23 Route du Jard, 17370 Le Grand-Village-Plage"], "site": "https://ecole-take-off.com/"},
	{"nom": "TAKE Surf School", "adresse": ["Paseo Maritimo, Playa, s/n, 11159 El Palmar de Vejer, Cádiz, Espagne"], "site": "https://takesurfelpalmar.com/"},
	{"nom": "Mission Surf School", "adresse": ["PO-308, 36990, Pontevedra, Espagne"], "site": "https://missionsurfshop.com/"},
	{"nom": "Surf School BuenaOnda", "adresse": ["Av. Francisco Giner de los Ríos, 48, 39540 San Vicente de la Barquera, Cantabria, Espagne"], "site": "https://escueladesurfbuenaonda.com/"},
	{"nom": "Surfing Life Club", "adresse": ["Av. Gen. Norton de Matos 378, 4450-208 Matosinhos, Portugal"], "site": "https://www.surfinglifeclub.com/en/"},
	{"nom": "Rebels Tarifa Kitesurfing School", "adresse": ["C. Coronel Francisco Valdés, 4, 11380 Tarifa, Cádiz, Espagne"], "site": "https://www.rebelstarifa.com/fr/kitesurf-a-tarifa/"},
	{"nom": "City Wave", "adresse": ["Machtlfinger Str. 21, 81379 München, Allemagne"], "site": "https://citywave.de/fr/"},
];

var mymap = L.map('map');

var iconNormal = L.icon({
	iconUrl: "Images/hurleyLogo.png",
	iconSize:[50,64.5],
	shadowSize:[50,64.5],
	iconAnchor:[25,64.5],
	popupAnchor:[0,-64.5]
})

 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 15,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
}).addTo(mymap);


/*         MAP PLUS STYLE MAIS FLOU JE SAIS PAS PK
L.tileLayer('https://tile.thunderforest.com/mobile-atlas/{z}/{x}/{y}.png?apikey=7c3deec0b04f45cba938953edeb89770', {
		maxZoom: 15,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox/streets-v11',
		tileSize: 512,
		zoomOffset: -1
}).addTo(mymap);
*/

var popup = L.popup();
var view=[46.918797, 2.427992];
var zoom=5;
mymap.setView(view,zoom);


function afficherMarker(nom, adresse, site) {
	L.esri.Geocoding.geocode({requestParams:{maxLocations:1}}).text(adresse).run((error,results) => {
		L.marker([results.results[0].latlng.lat,results.results[0].latlng.lng],{icon: iconNormal})
		.addTo(mymap)
		.bindPopup("<b>Ecole de surf : </b>" + nom + "<br>" + "<b>Site Web : </b><a href='" + site + "' target='_blank'>" + site + "</a>")
	})
}

for (let i = 0; i < ecoles.length; i++) {
	afficherMarker(ecoles[i].nom, ecoles[i].adresse[0], ecoles[i].site)
}