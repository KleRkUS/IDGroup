var header = document.getElementById('header');
var info = document.getElementById('info');
var fp = document.getElementById('first-page');

window.onscroll = function() {
	var styles = window.getComputedStyle(header);
	var height = styles.getPropertyValue('height');
	styles = window.getComputedStyle(info);
	var infoHeight = styles.getPropertyValue('height');
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	if (scrollTop >= Number(infoHeight.slice(0, -2))) {
		fp.style.marginTop = height;
		header.style.position = "fixed";
	}  else {
		fp.style.marginTop = "0px";
		header.style.position = 'static';
	}
}