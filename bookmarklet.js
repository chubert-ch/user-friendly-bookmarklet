javascript: (
function() {
    function allowTextSelection() {
		window.console && console.log('allowTextSelection');
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '*,p,div{user-select:text!important; -moz-user-select: text!important; -webkit-user-select: text!important;}';
		document.head.appendChild(style);
		var elArray = document.body.getElementsByTagName('*');
		for (var i = 0; i < elArray.length; i++) {
			var el = elArray[i];
			el.onselectstart = el.ondragstart = el.ondrag = el.oncontextmenu = el.onmousedown = el.onmouseup = function() {
				return true
			};
			if (el instanceof HTMLInputElement && ['text', 'password', 'email', 'number', 'tel', 'url'].indexOf(el.type.toLowerCase()) > -1) {
				el.removeAttribute('disabled');
				el.onkeydown = el.onkeyup = function() {
					return true
				};
			}
		}
	}
	allowTextSelection();
    document.querySelectorAll('body *').forEach(function(node) {
        if (['fixed', 'sticky'].includes(getComputedStyle(node).position))  {
            node.parentNode.removeChild(node);
        }
    });

    document.querySelectorAll('html *').forEach(function(node) {
        var s = getComputedStyle(node);
        if ('hidden' === s['overflow']) { node.style['overflow'] = 'visible'; }
        if ('hidden' === s['overflow-x']) { node.style['overflow-x'] = 'visible'; }
        if ('hidden' === s['overflow-y']) { node.style['overflow-y'] = 'visible'; }
    });

    var htmlNode = document.querySelector('html');
    htmlNode.style['overflow'] = 'visible';
    htmlNode.style['overflow-x'] = 'visible';
    htmlNode.style['overflow-y'] = 'visible';
})();
