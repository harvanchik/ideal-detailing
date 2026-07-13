<script lang="ts">
	import { resolve } from '$app/paths';

	let {
		service
	}: {
		service: {
			name: string;
			price: number;
			accent: string;
			image: string;
			benefits: readonly string[];
		};
	} = $props();
</script>

<article class="restore-card" style={`--package-accent: ${service.accent}`}>
	<div class="restore-heading">
		<p>{service.name}</p>
		<span>Before / After</span>
	</div>

	<figure>
		<img
			src={service.image}
			alt="Faded vehicle bumper plastic beside restored rich black plastic"
		/>
		<div class="image-labels" aria-hidden="true"><span>Before</span><span>After</span></div>
	</figure>

	<ul>
		{#each service.benefits as benefit (benefit)}
			<li>{benefit}</li>
		{/each}
	</ul>

	<div class="restore-price"><small>A full car</small><strong>${service.price}</strong></div>
	<a class="restore-button" href={resolve('/book')}>Book now</a>
</article>

<style>
	.restore-card {
		display: flex;
		min-width: 0;
		flex-direction: column;
		padding: 1.2rem;
		border: 1px solid color-mix(in srgb, var(--package-accent), transparent 20%);
		border-radius: 0.72rem;
		background: linear-gradient(155deg, rgb(18 107 255 / 10%), transparent 34%), rgb(6 8 14 / 86%);
		box-shadow:
			inset 0 0 1.8rem rgb(18 107 255 / 6%),
			0 0 1.25rem rgb(18 107 255 / 18%);
		backdrop-filter: blur(12px);
		transition:
			transform 180ms ease,
			box-shadow 180ms ease;
	}

	.restore-card:hover {
		box-shadow:
			inset 0 0 2rem rgb(18 107 255 / 10%),
			0 0 2rem rgb(18 107 255 / 30%);
		transform: translateY(-4px);
	}

	.restore-heading {
		min-height: 8.2rem;
		padding-bottom: 1rem;
		text-align: center;
	}

	.restore-heading p {
		margin-bottom: 0.55rem;
		color: white;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-size: 1.5rem;
		font-style: italic;
		letter-spacing: 0.035em;
		line-height: 1;
		text-transform: uppercase;
	}

	.restore-heading span {
		color: var(--package-accent);
		font-size: 0.72rem;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	figure {
		position: relative;
		margin: 0;
		overflow: hidden;
		border: 1px solid #274e8c;
		border-radius: 0.4rem;
	}

	img {
		display: block;
		width: 100%;
		aspect-ratio: 3 / 2;
		object-fit: cover;
	}

	.image-labels {
		position: absolute;
		top: 0.45rem;
		right: 0.45rem;
		left: 0.45rem;
		display: flex;
		justify-content: space-between;
	}

	.image-labels span {
		padding: 0.2rem 0.38rem;
		border: 1px solid rgb(255 255 255 / 22%);
		border-radius: 0.2rem;
		color: white;
		background: rgb(0 0 0 / 68%);
		font-size: 0.56rem;
		font-weight: 900;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	ul {
		display: grid;
		gap: 0.6rem;
		margin: 1.2rem 0;
		padding: 0;
		list-style: none;
	}

	li {
		position: relative;
		padding-left: 1.1rem;
		color: #c0c8d5;
		font-size: 0.72rem;
		line-height: 1.35;
	}

	li::before {
		position: absolute;
		left: 0;
		color: var(--package-accent);
		content: '✓';
		font-weight: 900;
	}

	.restore-price {
		display: grid;
		place-items: center;
		margin-top: auto;
		padding-top: 1rem;
		border-top: 1px solid #151c29;
	}

	.restore-price small {
		color: white;
		font-size: 0.68rem;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.restore-price strong {
		color: var(--package-accent);
		font-family: Impact, Haettenschweiler, sans-serif;
		font-size: 4.6rem;
		font-style: italic;
		line-height: 1;
		text-shadow: 0 0 1.2rem rgb(18 107 255 / 55%);
	}

	.restore-button {
		display: grid;
		min-height: 2.75rem;
		place-items: center;
		margin-top: 1rem;
		border: 1px solid var(--package-accent);
		border-radius: 0.3rem;
		color: white;
		background: #0c57ce;
		box-shadow: 0 0 1rem rgb(18 107 255 / 22%);
		font-size: 0.72rem;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.09em;
		text-decoration: none;
		text-transform: uppercase;
	}

	.restore-button:hover {
		filter: brightness(1.18);
	}

	@media (prefers-reduced-motion: reduce) {
		.restore-card {
			transition: none;
		}
	}
</style>
