const themeMap = {
  orange:  { '--primary': '#ff6f61', '--sidebar': '#212121', '--bg': '#181818' },
  blue:    { '--primary': '#4c8cff', '--sidebar': '#1d2436', '--bg': '#151b27' },
  green:   { '--primary': '#53dd84', '--sidebar': '#1d3123', '--bg': '#16201b' },
  primary: { '--primary': '#ffad05', '--sidebar': '#2e2228', '--bg': '#28212b' },
  purple:  { '--primary': '#c574dd', '--sidebar': '#241b2d', '--bg': '#191320' }
};

function applyTheme(theme) {
  const vars = themeMap[theme];
  if (vars) {
    Object.keys(vars).forEach(key => document.documentElement.style.setProperty(key, vars[key]));
    document.querySelectorAll('.theme-colors .color').forEach(c => {
      c.classList.toggle('active', c.getAttribute('data-color') === theme);
    });
  }
}

// Set theme on click and remember in localStorage
document.querySelectorAll('.theme-colors .color').forEach(circle => {
  circle.addEventListener('click', () => {
    const theme = circle.getAttribute('data-color');
    localStorage.setItem('selectedTheme', theme);
    applyTheme(theme);
  });
});

// Apply saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('selectedTheme') || 'orange'; // default if none selected
  applyTheme(savedTheme);
});
