document.getElementById('fullscreenBtn').onclick = () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  };
  
  document.getElementById('infoBtn').onclick = () => {
    document.getElementById('info-layer').style.display = 'block';
  };

  document.getElementById('configBtn').onclick = () => {
    document.getElementById('config-layer').style.display = 'block';
  };

  // Control de l'interval d'enviament
  const intervalSlider = document.getElementById('intervalSlider');
  const intervalLabel  = document.getElementById('intervalLabel');
  
  intervalSlider.addEventListener('input', () => {
    const value = parseInt(intervalSlider.value);
    const seconds = value / 10;  // 1→0.1s, 20→2.0s
    window.sendIntervalMs = seconds * 1000;
    intervalLabel.textContent = `${seconds.toFixed(1)}s`;
  });