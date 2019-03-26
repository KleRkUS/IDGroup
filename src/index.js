import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import "./scss/style.scss";
import "./js/header.js";
import "./js/preview.js";
import "./js/files.js";
import "./js/scroll.photos.js";
import "./js/zoom.js";

document.getElementById('first-page').style.backgroundImage = "url(img/first-back.png)";
document.getElementById('poster').style.backgroundImage = "url(img/pastel-green-tan-texture.png)";
document.getElementById('second-page').style.backgroundImage = "url(img/sec-back.png)";
var imgBlocks = carousel.children;

for (var i = 0; i < imgBlocks[i]; i++) {
	var elem = imgBlocks[i].children[1];
	console.log(elem);
}