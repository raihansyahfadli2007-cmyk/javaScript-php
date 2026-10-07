console.log("=== PROGRAM KONVERSI SUHU ===");
console.log("1. Celsius ke Fahrenheit");
console.log("2. Celsius ke Kelvin");
console.log("3. Fahrenheit ke Celsius");
console.log("4. Fahrenheit ke Kelvin");
console.log("5. Kelvin ke Celsius");
console.log("6. Kelvin ke Fahrenheit");

// Input menu dan suhu
let menu = Number(prompt("Pilih menu (1-6):"));
let suhu = Number(prompt("Masukkan suhu:"));

switch (menu) {

    case 1:
        // Celsius ke Fahrenheit
        let fahrenheit = (suhu * 9 / 5) + 32;
        console.log(`Hasil: ${suhu} °C = ${fahrenheit} °F`);
        break;

    case 2:
        // Celsius ke Kelvin
        let kelvin = suhu + 273.15;
        console.log(`Hasil: ${suhu} °C = ${kelvin} K`);
        break;

    case 3:
        // Fahrenheit ke Celsius
        let celsius = (suhu - 32) * 5 / 9;
        console.log(`Hasil: ${suhu} °F = ${celsius} °C`);
        break;

    case 4:
        // Fahrenheit ke Kelvin
        let kelvin2 = ((suhu - 32) * 5 / 9) + 273.15;
        console.log(`Hasil: ${suhu} °F = ${kelvin2} K`);
        break;

    case 5:
        // Kelvin ke Celsius
        let celsius2 = suhu - 273.15;
        console.log(`Hasil: ${suhu} K = ${celsius2} °C`);
        break;

    case 6:
        // Kelvin ke Fahrenheit
        let fahrenheit2 = ((suhu - 273.15) * 9 / 5) + 32;
        console.log(`Hasil: ${suhu} K = ${fahrenheit2} °F`);
        break;

    default:
        console.log("Menu tidak tersedia!");
}