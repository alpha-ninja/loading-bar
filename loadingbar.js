/* ===========================================================
 * jquery-loadingbar.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Add a Youtube-like loading bar
 * to all your AJAX links 
 *
 * https://github.com/peachananr/loading-bar
 *
 * Modifications 2014-02-10 by alpha-ninja
 *
 * ========================================================== */

function startLoad(direction) {
	el = document.getElementById("loadingbar");
	if (el == null) {
		document.getElementsByTagName("body")[0].innerHTML += "<div id='loadingbar'></div>";
		el = document.getElementById("loadingbar");
	}
	el.classList.remove("done-right");
	el.classList.remove("done-left");
	el.classList.remove("done-down");
	el.classList.remove("done-up");
	el.classList.remove("right");
	el.classList.remove("left");
	el.classList.remove("down");
	el.classList.remove("up");
	switch (direction) { 
		case 'right':
			el.classList.add("before-right");
			break;
		case 'left':
			el.classList.add("before-left");
			break;
		case 'down':
			el.classList.add("before-down");
			break;
		case 'up':
			el.classList.add("before-up");
			break;
	}
	window.setTimeout(function() {
		switch (direction) { 
			case 'right':
				el.classList.remove("before-right");
				el.classList.add("right");
				break;
			case 'left':
				el.classList.remove("before-left");
				el.classList.add("left");
				break;
			case 'down':
				el.classList.remove("before-down");
				el.classList.add("down");
				break;
			case 'up':
				el.classList.remove("before-up");
				el.classList.add("up");
				break;
		}
	}, 100);
}

function finishLoad() {
	el = document.getElementById("loadingbar");
	switch (el.className) { 
		case 'right':
			el.classList.remove("right");
			el.classList.add("done-right");
			break;
		case 'left':
			el.classList.remove("left");
			el.classList.add("done-left");
			break;
		case 'down':
			el.classList.remove("down");
			el.classList.add("done-down");
			break;
		case 'up':
			el.classList.remove("up");
			el.classList.add("done-up");
			break;
	}
}
