// Input koordinat
let longitudeA = 106.8456;
let latitudeA = -6.2088;

let longitudeB = 110.3695;
let latitudeB = -7.7956;

// Radius bumi dalam kilometer
let R = 6371;

// derajat ke radian
let latA = latitudeA * Math.PI / 180;
let latB = latitudeB * Math.PI / 180;

let deltaLat = (latitudeB - latitudeA) * Math.PI / 180;
let deltaLon = (longitudeB - longitudeA) * Math.PI / 180;

// Rumus Haversine
let a = Math.sin(deltaLat / 2) ** 2 +
        Math.cos(latA) * Math.cos(latB) *
        Math.sin(deltaLon / 2) ** 2;

let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

let jarak = R * c;

// Output
console.log("Jarak antara Titik A dan Titik B = " + jarak.toFixed(2) + " km");