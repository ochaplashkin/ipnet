


var M = 0;
var modal = document.getElementById('myModal');
var btn = document.getElementById("add-ip");
var span = document.getElementsByClassName("close")[0];
var cancel = document.getElementById("Cancel");

//Нажатие на кнопку Add и вызов модульного окна
btn.onclick = function() {
    modal.style.display = "block";
	var ipInfo = document.getElementById('ipInfo');

	//Модульнок окно: Нажатие на кнопку Ок -> добавление новой строки в блок "ip addresses" 
	ipInfo.onclick = function() {
     if(ipInfoNext.value.length > 6) { 
        M++;
	  ipInfoNext = document.getElementById('ipInfoNext');
    //alert(M)	  
      var new_element = '<a  href="#" onclick="goMap()" name="'+M+'" class="list-group-item list-group-item-action">'+ipInfoNext.value+' <span  id="cross" onclick="this.parentNode.remove()">&times;</span>'+'</a>'
      $('.list-group').append(new_element);
      alert(ipInfoNext.value)
       getDataFromServer(ipInfoNext.value) ;
      ipInfoNext.value = "";
       modal.style.display = "none";
     }else{
      alert("error")

    } 
  }
}

span.onclick = function() {
    modal.style.display = "none";
}

cancel.onclick = function() {
    modal.style.display = "none";
}



window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}







