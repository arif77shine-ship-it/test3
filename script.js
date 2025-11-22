// Simpan nomor antrian untuk tiap layanan
let antrian = {
    cs: 1,
    pay: 1,
    prod: 1
  };
  
  function formatNomor(layanan, num) {
    if (layanan === "cs") return "CS" + num.toString().padStart(3, "0");
    if (layanan === "pay") return "P" + num.toString().padStart(3, "0");
    if (layanan === "prod") return "PR" + num.toString().padStart(3, "0");
  }
  
  function updateDisplay(layanan) {
    if (layanan === "cs")
      document.getElementById("cs-antrian").textContent = formatNomor("cs", antrian.cs);
    if (layanan === "pay")
      document.getElementById("pay-antrian").textContent = formatNomor("pay", antrian.pay);
    if (layanan === "prod")
      document.getElementById("prod-antrian").textContent = formatNomor("prod", antrian.prod);
  }
  
  function panggilAntrian(layanan) {
    const nomor = formatNomor(layanan, antrian[layanan]);
    let layananNama =
      layanan === "cs"
        ? "Customer Service"
        : layanan === "pay"
        ? "Pembayaran"
        : "Pengambilan Produk";
  
    let speech = new SpeechSynthesisUtterance(
      `Nomor antrian ${nomor}, silakan menuju layanan ${layananNama}`
    );
    speech.lang = "id-ID";
    window.speechSynthesis.speak(speech);
  }
  
  function nextAntrian(layanan) {
    antrian[layanan]++;
    updateDisplay(layanan);
    panggilAntrian(layanan);
  }
  
  // Inisialisasi tampilan
  updateDisplay("cs");
  updateDisplay("pay");
  updateDisplay("prod");
  
  // Fullscreen handler
  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  