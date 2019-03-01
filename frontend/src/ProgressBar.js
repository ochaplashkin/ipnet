//tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

   
$('#load').click(function(){
//Click load input

$('#avatar').click(); 
});
             
var theFile = document.getElementById('avatar');
theFile.addEventListener('click', initialize);

function initialize() {
  document.body.onfocus = checkIt;
}
        

function checkIt() {
  setTimeout( function() {
    //Choose file for func upload

    var input = theFile;
    var file = input.files[0];
 
    if (file) {
      $('#load').hide();
      $('#barProgress').show();
      //upload(file); <-- off accept client
      fakeProgressBar();
    }
    document.body.onfocus = null; 
    return false;
  }, 100);
}   

function fakeProgressBar(){
//fake
  width = 0;
  line = document.getElementById("line");
  var timerId = setInterval(function () {

    if(width >= 400){
        clearTimeout(timerId);
        line.style.background = "#48B461";
        line.innerHTML = "Completed";

        setTimeout(function(){
        $('#barProgress').hide();
        $('#load').show();
        line.style.width = 0+"%";
        line.innerHTML = "";
        line.style.background = "#007BFF";
        },1000);
    }else {
        width = width + 40;
        line.style.width = width +"px";
        console.log(width);
        line.innerHTML = ((width*100)/400)+ "%";
    }
  },100);
}


//Client accept off
  function upload(file) {
    //up file for serv
    var xhr = new XMLHttpRequest();

    // обработчик для закачки
    xhr.upload.onprogress = function(event) {
     console.log(event.loaded + ' / ' + event.total);
     line = document.getElementById("line");
     line.style.width = ((event.loaded * 100)/event.total)+'%';
     line.innerHTML = event.loaded+" byte";
     setTimeout(up,1500)
    }
    
    function up() {
     //Завершение progressbar->Completed
     line.style.background = "#48B461";
     line.innerHTML = "Completed";

     function close() {
      //Закрываем 
      $('#barProgress').hide();
      $('#load').show();
      line.style.width = 0+"%";
      line.innerHTML = "";
     }
       setTimeout(close,1200)
    }

    xhr.onload = xhr.onerror = function() {
      // обработчики успеха и ошибки
      // если status == 200, то это успех, иначе ошибка

     if (this.status == 200) {
      console.log("success");
     }else {
      console.log("error " + this.status);
     }
    };

    xhr.open("POST", "upload", true);
    xhr.send(file);
  }