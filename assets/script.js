$(document).ready(function() {

	/* Giphy API */
	var newGif = () => $.getJSON(
		"https://api.giphy.com/v1/gifs/random?api_key=ZzXJcQrvDgDGcZA3B4R487bnVmn7U0uC&tag=facepalming&rating=pg",
		json => renderGif(json.data)
	);

	/* Var */
	var refresh;
	const duration = 1000 * 10;
	const $gif = $("#gif");

	/* Display Gif */
	var renderGif = _giphy => {
		$gif.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});
		refreshRate();
	};

	/* Refresh */
	var refreshRate = () => {
		clearInterval(refresh);
		refresh = setInterval(function() {
			newGif();
		}, duration);
	};

	/* New Gif */
	newGif();
});
