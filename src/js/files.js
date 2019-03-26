var dragBlock = document.getElementById('preview-files');
var filesImg = document.getElementById('files__img');

dragBlock.ondragover, dragBlock.onmouseover = function() {
	dragUpload(true);
}

dragBlock.ondragleave, dragBlock.onmouseleave = function() {
	dragUpload(false)
}

function dragUpload(e) {
	if (e) {
		dragBlock.setAttribute('class', 'container-fluid preview-files-cont preview-blocks preview-files-active');
		filesImg.setAttribute('src', 'img/files_active.png');
	} else {
		dragBlock.setAttribute('class', 'container-fluid preview-files-cont preview-blocks');
		filesImg.setAttribute('src', 'img/files_inactive.png');
	}
}