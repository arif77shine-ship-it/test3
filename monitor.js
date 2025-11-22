function playBellAndSpeak(text) {
    const bell = document.getElementById("bellSound");
    bell.play().then(() => {
      // Tunggu bel selesai (sekitar 1.5 detik)
      setTimeout(() => {
        let speech = new SpeechSynthesisUtterance(text);
        speech.lang = "id-ID";
        window.speechSynthesis.speak(speech);
      }, 1500);
    });
  }
  
  function updateMonitor(data) {
    const nomorEl = document.getElementById("nomorAntrian");
    const layananEl = document.getElementById("jenisLayanan");
  
    // Reset animasi
    nomorEl.classList.remove("show-number");
    layananEl.classList.remove("show-text");
  
    // Update teks
    nomorEl.textContent = data.nomor;
    layananEl.textContent = data.layanan;
  
    // Trigger animasi
    setTimeout(() => {
      nomorEl.classList.add("show-number");
      layananEl.classList.add("show-text");
    }, 50);
  
    // Mainkan bel + suara panggilan
    playBellAndSpeak(`Nomor antrian ${data.nomor}, silakan menuju ${data.layanan}`);
  }
  
  // Cek perubahan data dari localStorage
  window.addEventListener("storage", (event) => {
    if (event.key === "antrianTerakhir" && event.newValue) {
      const data = JSON.parse(event.newValue);
      updateMonitor(data);
    }
  });
  
  // Load data terakhir saat awal
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
  