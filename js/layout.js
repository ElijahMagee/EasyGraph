
var items = ["home", "examples", "settings", "help"]

function clickHome() {
	for(i=0; i<items.length; i++){
		document.getElementById(items[i]).classList.remove('active');	
		document.getElementById(items[i]).classList.add('other');	
		document.getElementById("menu"+items[i]).classList.add('menuHidden')
		document.getElementById("menu"+items[i]).classList.remove('menu'); 			
	}
	document.getElementById("menuhome").classList.remove('menuHidden')
	document.getElementById("menuhome").classList.add('menu'); 
	document.getElementById("home").classList.add('active');
 		 	
}
function clickExamples() {
	for(i=0; i<items.length; i++){
		document.getElementById(items[i]).classList.remove('active');
		document.getElementById(items[i]).classList.add('other');		
		document.getElementById("menu"+items[i]).classList.add('menuHidden')
		document.getElementById("menu"+items[i]).classList.remove('menu'); 			
	}
	document.getElementById("menuexamples").classList.remove('menuHidden')
	document.getElementById("menuexamples").classList.add('menu'); 
	document.getElementById("examples").classList.add('active');
	 	 	 	

}
function clickSettings() {
 	for(i=0; i<items.length; i++){
		document.getElementById(items[i]).classList.remove('active');
		document.getElementById(items[i]).classList.add('other');		
		document.getElementById("menu"+items[i]).classList.add('menuHidden')
		document.getElementById("menu"+items[i]).classList.remove('menu'); 			
	}
	document.getElementById("menusettings").classList.remove('menuHidden')
	document.getElementById("menusettings").classList.add('menu'); 
	document.getElementById("settings").classList.add('active'); 	 	 	
}
function clickHelp() {
 	for(i=0; i<items.length; i++){
		document.getElementById(items[i]).classList.remove('active');
		document.getElementById(items[i]).classList.add('other');		
		document.getElementById("menu"+items[i]).classList.add('menuHidden')
		document.getElementById("menu"+items[i]).classList.remove('menu'); 			
	}
	document.getElementById("menuhelp").classList.remove('menuHidden')
	document.getElementById("menuhelp").classList.add('menu'); 
	document.getElementById("help").classList.add('active'); 	 	 	
}