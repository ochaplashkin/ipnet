var preloader = document.getElementById("preloader_preload");
	function fadeOut(el){
		el.style.opacity = 1;
		var interpreloader = setInterval(function(){
			el.style.opacity = el.style.opacity - 0.05;
			if (el.style.opacity <=0.05){
				clearInterval(interpreloader);
				preloader.style.display = "none";
			}
		},10);
	}
	window.onload = function(){
		setTimeout(function(){
			fadeOut(preloader);
	},1000);
};
