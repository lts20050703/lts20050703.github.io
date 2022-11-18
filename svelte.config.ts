import adapter from '@sveltejs/adapter-static';
import { Config } from '@sveltejs/kit';
import preprocess from 'svelte-preprocess';

export default {
	preprocess: [preprocess({ postcss: true })],
	kit: { adapter: adapter() }
} as Config;
