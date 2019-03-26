var imgs = document.getElementsByClassName('img');

for (var i = 0; i < imgs.length; i++) {
	imgs[i].onclick = function() {
		zoom(this);
	}
}

function zoom(e) {
	var elem = e.children;
	elem = elem[0].getAttribute('src');
	var zoomWrapper = document.createElement('div');
	zoomWrapper.setAttribute('id', 'zoom__wrapper');
	var zoomContent = document.createElement('img');
	zoomContent.setAttribute('id', 'zoom__content');
	zoomContent.setAttribute('src', elem);
	document.body.appendChild(zoomWrapper);
	zoomWrapper.appendChild(zoomContent);
	zoomWrapper.onclick = function() {
		zoomCollapsing(this);
	}
	return zoomWrapper;
}

function zoomCollapsing(e) {
	document.body.removeChild(e);
}