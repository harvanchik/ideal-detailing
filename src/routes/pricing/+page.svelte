<script lang="ts">
	import PricingCard from '$lib/components/PricingCard.svelte';
	import RestoreCard from '$lib/components/RestoreCard.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { plasticRestore, pricingPackages, subscription, valuePropositions } from '$lib/pricing';
</script>

<svelte:head>
	<title>Pricing | Ideal Detailing</title>
	<meta
		name="description"
		content="Explore Ideal Detailing mobile car detailing packages, add-ons, plastic restoration, and monthly service."
	/>
	<meta property="og:title" content="Pricing | Ideal Detailing" />
	<meta
		property="og:description"
		content="Mobile detailing packages from $75, plus restoration and monthly service options."
	/>
	<meta property="og:image" content="https://ideal-detailing.vercel.app/hero-detailing.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<SiteHeader active="pricing" />

<main>
	<section class="pricing-hero">
		<img
			src="/hero-detailing.jpg"
			alt="Glossy black sedan with blue headlights and neon light streaks"
			fetchpriority="high"
		/>
		<div class="pricing-hero-overlay" aria-hidden="true"></div>
		<div class="pricing-hero-content pricing-shell">
			<p class="eyebrow">Premium mobile detailing</p>
			<h1>Pricing</h1>
			<p>Quality you can see. Results you'll love.</p>
		</div>
	</section>

	<section class="pricing-section pricing-shell" aria-labelledby="packages-heading">
		<div class="pricing-intro">
			<div>
				<p class="eyebrow">Choose your detail</p>
				<h2 id="packages-heading">Packages built for every level of clean.</h2>
			</div>
			<p>Every package is completed at your location. Add-ons can be selected when you book.</p>
		</div>

		<div class="pricing-grid">
			{#each pricingPackages as detailPackage (detailPackage.slug)}
				<PricingCard {detailPackage} />
			{/each}
			<RestoreCard service={plasticRestore} />
		</div>
	</section>

	<section class="subscription-wrap">
		<div class="subscription pricing-shell">
			<div class="subscription-price">
				<p>Monthly subscription</p>
				<strong>${subscription.price}<span>/ month</span></strong>
			</div>
			<div class="subscription-fact">
				<span>We come</span>
				<strong>{subscription.visits} times</strong>
				<small>a month</small>
			</div>
			<div class="subscription-fact availability">
				<span>Limited availability</span>
				<strong>{subscription.availability} people</strong>
				<small>right now</small>
			</div>
			<ul>
				{#each subscription.benefits as benefit (benefit)}
					<li>{benefit}</li>
				{/each}
			</ul>
		</div>
	</section>

	<section class="value-strip pricing-shell" aria-label="Why choose Ideal Detailing">
		{#each valuePropositions as proposition, index (proposition.title)}
			<div>
				<span aria-hidden="true">0{index + 1}</span>
				<p><strong>{proposition.title}</strong><em>{proposition.detail}</em></p>
			</div>
		{/each}
	</section>
</main>

<footer class="site-footer pricing-shell" id="contact">
	<div>
		<strong>Ideal Detailing</strong>
		<p>Convenient mobile car detailing, booked around your schedule.</p>
	</div>
	<div class="footer-links">
		<a href="mailto:hello@example.com">hello@example.com</a>
	</div>
</footer>

<style>
	.pricing-shell {
		width: min(100% - 2rem, 90rem);
		margin-inline: auto;
	}

	.pricing-hero {
		position: relative;
		min-height: 26rem;
		overflow: hidden;
		border-bottom: 1px solid rgb(18 107 255 / 28%);
		background: #02040a;
	}

	.pricing-hero img,
	.pricing-hero-overlay {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	.pricing-hero img {
		object-fit: cover;
		object-position: 68% center;
		opacity: 0.72;
	}

	.pricing-hero-overlay {
		background:
			linear-gradient(90deg, #02040a 4%, rgb(2 4 10 / 84%) 36%, rgb(2 4 10 / 16%) 78%),
			linear-gradient(0deg, #02040a, transparent 45%);
	}

	.pricing-hero-content {
		position: relative;
		z-index: 1;
		display: grid;
		align-content: center;
		min-height: 26rem;
		padding-block: 3rem;
	}

	.pricing-hero h1 {
		margin-bottom: 0.7rem;
		font-size: clamp(5rem, 19vw, 10rem);
	}

	.pricing-hero-content > p:last-child {
		margin: 0;
		color: #d8e5f8;
		font-size: clamp(1rem, 3vw, 1.3rem);
		font-style: italic;
		font-weight: 800;
		letter-spacing: 0.04em;
	}

	.pricing-section {
		padding-block: 5.5rem;
	}

	.pricing-intro {
		display: grid;
		gap: 1rem;
		margin-bottom: 2.8rem;
	}

	.pricing-intro > p {
		max-width: 34rem;
	}

	.pricing-grid {
		display: grid;
		gap: 1rem;
	}

	.subscription-wrap {
		padding-block: 1rem;
		border-block: 1px solid rgb(18 107 255 / 26%);
		background:
			linear-gradient(105deg, rgb(18 107 255 / 12%), transparent 44%, rgb(240 165 26 / 8%)), #040710;
	}

	.subscription {
		display: grid;
		gap: 1.25rem;
		padding-block: 2rem;
	}

	.subscription-price p,
	.subscription-fact span {
		margin-bottom: 0.35rem;
		color: #83b8ff;
		font-size: 0.7rem;
		font-style: italic;
		font-weight: 900;
		letter-spacing: 0.09em;
		text-transform: uppercase;
	}

	.subscription-price strong {
		display: block;
		color: white;
		font-family: Impact, Haettenschweiler, sans-serif;
		font-size: clamp(3.2rem, 11vw, 5rem);
		font-style: italic;
		line-height: 0.95;
		text-shadow: 0 0 1rem rgb(18 107 255 / 38%);
	}

	.subscription-price strong span {
		margin-left: 0.35rem;
		color: #f0a51a;
		font-family: 'Arial Narrow', Arial, sans-serif;
		font-size: 0.25em;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	.subscription-fact {
		display: grid;
		align-content: center;
		padding-left: 1rem;
		border-left: 1px solid #213356;
	}

	.subscription-fact strong {
		font-family: Impact, Haettenschweiler, sans-serif;
		font-size: 2.1rem;
		font-style: italic;
		letter-spacing: 0.03em;
		line-height: 1;
		text-transform: uppercase;
	}

	.subscription-fact small {
		margin-top: 0.3rem;
		color: #9ba7b9;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.availability strong {
		color: #f0a51a;
	}

	.subscription ul {
		display: grid;
		align-content: center;
		gap: 0.55rem;
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.subscription li {
		color: #c5cedb;
		font-size: 0.76rem;
		font-weight: 800;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.subscription li::before {
		margin-right: 0.55rem;
		color: #f0a51a;
		content: '◆';
	}

	.value-strip {
		display: grid;
		margin-block: 1rem;
		border: 1px solid #17233a;
		border-radius: 0.7rem;
		background: rgb(4 7 14 / 82%);
	}

	.value-strip > div {
		display: grid;
		grid-template-columns: 2rem 1fr;
		align-items: center;
		gap: 0.7rem;
		padding: 1.15rem;
		border-bottom: 1px solid #17233a;
	}

	.value-strip > div:last-child {
		border-bottom: 0;
	}

	.value-strip span {
		color: #4b9aff;
		font-family: Impact, sans-serif;
		font-style: italic;
	}

	.value-strip p {
		display: grid;
		gap: 0.15rem;
		margin: 0;
		font-size: 0.75rem;
		letter-spacing: 0.06em;
		line-height: 1.25;
		text-transform: uppercase;
	}

	.value-strip strong {
		color: white;
	}

	.value-strip em {
		color: #4b9aff;
		font-style: normal;
		font-weight: 900;
	}

	@media (min-width: 44rem) {
		.pricing-intro {
			grid-template-columns: 1.1fr 0.9fr;
			align-items: end;
			gap: 4rem;
		}

		.pricing-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.subscription {
			grid-template-columns: repeat(2, 1fr);
		}

		.value-strip {
			grid-template-columns: repeat(3, 1fr);
		}

		.value-strip > div {
			border-right: 1px solid #17233a;
			border-bottom: 0;
		}

		.value-strip > div:last-child {
			border-right: 0;
		}
	}

	@media (min-width: 80rem) {
		.pricing-grid {
			grid-template-columns: repeat(5, minmax(0, 1fr));
		}

		.subscription {
			grid-template-columns: 1.35fr 0.8fr 0.9fr 1.05fr;
			align-items: stretch;
		}
	}
</style>
