import { nodes } from '../data.js';

export function load({ params }) {
	const node = nodes.find((node) => node.slug === params.slug);
	
	return {
		node
	};
}