<script lang="ts">
	import { resolve } from '$app/paths';

	let { active }: { active?: 'home' | 'pricing' | 'book' } = $props();

	const homeUrl = resolve('/');
	const pricingUrl = resolve('/pricing');
	const bookUrl = resolve('/book');
</script>

<header class="site-header-shell">
	<div class="site-header">
		<a class="brand" href={homeUrl} aria-label="Ideal Detailing home">
			<span class="brand-mark" aria-hidden="true">ID</span>
			<span class="brand-copy"><strong>IDEAL</strong><small>DETAILING</small></span>
		</a>
		<nav aria-label="Primary navigation">
			<a
				class:active={active === 'home'}
				href={homeUrl}
				aria-current={active === 'home' ? 'page' : undefined}>Home</a
			>
			<a
				class:active={active === 'pricing'}
				href={pricingUrl}
				aria-current={active === 'pricing' ? 'page' : undefined}>Pricing</a
			>
			<a href={bookUrl}>How to Book</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={`${homeUrl}#about`}>About Us</a>
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={`${homeUrl}#contact`}>Contact</a>
			<a
				class="button button-small"
				href={bookUrl}
				aria-current={active === 'book' ? 'page' : undefined}>Book now</a
			>
		</nav>
	</div>
</header>
