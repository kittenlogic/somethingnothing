var map;    
var infowindow = new google.maps.InfoWindow({
          content: ""
      });

function initialize() {
    map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 9,
      center: new google.maps.LatLng(34.138839,-118.281233),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });

    // Create a <script> tag and set the JSON file as the source.
    var script = document.createElement('script');
    script.src = 'http://somethingnothing.me/js/openpaths.json';
    document.getElementsByTagName('head')[0].appendChild(script);

}

// convert UNIX timestamp
function timeConverter(UNIX_timestamp){
 var a = new Date(UNIX_timestamp*1000);
 var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
     var year = a.getFullYear();
     var month = months[a.getMonth()];
     var date = a.getDate();
     var hour = a.getHours();
     var min = a.getMinutes();
     var sec = a.getSeconds();
     var time = 'I was here on '+ month+' '+date+' '+year+' at '+hour+':'+min+':'+sec ;
     return time;
}

// returns a random number between any two numbers (min, max)
function randomIntFromInterval(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

// Loop through the results array and place a marker for each set of coordinates.
function iamhere(data){
  var image;
  var images = ['img/map-body1.gif', 'img/map-body2.gif', 'img/lol-smiley.gif', 'img/map-magic.gif', 'img/map-ghost.gif'];
  var captionText;
  var j = randomIntFromInterval(0,3);

  for (var i = 0; i < data.length; i++) {  
    var everyday = timeConverter(data[i].t);
    if (i == data.length - 1) {
      image = images[j];
      captionText = 'You found me!';
    } else {
      image = images[j];
      captionText = everyday;
    }
    
    var hello = '<div class="infobox">' + '<p>Hello!</p>' + captionText + '</div>';
    var latLng = new google.maps.LatLng(data[i].lat, data[i].lon); 

    var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: everyday,
      icon: image           
    });

    bindInfoWindow(marker, map, infowindow, hello);
    console.log(data.length);
  }
}

function bindInfoWindow(marker, map, infowindow, strDescription) {
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(strDescription);
        infowindow.open(map, marker);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);