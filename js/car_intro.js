var doc = document;
function checkNextSibling(element) {
	while(element.nodeType != 1) {
		element = element.nextSibling;
	}
	return element;
}
$(document).ready(function(){
  $('.sub-tab-img-01').bxSlider({
			pager: true
  });
});

function afterLoading() {
	function tabMenu() {
		var arrTabmenus = doc.querySelectorAll ('.sub-title-content.sub-cnt-1 > ul > li > a');
		var arrTabmenusDiv = doc.querySelectorAll ('.sub-title-content.sub-cnt-1 > div');
		for ( var i in arrTabmenus){
			arrTabmenus[i].onfocus = arrTabmenus[i].onmouseover = introTitHandler;
		}
		var activeTabmenu = arrTabmenus[0];
		function introTitHandler() {
			//alert(1234);
			var ts = this;
		
			var tsHref = ts.getAttribute('href');
			
			for (var i in arrTabmenusDiv) {
				if(arrTabmenusDiv[i].style) arrTabmenusDiv[i].style.height = 0;
			}
			doc.querySelector(tsHref).style.height = 'auto';
			//checkNextSibling(activeTabmenu.parentNode.nextSibling).style.display = 'none';

			//checkNextSibling(this.parentNode.nextSibling).style.display = 'block';
			
			activeTabmenu = this;
		}
	}
	tabMenu();
	function tabMenu2() {
		var arrTabmenus2 = doc.querySelectorAll ('.sub-content-2 > ul > li > a');
		var arrTabmenusDiv2 = doc.querySelectorAll ('.sub-content-2 > div');
		for (var i in arrTabmenusDiv2) {
			arrTabmenus2[i].onfocus = arrTabmenus2[i].onmouseover = introTitHandler2;
		}
		var activeTabmenu2 = arrTabmenus2[0];
		function introTitHandler2() {
			var ts = this;
		
			var tsHref = ts.getAttribute('href');
			
			for (var i in arrTabmenusDiv2) {
				if(arrTabmenusDiv2[i].style) arrTabmenusDiv2[i].style.display = 'none';
			}
			doc.querySelector(tsHref).style.display = 'block';

			activeTabmenu2 = this;
		}
	}
	tabMenu2();
}

if (window.addEventListener){
	window.addEventListener('load',afterLoading);
} else {
	window.attachEvent('onload',afterLoading);
}