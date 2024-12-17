import adapter from '@sveltejs/adapter-static';

export default {
	kit: {
		adapter: adapter({
			// Default settings; depending on the context, automatically set.
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false,
			strict: true
		})
	}
};