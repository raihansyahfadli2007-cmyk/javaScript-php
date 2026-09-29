<?php

$suhu = 25;
$asal = "C";
$tujuan = "F";

if ($asal == "C" && $tujuan == "F") {
    $hasil = ($suhu * 9 / 5) + 32;
}
elseif ($asal == "C" && $tujuan == "K") {
    $hasil = $suhu + 273.15;
}
elseif ($asal == "F" && $tujuan == "C") {
    $hasil = ($suhu - 32) * 5 / 9;
}
elseif ($asal == "F" && $tujuan == "K") {
    $hasil = (($suhu - 32) * 5 / 9) + 273.15;
}
elseif ($asal == "K" && $tujuan == "C") {
    $hasil = $suhu - 273.15;
}
elseif ($asal == "K" && $tujuan == "F") {
    $hasil = (($suhu - 273.15) * 9 / 5) + 32;
}
else {
    echo "Konversi tidak tersedia.";
    exit;
}

echo "Hasil konversi = " . $hasil;

?>