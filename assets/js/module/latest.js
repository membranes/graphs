import data from "../../../warehouse/numerics/best/latest.json" with {type: 'json'};

export function stamp() {
	return data.time
} 
