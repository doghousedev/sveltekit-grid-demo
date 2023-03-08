import { sveltekit } from '@sveltejs/kit/vite';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimize: {
		include: ['ag-grid-enterprise']
	},
	resolve: {
		alias: {
			$components: resolve('./src/components'),
			$lib: resolve('./src/lib'),
			$store: resolve('./src/store'),
		},
		extensions: ['.mjs', '.js', '.ts', '.json'],
	},
};

export default config;
