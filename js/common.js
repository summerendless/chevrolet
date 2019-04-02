function afterLoading(){
		var gnbWrap = document.querySelector('#gnb-wrap');
		var mainMenu = document.querySelectorAll('#gnb-wrap > ul > li > a');
		var bgMenuOpen = document.querySelector('.bg-menu-open');

		for (var i in mainMenu){
			mainMenu[i].onmouseover = mainMenu[i].onfocus = mainMenuHandler;
		}
		function mainMenuHandler(){
			gnbWrap.setAttribute('class','on');
			bgMenuOpen.setAttribute('class','bg-menu-open on');
		}
		gnbWrap.onmouseleave = gnbMouseleaveHandler;

		function gnbMouseleaveHandler(){
			gnbWrap.setAttribute('class','');
			bgMenuOpen.setAttribute('class','bg-menu-open');			
		}
	}
	if (window.addEventListener){
	  window.addEventListener('load',afterLoading);
	} else {
	  window.addEventListener('onload',afterLoading);
	} 
