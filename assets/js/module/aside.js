import aside from "../../../temporary/aside.json" with { type:'json' };

function hyperlink(string, name) {

	return `<a href=${string} target="_parent">${name}</a>`
}

function second(string, name) {

	return `<a style="margin-left: 18px" href=${string} target="_parent">${name}</a>`
}

export function setup() {

	let panel;
	panel = '<div class="frames-grid-left svelte-1jxvby2">' +
		hyperlink(`${aside.index}`, 'index') + `<br>` +
		hyperlink(`${aside.background}`, 'background') + `<br>` +
		hyperlink(`${aside.preliminaries}`, 'preliminaries') + `<br>` +
		`Metrics<br>` +
		second(`${aside.metrics.error}`, 'error') + `<br>` +
		second(`${aside.metrics.financial}`, 'financial')+ `<br>` +
		`Appendix<br>` +
		second(`${aside.appendix.definitions}`, 'definitions') +
	'</div>';

	return panel
}
