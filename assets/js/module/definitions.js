import definitions from '../../specifications/definitions.json' with  {type: 'json'};

function instance(name, desc, variable) {

	return `<dt>${name}: ` + '\\(' + `${variable}` + '\\)' + `</dt><dd>${desc}</dd>`
}

export function vocabulary() {

	let start = '<dl>';

	let end = '</dl>';

	for (let i = 0; i < definitions.length; i++) {
		let next = instance(`${definitions[i].name}`, `${definitions[i].desc}`, `${definitions[i].variable}`);
		start = start + next;
	}

	return start + end
}
