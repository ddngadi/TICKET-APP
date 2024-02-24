alert("Aplikasi Tiket!!!");

const BatasUmur = 13;

const nama = prompt(`Masukkan nama Anda!`);
const umur = prompt(`Masukkan umur Anda!`);

if (umur > BatasUmur) {
    const studio = prompt(`Pilih studio (A/B/C) :`).toUpperCase();
    if (studio == "A" || studio == "B" || studio == "C") {
        alert(`Tiket ${nama}, Studio ${studio}, Umur ${umur}`);
    } else {
        alert(`Pilihan studio tidak valid!`);
    }
} else if (umur <= BatasUmur && umur > 0) {
    alert(`Maaf, Anda tidak boleh masuk ke studio \nAnda harus berumur diatas ${BatasUmur} tahun!`);
} else {
    alert(`Umur tidak valid!`);
} 