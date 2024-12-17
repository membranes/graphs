import { nodes } from './data.js';

export function load() {
	return {
		summaries: nodes.map((node) => ({
			slug: node.slug,
			title: node.title
		}))
	};
}