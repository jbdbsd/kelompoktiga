// Kode JavaScript untuk menambahkan interaksi pada website

// Membuat fungsi untuk menampilkan halaman lain
function nextPage() {
	window.location.href = "halamanlain.html";
}

// Mengambil elemen HTML
var button = document.querySelector("button");

// Menambahkan event listener untuk tombol beli
button.addEventListener("click", function() {
	alert("Produk berhasil ditambahkan ke keranjang belanja.");
});
