
/* 
	import data from "../../../temporary/latest.json" assert {type: 'json'};

	export function stamp() {
		return data.time
	} 
*/

export function stamp() { fetch("../../../temporary/latest.json")
	.then((response) => response.json())
	.then(data => {
		return data.time;
	})
	.catch(error => {
		console.error(error);
	});
}
