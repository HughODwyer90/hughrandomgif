$(document).ready(function() {
	
	// Initiate gifLoop for set interval
	var refresh;
	var getTag = "fail";
	const d = new Date();
	let month = d.getMonth();
	// Duration count in seconds
	const duration = 1000 * 10;
	// Giphy API defaults
	if (month == 0){
	getTag = "new year"
	}
	if (month == 2){
	getTag = "irish"
	}
	if (month == 6){
	getTag = "birthday"
	}
	if (month == 9){
	getTag = "halloween"
	}
	if (month == 10 || month == 11){
	getTag = "christmas"
	}
	const giphy = {
		baseURL: "https://api.giphy.com/v1/gifs/",
		apiKey: "i4puxrRbZEceVomayT8vkZa0tmDZtv8y",
		tag: getTag,
		type: "random",
		rating: "pg-13"
	};
	// Target gif-wrap container
	const $gif_wrap = $("#gif-wrap");
	// Giphy API URL
	let giphyURL = encodeURI(
		giphy.baseURL +
			giphy.type +
			"?api_key=" +
			giphy.apiKey +
			"&tag=" +
			giphy.tag +
			"&rating=" +
			giphy.rating
	);

	// Call Giphy API and render data
	var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

	// Display Gif in gif wrap container
	var renderGif = _giphy => {
		console.log(_giphy);
		console.log(_giphy.images.original.url);
		
 navigator.clipboard.writeText(_giphy.images.original.url);

		// Set gif as bg image
		$gif_wrap.css({
			"background-image": 'url("' + _giphy.images.original.url + '")'
		});

		// Start duration countdown
		// refreshRate();
	};

	// Call for new gif after duration
	// var refreshRate = () => {
	// 	// Reset set intervals
	// 	clearInterval(refresh);
	// 	refresh = setInterval(function() {
	// 		// Call Giphy API for new gif
	// 		newGif();
	// 	}, duration);
	// };

	// Call Giphy API for new gif
	newGif();

	const newGifButton = $('#new-gif');
	
	newGifButton.click(newGif)
});
