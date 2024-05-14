const colorThief = new ColorThief();
const img = document.querySelector('img');
img.crossOrigin = 'Anonymous';

function rgbToHex(r, g, b) {
	return '#' + [r, g, b].map((x) => (x.toString(16).length === 1 ? '0' + x.toString(16) : x.toString(16))).join('');
}

if (img.complete) {
	getDominantColor(img);
} else {
	img.addEventListener('load', function () {
		getDominantColor(img);
	});
}

function getDominantColor(img) {
	const dominantRGB = colorThief.getColor(img);
	console.log(rgbToHex(dominantRGB[0], dominantRGB[1], dominantRGB[2]));
}
