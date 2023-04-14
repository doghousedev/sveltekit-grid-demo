//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		alias: {
			$components: './src/components',
			$lib: './src/lib',
			$stores: './src/stores',
			$types: './src/types',
		},
		// adapter: adapter({ out: 'build' })
		adapter: adapter({})
	}
};

export default config;
