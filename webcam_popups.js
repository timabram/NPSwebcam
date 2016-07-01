//var park1 = new L.marker([38.352105, -119.934996]).addTo(mymap);
//var park2 = new L.marker([35.290692, -111.508443]).addTo(mymap);
	
//var park1 = new L.marker([35.840854,14.484347]).addTo(mymap);
park1.on('click', function(e) {
  var popup = L.popup()
    .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
    .setContent("<iframe width='224' height='126' src='http://www.youtube.com/embed/StOTSqGxuBY?autoplay=1&loop=1&playlist=StOTSqGxuBY&controls=0' frameborder='0' allowfullscreen></iframe>")
    .openOn(mymap);
});
park2.on('click', function(e) {
  var popup = L.popup()
    .setLatLng(e.latlng) //(assuming e.latlng returns the coordinates of the event)
    .setContent("<iframe width='224' height='126' src='http://www.youtube.com/embed/0Yjhjg4DaJ8?autoplay=1&loop=1&playlist=0Yjhjg4DaJ8&controls=0' frameborder='0' allowfullscreen></iframe>")
    .openOn(mymap);
});
