import aside from "../../../temporary/aside.json" with { type:'json' };

function hyperlink(string, name) {

	return `<a href=${string} target="_blank">${name}</a>`
}

export function setup() {

	let panel;
	panel = hyperlink(`${aside.index}`, 'index') + `<br>` +
		hyperlink(`${aside.background}`, 'background');

	return panel
}
