$(document).ready(function() {

	/* Giphy API */
	var newGif = () => $.getJSON(
		"https://api.giphy.com/v1/gifs/random?api_key=ZzXJcQrvDgDGcZA3B4R487bnVmn7U0uC&tag=facepalming&rating=pg",
		json => renderGif(json.data)
	);

	// Initiate gifLoop for set interval
	var refresh;
	// Duration count in seconds
	const duration = 1000 * 7;

	// Target gif-wrap container
	const $gif = $("#gif");



	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		// Set gif as bg image
		$gif.css({
			"background-image": 'url("' + _giphy.image_original_url + '")'
		});

		// Start duration countdown
		refreshRate();
	};

	// Call for new gif after duration
	var refreshRate = () => {
		// Reset set intervals
		clearInterval(refresh);
		refresh = setInterval(function() {
			// Call Giphy API for new gif
			newGif();
		}, duration);
	};

	// Call Giphy API for new gif
	newGif();
});
