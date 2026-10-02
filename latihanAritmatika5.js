// Data koordinat
let longitudeJakarta = 106.8456;
let latitudeJakarta = -6.2088;

let longitudeSurabaya = 112.7508;
let latitudeSurabaya = -7.2575;

// Konversi derajat ke radian
let lat1 = latitudeJakarta * Math.PI / 180;
let lat2 = latitudeSurabaya * Math.PI / 180;

let deltaLat = (latitudeSurabaya - latitudeJakarta) * Math.PI / 180;
let deltaLon = (longitudeSurabaya - longitudeJakarta) * Math.PI / 180;

// Radius bumi dalam kilometer
let R = 6371;

// Rumus Haversine
let a = Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) *
        Math.sin(deltaLon / 2) ** 2;

let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

let jarak = R * c;

// Output
console.log("=== JARAK JAKARTA - SURABAYA ===");
console.log("Longitude Jakarta :", longitudeJakarta);
console.log("Latitude Jakarta  :", latitudeJakarta);
console.log("Longitude Surabaya:", longitudeSurabaya);
console.log("Latitude Surabaya :", latitudeSurabaya);
console.log("Jarak             :", jarak.toFixed(2), "km");