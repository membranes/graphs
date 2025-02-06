
export function by() {

	const datestr = new Date();

	let text;
	text = '<div class="by">Artificial Intelligence Unit<br>' + `${datestr.toUTCString()}` + '</div>'

	return text

}
