// Ambil elemen input dan paragraf
const inputField = document.getElementById('inputField');
const outputParagraph = document.getElementById('outputParagraph');

// Tambahkan event listener untuk keydown pada input field
inputField.addEventListener('keydown', function(event) {
    // Tampilkan karakter terakhir yang ditekan di paragraf
    outputParagraph.textContent = `Karakter terakhir yang ditekan: ${event.key}`;
});
