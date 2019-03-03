$(document).ready(function() {
    var grid = $('.publications');
    grid.masonry();

    grid.imagesLoaded( function() {
        grid.masonry('layout');
    });
});


//Google map API
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var uluru = {lat: 49.8204423, lng: 24.0574003};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
