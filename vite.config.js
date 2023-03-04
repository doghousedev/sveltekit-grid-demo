import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	optimize: {
		include: ['ag-grid-enterprise']
	}
};

export default config;
