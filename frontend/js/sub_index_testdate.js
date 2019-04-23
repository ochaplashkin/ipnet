el = ".info" //фикс с копированием
function copytext(el) { 
  var $tmp = $("<input>"); 
  $("body").append($tmp); 
  $tmp.val($(el).text()).select(); 
  document.execCommand("copy"); 
  $tmp.remove(); 

  $("td #save_pic").attr('src', 'frontend/src/saveId.svg');
   setTimeout(function(){ $("td #save_pic").attr('src', 'frontend/src/save.png');}, 500);

}

  //Проверка введенных данных    
  address =document.getElementById('example');
  letsGo =document.getElementById('test');
  letsGo.onclick = function() {
        validString = address.value;
      if(validString.length >= 7){
      
    document.location = "sub_index.html?id=" + validString;
    //document.location.replace("sub-index/sub_index.html");
      }
      $('#example').tooltip("show")
      setTimeout( pauseHide,3000);

        function pauseHide(){
      $('#example').tooltip("hide")

     }

  }
