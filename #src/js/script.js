const burger = document.querySelector('.page-header__burger');
const menu = document.querySelector('.page-header__nav-wrapper');

burger.addEventListener('click', () => {
  menu.classList.toggle('page-header__nav-wrapper--show'),
    burger.classList.toggle('page-header__burger--active');
});


function initMap() {
  var pos = {
    lat: 45.42308378848974,

    lng: -75.68305780065548
  };
  var opt = {
    center: pos,
    zoom: 15,
  };

  var myMap = new google.maps.Map(document.getElementById('map'), opt);
  var marker = new google.maps.Marker({
    position: pos,
    map: myMap,
    title: 'University of Ottawa'
  });
}
