import definitions from '../../../temporary/definitions.json' with  {type: 'json'};

function instance(name, desc) {

	return `<dt>${name}</dt><dd>${desc}</dd>`
}

export function vocabulary() {

	let start = '<dl>';

	let end = '</dl>';

	for (let i = 0; i < definitions.length; i++) {
		let next = instance(`${definitions[i].name}`, `${definitions[i].desc}`);
		start = start + next;
	}

	return start + end
}
