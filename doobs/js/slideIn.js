$(document).ready(function() {
	var _slideDirection = localStorage.getItem("_slideDirection");
	if(_slideDirection === "left") {
		$(document.body).transition({ x: '75%', opacity: '0'}, 0, 'linear');
	} else {
		$(document.body).transition({ x: '-75%', opacity: '0'}, 0, 'linear');
	}
	$(document.body).transition({ x: '0%', opacity: '1'}, 1000, 'easeInOutExpo');
});

function leavePage(url) {
	var _slideDirection = saveSlideSide(url);
	if(_slideDirection === "left") {
		$(document.body).transition({ x: '-75%', opacity: '0'}, 1000, 'easeInOutExpo');
	} else {
		$(document.body).transition({ x: '75%', opacity: '0'}, 1000, 'easeInOutExpo');
	}
	setTimeout(function(){ window.location = url }, 1000);
}

// Determines which direction the page should slide in from,
// depending on the relative "url" being visited.
function saveSlideSide(url) {
	var _slideDirection = "left";
	if (document.URL === "https://homes.cs.washington.edu/~weberlo/") {
		_slideDirection = "left";
	} else if (url === "index.html") {
		_slideDirection = "right";
	}
	localStorage.setItem("_slideDirection", _slideDirection);
	return _slideDirection;
}