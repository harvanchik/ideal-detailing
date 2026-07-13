import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			adapter: adapter()
		}),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			includeAssets: ['favicon.svg', 'hero-detailing.jpg', 'plastic-restore-before-after.jpg'],
			manifest: {
				name: 'Ideal Detailing',
				short_name: 'Ideal Detailing',
				description: 'Convenient mobile car detailing, booked around your schedule.',
				theme_color: '#02040a',
				background_color: '#02040a',
				display: 'standalone',
				start_url: '/',
				scope: '/',
				icons: [
					{
						src: '/favicon.svg',
						sizes: 'any',
						type: 'image/svg+xml',
						purpose: 'any maskable'
					}
				]
			},
			workbox: {
				navigateFallback: '/',
				cleanupOutdatedCaches: true
			},
			devOptions: {
				enabled: true
			}
		})
	]
});
