// Simpan nomor antrian masing-masing ruang
let antrian = {
    1: 1,
    2: 1,
    3: 1
  };
  
  function formatNomor(ruang, num) {
    let prefix = ruang === 1 ? "A" : ruang === 2 ? "B" : "C";
    return prefix + num.toString().padStart(3, "0");
  }
  
  function updateDisplay(ruang) {
    document.getElementById(`nomor-antrian-${ruang}`).textContent = formatNomor(ruang, antrian[ruang]);
  }
  
  function panggilAntrian(ruang) {
    const nomor = formatNomor(ruang, antrian[ruang]);
    let speech = new SpeechSynthesisUtterance(
      `Nomor antrian ${nomor}, silakan menuju ruang ${ruang}`
    );
    speech.lang = "id-ID";
    window.speechSynthesis.speak(speech);
  }
  
  function nextAntrian(ruang) {
    antrian[ruang]++;
    updateDisplay(ruang);
    panggilAntrian(ruang);
  }
  
  // Inisialisasi semua ruang
  updateDisplay(1);
  updateDisplay(2);
  updateDisplay(3);
  
  // Fullscreen handler
  document.getElementById("fullscreenBtn").addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  });
  