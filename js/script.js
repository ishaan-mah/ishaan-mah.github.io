document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('mode-toggle').addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    document.body.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
});

// Visit counter using simple API
fetch('https://api.countapi.xyz/hit/your-username.github.io/visits')
  .then(res => res.json())
  .then(data => {
    document.getElementById('visit-counter').innerText = `Visits: ${data.value}`;
  });