import definitions from '../../../temporary/definitions.json' with  {type: 'json'};

function instance(name, desc) {

	return `<tr><td>${name}</td><td>${desc}</td></tr>`
}

export function vocabulary() {

	var table = '<table>' +
		'<colgroup>' +
		'<col span="1" style="width: 26.5%;">' +
		'<col span="1" style="width: 63.5%;">' +
		'</colgroup>' +
		' <thead><tr style="text-align: left"><th>term</th><th>definition</th></tr></thead>';

	let end = '</table>';

	for (let i = 0; i < definitions.length; i++) {
		let next = instance(`${definitions[i].name}`, `${definitions[i].desc}`);
		table = table + next;
	}

	return table + end
}
