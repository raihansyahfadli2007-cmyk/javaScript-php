<?php

// Input koordinat Jakarta
$longitudeJakarta = 106.8456;
$latitudeJakarta = -6.2088;

// Input koordinat Surabaya
$longitudeSurabaya = 112.7508;
$latitudeSurabaya = -7.2575;

// Radius bumi dalam kilometer
$R = 6371;

// Konversi derajat ke radian
$lat1 = deg2rad($latitudeJakarta);
$lat2 = deg2rad($latitudeSurabaya);

$deltaLat = deg2rad($latitudeSurabaya - $latitudeJakarta);
$deltaLon = deg2rad($longitudeSurabaya - $longitudeJakarta);

// Rumus Haversine
$a = sin($deltaLat / 2) ** 2 +
     cos($lat1) * cos($lat2) *
     sin($deltaLon / 2) ** 2;

$c = 2 * atan2(sqrt($a), sqrt(1 - $a));

$jarak = $R * $c;

// Output
echo "=== JARAK JAKARTA - SURABAYA ===<br>";
echo "Longitude Jakarta : $longitudeJakarta<br>";
echo "Latitude Jakarta  : $latitudeJakarta<br>";
echo "Longitude Surabaya: $longitudeSurabaya<br>";
echo "Latitude Surabaya : $latitudeSurabaya<br>";
echo "Jarak antara Jakarta dan Surabaya: " . number_format($jarak, 2) . " km";

?>