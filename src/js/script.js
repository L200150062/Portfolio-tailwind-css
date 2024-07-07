//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
}



//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

});


document.addEventListener('DOMContentLoaded', () => {
    // URL untuk data JSON
    const dataUrl = 'data.json';
  
    // Fungsi untuk mengambil data dari file JSON
    function fetchData() {
      fetch(dataUrl)
        .then(response => response.json())
        .then(data => {
          // Pilih data secara acak dari array environment
          const randomIndex = Math.floor(Math.random() * data.environment.length);
          const latestData = data.environment[randomIndex];
  
          // Update elemen HTML dengan data terbaru
          document.getElementById('temperature').textContent = latestData.temperature;
          document.getElementById('humidity').textContent = latestData.humidity;
          document.getElementById('airPressure').textContent = latestData.airPressure;
          document.getElementById('lastUpdated').textContent = new Date(latestData.timestamp).toLocaleString();
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  
    // Panggil fetchData saat halaman dimuat
    fetchData();
  
    // Perbarui data setiap 10 detik
    setInterval(fetchData, 10000);
  });
  