var blocks = document.getElementsByClassName('preview-block');
var lastBlock = document.getElementById('first-preview');
poster.style.width = '70%';

for (var i = 0; i < blocks.length; i++) {
	blocks[i].onclick = function() {
		activatePreview(this);
	}
}

function activatePreview(e) {
	switch (e.getAttribute('data-type')) {
		case '1':
			poster.style.width = '70%';
			break;
		case '2':
			poster.style.width = '50%';
			break;
		case '3':
			poster.style.width = '90%';
			break;
		default:
			break;
	}
	if (e == lastBlock) {
		return 0;
	}
	e.setAttribute('class', 'preview-block preview-blocks active-preview');
	if (lastBlock) {
		lastBlock.setAttribute('class', 'preview-block preview-blocks');
	}
	lastBlock = e;
	return lastBlock;
}