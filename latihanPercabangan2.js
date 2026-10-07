let umur = parseInt(prompt("Masukkan umur:"));

if (umur < 0) {
    alert("Umur tidak boleh negatif!");
} else if (umur <= 1) {
    alert("Kategori: Bayi");
} else if (umur <= 3) {
    alert("Kategori: Batita");
} else if (umur <= 5) {
    alert("Kategori: Balita");
} else if (umur <= 12) {
    alert("Kategori: Anak-Anak");
} else if (umur <= 17) {
    alert("Kategori: Remaja");
} else if (umur <= 21) {
    alert("Kategori: ABG");
} else if (umur <= 30) {
    alert("Kategori: Pra Dewasa");
} else if (umur <= 50) {
    alert("Kategori: Dewasa");
} else if (umur <= 70) {
    alert("Kategori: Pra Lansia");
} else {
    alert("Kategori: Lansia");
}