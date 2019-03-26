var imgs = carousel.children;
var elem, width, img;
var fullWidth = 0;

window.onload = function() {
	setWidth();
}

window.onresize = function() {
	setWidth();
}

//Получаем сумму ширин всех изображений
//и задаем ширину карусели
function setWidth() {
	for (var i = 0; i < imgs.length; i++) {
		var img = imgs[i].children;
		elem = window.getComputedStyle(img[0]);
		width = elem.getPropertyValue('width');
		imgs[i].style.width = width;
		width = Number(width.slice(0, -2));
		fullWidth += width;
	}
	carousel.style.width = `${fullWidth}px`;
}
