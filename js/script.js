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
    const secs = parseInt(intervalSlider.value);
    window.sendIntervalMs = secs * 1000;
    intervalLabel.textContent = `${secs}s`;
  });