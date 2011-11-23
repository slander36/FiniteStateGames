fsg.tabbing = function() {
	var tabs = document.getElementsByTagName('tab');
	for(i in tabs) {
		tabs[i].innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;"+tabs[i].innerHTML;
	}
}