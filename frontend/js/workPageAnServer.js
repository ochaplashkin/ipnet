
var loca = 0;
var ipMain = 0;
//getJson
async function getDataFromServer(ip){                          
  $.get("https://geo.ipify.org/api/v1?apiKey=at_Ubss3XljtrSkzxc7AQEqTZQmJgRzY&ipAddress="+ip,function(data,status){
     loca = data;
     findDot(loca.location.lat,loca.location.lng);
      })
    
  }
  //LoadPage + info 1Page
 function OnLoad() {
  var paramValue = window.location.href.split("?")[1].split("=")[1];  
   var new_element = '<a  href="#" onclick="goMap()" name="'+0+'" class="list-group-item list-group-item-action">'+paramValue+' <span  id="cross" onclick="this.parentNode.remove()">&times;</span>'+'</a>'
    $('.list-group').append(new_element);     
 }

//Map
 map = L.map('mapid').setView([45.51, -122.68], 13);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); 
  
//GoMap :)))
num = 0;
function goMap(btn){
   getDataFromServer(event.originalTarget.lastChild.previousSibling.data)  
    for( i in loca.location){

      $("td").eq(num).find(".key").text(i+": ")
      $("td").eq(num).find(".info").text(loca.location[i])
        num++;
    }
  //Dot for map   

}
    function findDot(x,y){  
      map.setView([x, y], 13);
    L.marker([x, y]).addTo(map).bindPopup( "Coordinates: "+x+" "+y)
    }
