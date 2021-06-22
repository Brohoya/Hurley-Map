<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS et Font -->
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <link rel="stylesheet" href="styleux.css">
    <link rel="icon" href="Images/hurleyIcone.png">

    <!-- Librairie Leaflet -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin="" />
    <script src="js/leaflet-providers.js"></script>
    <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" crossorigin=""></script>


    <!-- Esri Leaflet -->
    <script src="https://unpkg.com/esri-leaflet@2.2.3/dist/esri-leaflet.js" integrity="sha512-YZ6b5bXRVwipfqul5krehD9qlbJzc6KOGXYsDjU9HHXW2gK57xmWl2gU6nAegiErAqFXhygKIsWPKbjLPXVb2g==" crossorigin=""></script>


    <!-- Esri Leaflet Geocoder -->
    <link rel="stylesheet" href="https://unpkg.com/esri-leaflet-geocoder@2.2.13/dist/esri-leaflet-geocoder.css" integrity="sha512-v5YmWLm8KqAAmg5808pETiccEohtt8rPVMGQ1jA6jqkWVydV5Cuz3nJ9fQ7ittSxvuqsvI9RSGfVoKPaAJZ/AQ==" crossorigin="">
    <script src="https://unpkg.com/esri-leaflet-geocoder@2.2.13/dist/esri-leaflet-geocoder.js" integrity="sha512-zdT4Pc2tIrc6uoYly2Wp8jh6EPEWaveqqD3sT0lf5yei19BC1WulGuh5CesB0ldBKZieKGD7Qyf/G0jdSe016A==" crossorigin=""></script>

    <!-- Script PINCODE -->
    <script src="pincode.js"></script>

    <!-- Icones -->
    <script src="https://kit.fontawesome.com/bb701bc569.js" crossorigin="anonymous"></script>

    <title>Map</title>
</head>
<body>
	<div class="wrapper">
        <nav class="nav-desktop">
                <div class="logo">
                    <img src="Images/hurleyLogoNavBar.svg" class="lgo">
                    <a href="http://localhost/PFR/index.html">Hurley Surf Schools</a>
                </div>
                <ul class="menu-items">
                    <li>
                        <a href="http://localhost/PFR/index.html#projet">Presentation</a>
                    </li>
                    <li>
                        <a href="http://localhost/PFR/index.html#equipe">Team</a>
                    </li>
                    <li>
                        <a href="http://localhost/PFR/index.html#telecharger">Download</a>
                    </li>
                    <li>
                        <div class="login"><a href="http://localhost/PFR/acheter.html" class="btn">&nbsp; <i class="fas fa-sign-in-alt"></i> LOGIN &nbsp;</a></div>
                </ul>
        </nav>

        <div class="container">
            <div id='map' class="map-container"> </div>
            <div class="research-container">
                <table>
                    <thead>
                        <tr><th colspan="2">Hurley school list</th></tr>
                    </thead>
                    <tbody id="listeEcoles"></tbody>
                </table>
            </div>
        </div>

	</div>
    
    <script type="text/javascript" src="Leaflet.js"> </script>
</body>

</html>