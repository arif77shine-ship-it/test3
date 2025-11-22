function updateMonitor(data) {
    document.getElementById("nomorAntrian").textContent = data.nomor;
    document.getElementById("jenisLayanan").textContent = data.layanan;
  
    // Suara panggilan
    let speech = new SpeechSynthesisUtterance(
      `Nomor antrian ${data.nomor}, silakan menuju ${data.layanan}`
    );
    speech.lang = "id-ID";
    window.speechSynthesis.speak(speech);
  }
  
  // Cek perubahan data dari localStorage
  window.addEventListener("storage", (event) => {
    if (event.key === "antrianTerakhir" && event.newValue) {
      const data = JSON.parse(event.newValue);
      updateMonitor(data);
    }
  });
  
  // Saat pertama kali load, ambil data terakhir
  window.onload = () => {
    const saved = localStorage.getItem("antrianTerakhir");
    if (saved) {
      updateMonitor(JSON.parse(saved));
    }
  };
  
  // Fullscreen
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }
  