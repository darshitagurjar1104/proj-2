// Dashboard Interactivity and Mock Data Generation

document.addEventListener('DOMContentLoaded', () => {
  // Simple latency simulator
  const latencyEl = document.getElementById('latency-val');
  
  if (latencyEl) {
    setInterval(() => {
      // Simulate slight fluctuations in cross-environment latency
      const baseLatency = 12;
      const jitter = Math.floor(Math.random() * 5) - 2; // -2 to +2
      let newLatency = baseLatency + jitter;
      
      // Rare latency spike
      if (Math.random() > 0.95) {
        newLatency += Math.floor(Math.random() * 30);
      }
      
      latencyEl.textContent = newLatency;
      
      // Update color based on latency
      if (newLatency > 20) {
        latencyEl.style.color = 'var(--accent-red)';
      } else if (newLatency > 15) {
        latencyEl.style.color = '#f59e0b';
      } else {
        latencyEl.style.color = 'var(--text-main)';
      }
    }, 2000);
  }

  // Navigation Interaction
  const navLinks = document.querySelectorAll('.nav-links li a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      e.currentTarget.classList.add('active');
    });
  });
});
