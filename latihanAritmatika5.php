<?php

// Input koordinat
$longitudeA = 106.8456;
$latitudeA = -6.2088;

$longitudeB = 110.3695;
$latitudeB = -7.7956;

// Radius bumi dalam kilometer
$R = 6371;

// derajat ke radian
$latA = deg2rad($latitudeA);
$latB = deg2rad($latitudeB);

$deltaLat = deg2rad($latitudeB - $latitudeA);
$deltaLon = deg2rad($longitudeB - $longitudeA);

// Rumus Haversine
$a = sin($deltaLat / 2) ** 2 +
     cos($latA) * cos($latB) *
     sin($deltaLon / 2) ** 2;

$c = 2 * atan2(sqrt($a), sqrt(1 - $a));

$jarak = $R * $c;

// Output
echo "Jarak antara Titik A dan Titik B = " . number_format($jarak, 2) . " km";

?>