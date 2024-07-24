document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
function initMap() {
    var location = {lat: 48.8566, lng: 2.3522}; // Coordonées de l'emplacement
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
    // let elems = document.querySelectorAll('.sidenav');
    // let instances = M.Sidenav.init(elems);
});