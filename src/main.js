import App from './App.svelte';
import { setup } from 'svelte-match-media'

setup()

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;
