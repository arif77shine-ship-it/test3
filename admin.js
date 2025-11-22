// Awal nomor antrian untuk tiap layanan
let nomorTerakhir = {
    "Customer Service": 0,
    "Pembayaran": 0,
    "Pengambilan Produk": 0
  };
  
  // Prefix kode tiap layanan
  const prefix = {
    "Customer Service": "A",
    "Pembayaran": "B",
    "Pengambilan Produk": "C"
  };
  
  // Format nomor jadi A001, B002, dst.
  function formatNomor(layanan, nomor) {
    return prefix[layanan] + nomor.toString().padStart(3, "0");
  }
  
  // Update tampilan nomor berikutnya di admin
  function updateNomorBerikutnya() {
    const layanan = document.getElementById("layanan").value;
    const next = nomorTerakhir[layanan] + 1;
    document.getElementById("nomorBerikutnya").textContent = formatNomor(layanan, next);
  }
  
  // Fungsi panggil antrian
  function panggil() {
    const layanan = document.getElementById("layanan").value;
  
    // Tambahkan nomor
    nomorTerakhir[layanan]++;
    const nomor = formatNomor(layanan, nomorTerakhir[layanan]);
  
    // Simpan data ke localStorage
    const data = { nomor, layanan, waktu: Date.now() };
    localStorage.setItem("antrianTerakhir", JSON.stringify(data));
  
    // Update tampilan berikutnya
    updateNomorBerikutnya();
    alert(`Antrian ${nomor} untuk ${layanan} dipanggil!`);
  }
  
  // Perbarui nomor berikutnya saat ganti layanan
  document.getElementById("layanan").addEventListener("change", updateNomorBerikutnya);
  
  // Inisialisasi awal
  updateNomorBerikutnya();
  