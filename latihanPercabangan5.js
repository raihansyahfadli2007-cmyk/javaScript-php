let a = Number(prompt("Masukkan nilai A:"));
let b = Number(prompt("Masukkan nilai B:"));
let c = Number(prompt("Masukkan nilai C:"));

if (a == 0) {
    console.log("Bukan merupakan persamaan kuadrat");
} else {

    // Menghitung diskriminan
    let D = b * b - 4 * a * c;

    // Persamaan kuadrat
    let persamaan = a + "x² + " + b + "x + " + c + " = 0";

    console.log("Persamaan Kuadrat: " + persamaan);
    console.log("Nilai Diskriminan: " + D);

    // Menentukan jenis akar
    if (D > 0) {

        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);

        console.log("Merupakan Akar Berbeda");
        console.log("Nilai Akar x1: " + x1);
        console.log("Nilai Akar x2: " + x2);

    } else if (D < 0) {

        console.log("Merupakan Akar Imajiner");

        let bagianReal = -b / (2 * a);
        let bagianImajiner = Math.sqrt(-D) / Math.abs(2 * a);

        console.log("Rumus Akar x1: " + bagianReal + " + " + bagianImajiner + "i");
        console.log("Rumus Akar x2: " + bagianReal + " - " + bagianImajiner + "i");

    } else {

        let x = -b / (2 * a);

        console.log("Merupakan Akar Kembar");
        console.log("Nilai Akar: " + x);
    }
}