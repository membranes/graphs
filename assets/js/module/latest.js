/* 
	import data from "../../../temporary/latest.json" assert {type: 'json'};

	export function stamp() {
		return data.time
	} 
*/

export function stamp() { fetch("../../../temporary/latest.json")
	.then(function (response) {
		return response.json();
	})
	.then(function (data) {
		return data.time;
	})
	.catch(error => {
		console.error(error);
	});
}
