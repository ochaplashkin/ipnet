
var loca = 0;
//getJson
function getDataFromServer(ip){                          
  $.get("https://geo.ipify.org/api/v1?apiKey=at_Ubss3XljtrSkzxc7AQEqTZQmJgRzY&ipAddress="+ip,function(data,status){
     loca = data;
      })
  }
  //LoadPage + info 1Page
 function OnLoad() {
  var paramValue = window.location.href.split("?")[1].split("=")[1];  
  var startIP = document.getElementById('stratIP');
  startIP.innerHTML += paramValue;
  getDataFromServer(paramValue)          
 }

//Map
 map = L.map('mapid').setView([45.51, -122.68], 13);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); 
  
//GoMap :)))
num = 0;
function goMap(btn){
    for( i in loca.location){

      $("td").eq(num).find(".key").text(i+": ")
      $("td").eq(num).find(".info").text(loca.location[i])
        num++;
    }
  //Dot for map   
  findDot(loca.location.lat,loca.location.lng);
}
    function findDot(x,y){  
      map.setView([x, y], 13);
    L.marker([x, y]).addTo(map).bindPopup( "Coordinates: "+x+" "+y)
    }
