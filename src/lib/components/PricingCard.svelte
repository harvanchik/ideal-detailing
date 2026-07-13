<script lang="ts">
	import { resolve } from '$app/paths';
	import type { PricingPackage } from '$lib/pricing';

	let { detailPackage }: { detailPackage: PricingPackage } = $props();
</script>

<article
	class="pricing-card"
	id={detailPackage.slug}
	style={`--package-accent: ${detailPackage.accent}`}
>
	<div class="package-heading">
		<p>{detailPackage.name}</p>
		<div class="package-price"><span>$</span>{detailPackage.price}</div>
	</div>

	<div class="service-groups">
		<section>
			<h3>Interior</h3>
			<ul>
				{#each detailPackage.interior as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>

		<section>
			<h3>Exterior</h3>
			<ul>
				{#each detailPackage.exterior as item (item)}
					<li>{item}</li>
				{/each}
			</ul>
		</section>
	</div>

	<section class="add-ons">
		<h3>Add-ons</h3>
		<ul>
			{#each detailPackage.addOns as addOn (addOn.name)}
				<li><span>{addOn.name}</span><strong>${addOn.price}</strong></li>
			{/each}
		</ul>
	</section>

	<a class="package-button" href={resolve('/book')}>Book now</a>
</article>

<style>
	.pricing-card {
		display: flex;
		min-width: 0;
		flex-direction: column;
		padding: 1.2rem;
		scroll-margin-top: 6rem;
		border: 1px solid color-mix(in srgb, var(--package-accent), transparent 20%);
		border-radius: 0.72rem;
		background:
			linear-gradient(
				155deg,
				color-mix(in srgb, var(--package-accent), transparent 91%),
				transparent 34%
			),
			rgb(6 8 14 / 86%);
		box-shadow:
			inset 0 0 1.8rem color-mix(in srgb, var(--package-accent), transparent 94%),
			0 0 1.25rem color-mix(in srgb, var(--package-accent), transparent 84%);
		backdrop-filter: blur(12px);
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.pricing-card:hover {
		box-shadow:
			inset 0 0 2rem color-mix(in srgb, var(--package-accent), transparent 90%),
			0 0 2rem color-mix(in srgb, var(--package-accent), transparent 72%);
		transform: translateY(-4px);
	}

	.package-heading {
		min-height: 8.2rem;
		padding-bottom: 1rem;
		border-bottom: 1px solid #151c29;
		text-align: center;
	}

	.package-heading p {
		margin-bottom: 0.45rem;
		color: white;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-size: 1.4rem;
		font-style: italic;
		letter-spacing: 0.035em;
		line-height: 1;
		text-transform: uppercase;
	}

	.package-price {
		color: var(--package-accent);
		font-family: Impact, Haettenschweiler, sans-serif;
		font-size: clamp(3.8rem, 8vw, 5.25rem);
		font-style: italic;
		letter-spacing: 0.02em;
		line-height: 1;
		text-shadow: 0 0 1.2rem color-mix(in srgb, var(--package-accent), transparent 38%);
	}

	.package-price span {
		font-size: 0.52em;
		vertical-align: 0.58em;
	}

	.service-groups {
		display: grid;
		gap: 1.15rem;
		padding-block: 1.2rem;
	}

	h3 {
		margin-bottom: 0.55rem;
		color: var(--package-accent);
		font-family: inherit;
		font-size: 0.68rem;
		font-style: normal;
		font-weight: 900;
		letter-spacing: 0.11em;
		line-height: 1.2;
		text-transform: uppercase;
	}

	ul {
		display: grid;
		gap: 0.45rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.service-groups li {
		position: relative;
		padding-left: 1rem;
		color: #c0c8d5;
		font-size: 0.72rem;
		line-height: 1.35;
	}

	.service-groups li::before {
		position: absolute;
		left: 0;
		color: var(--package-accent);
		content: '✓';
		font-weight: 900;
	}

	.add-ons {
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid #151c29;
	}

	.add-ons h3 {
		text-align: center;
	}

	.add-ons ul {
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 0.4rem;
	}

	.add-ons li {
		display: flex;
		min-width: 0;
		min-height: 4.65rem;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		gap: 0.45rem;
		padding: 0.55rem 0.3rem;
		border: 1px solid color-mix(in srgb, var(--package-accent), transparent 58%);
		border-radius: 0.35rem;
		background: rgb(0 0 0 / 26%);
		color: #c5cdd9;
		font-size: 0.59rem;
		line-height: 1.22;
		text-align: center;
	}

	.add-ons strong {
		color: var(--package-accent);
		font-size: 0.8rem;
	}

	.package-button {
		display: grid;
		min-height: 2.75rem;
		place-items: center;
		margin-top: 1rem;
		border: 1px solid var(--package-accent);
		border-radius: 0.3rem;
		color: white;
		background: color-mix(in srgb, var(--package-accent), #02040a 35%);
		box-shadow: 0 0 1rem color-mix(in srgb, var(--package-accent), transparent 78%);
		font-size: 0.72rem;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.09em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.package-button:hover {
		filter: brightness(1.18);
	}

	@media (prefers-reduced-motion: reduce) {
		.pricing-card {
			transition: none;
		}
	}
</style>
