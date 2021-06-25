<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS et Font -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
    <!-- <link rel="stylesheet" href="styleux.css"> -->
    <link rel="stylesheet" href="style.css">
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

    <!-- Icones -->
    <script src="https://kit.fontawesome.com/bb701bc569.js" crossorigin="anonymous"></script>

    <title>Map</title>
</head>
<body data-gr-c-s-loaded="true">
	<div class="container">
        <!-- <nav class="nav-desktop">
                <div class="logo">
                    <img src="Images/hurleyLogoNavBar.svg" class="lgo">
                    <a href="http://localhost/PFR/index.html">Hurley Surf Club Europe</a>
                </div>
                <ul class="menu-items">
                    <li>
                        <div class="login"><a href="http://localhost/PFR/acheter.html" class="btn">&nbsp; <i class="fas fa-sign-in-alt"></i> LOGIN &nbsp;</a></div>
                    </li>   
                </ul>
        </nav> -->

        <nav class="navbar">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="Images/hurleyLogoNavBar.svg" alt="" width="30" height="30" class="d-inline-block align-text-top"> Hurley Surf Club Europe
                </a>

                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbar">
                    <button class="btn btn-dark"> LOGIN</button>
                </div>
                    
                
            </div>
        </nav>


        <div class="row my-custom-row justify-content-between">
            <div id='map' class="col-sm-7"> </div>
            <div class="col-sm-4">
                <div class="research-container style="overflow: auto">
                    <table>
                        <thead>
                            <tr><th>Country</th><th colspan="2">HSC List</th></tr>
                        </thead>
                        <tbody id="listeEcoles"></tbody>
                    </table>
                </div>
            </div>
        </div>

	</div>
    
    <script type="text/javascript" src="Leaflet.js"> </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>

</html>