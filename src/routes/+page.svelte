<script lang="ts">
	import PricingCard from '$lib/components/PricingCard.svelte';
	import RestoreCard from '$lib/components/RestoreCard.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { plasticRestore, pricingPackages, subscription, valuePropositions } from '$lib/pricing';
	import { site } from '$lib/site';

	const bookingUrl = import.meta.env.VITE_CALCOM_URL?.trim();
</script>

<svelte:head>
	<title>{site.name} | Mobile car detailing</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={`${site.name} | Mobile car detailing`} />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://ideal-detailing.vercel.app/hero-detailing.jpg" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<SiteHeader />

<main id="main-content">
	<section class="hero" id="home">
		<img
			class="hero-image"
			src="/hero-detailing.jpg"
			alt="Freshly detailed black performance sedan illuminated by electric blue lights"
			fetchpriority="high"
		/>
		<div class="hero-overlay" aria-hidden="true"></div>
		<div class="hero-lines" aria-hidden="true"></div>
		<div class="hero-content section-shell">
			<div class="hero-copy">
				<p class="eyebrow">Mobile detailing / We come to you</p>
				<h1><span>A cleaner car.</span><em>Zero lost time.</em></h1>
				<p class="lede">
					Professional mobile detailing at your home or workplace, scheduled around your day.
				</p>
				<div class="button-row">
					<a class="button" href="#booking">Schedule a detail</a>
					<a class="button button-secondary" href="#pricing">View pricing</a>
				</div>
			</div>
		</div>
	</section>

	<section
		class="pricing-section pricing-shell anchor-section"
		id="pricing"
		aria-labelledby="pricing-heading"
	>
		<div class="pricing-intro">
			<div>
				<p class="eyebrow">Pricing</p>
				<h2 id="pricing-heading">Choose your level of clean.</h2>
			</div>
			<p>Every package is completed at your location. Add-ons can be selected when you book.</p>
		</div>

		<div class="pricing-grid">
			{#each pricingPackages as detailPackage (detailPackage.slug)}
				<PricingCard {detailPackage} />
			{/each}
			<RestoreCard service={plasticRestore} />
		</div>

		<div class="subscription">
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

		<div class="value-strip" aria-label="Why choose Ideal Detailing">
			{#each valuePropositions as proposition, index (proposition.title)}
				<div>
					<span aria-hidden="true">0{index + 1}</span>
					<p><strong>{proposition.title}</strong><em>{proposition.detail}</em></p>
				</div>
			{/each}
		</div>
	</section>

	<section
		class="section section-muted anchor-section"
		id="how-to-book"
		aria-labelledby="booking-steps-heading"
	>
		<div class="section-shell process-layout">
			<div class="section-heading">
				<p class="eyebrow">How to book</p>
				<h2 id="booking-steps-heading">Three steps. Showroom results.</h2>
				<p>A quick, straightforward path from choosing a service to enjoying a cleaner car.</p>
			</div>
			<ol class="steps">
				<li>
					<span>01</span>
					<div>
						<h3>Choose your service</h3>
						<p>Select the package that fits your vehicle.</p>
					</div>
				</li>
				<li>
					<span>02</span>
					<div>
						<h3>Pick a time</h3>
						<p>Use the calendar below to find an available appointment.</p>
					</div>
				</li>
				<li>
					<span>03</span>
					<div>
						<h3>Confirm your location</h3>
						<p>Tell us where your vehicle will be ready for service.</p>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<section
		class="about-section section-shell anchor-section"
		id="about"
		aria-labelledby="about-heading"
	>
		<div>
			<p class="eyebrow">About us</p>
			<h2 id="about-heading">Care you can see in every finish.</h2>
		</div>
		<div class="about-copy">
			<p>
				Ideal Detailing is a mobile automotive care company built around careful workmanship and
				respect for every vehicle.
			</p>
			<p>
				Our goal is simple: deliver consistent, professional results while making the experience
				easy from first click to final inspection.
			</p>
		</div>
	</section>

	<section class="booking-section anchor-section" id="booking" aria-labelledby="calendar-heading">
		<div class="section-shell">
			<div class="booking-heading">
				<p class="eyebrow">Book now</p>
				<h2 id="calendar-heading">Choose a time that works for you.</h2>
			</div>

			{#if bookingUrl}
				<div class="booking-frame">
					<iframe src={bookingUrl} title={`Book an appointment with ${site.name}`}></iframe>
				</div>
				<p class="booking-fallback">
					Trouble with the calendar?
					<a href={bookingUrl} target="_blank" rel="noreferrer">Open booking in a new tab</a>.
				</p>
			{:else}
				<div class="booking-placeholder">
					<span class="status-pill">Calendar coming soon</span>
					<h3>Online scheduling is being connected.</h3>
					<p>
						For now, email <a href={`mailto:${site.email}`}>{site.email}</a> to request an appointment.
					</p>
				</div>
			{/if}
		</div>
	</section>
</main>

<footer class="site-footer section-shell anchor-section" id="contact">
	<a class="brand footer-brand" href="#home" aria-label={`${site.name} home`}>
		<span class="brand-mark" aria-hidden="true">ID</span>
		<span class="brand-copy"><strong>IDEAL</strong><small>DETAILING</small></span>
	</a>
	<div>
		<strong>Contact</strong>
		<p>Questions about a service or appointment? We’re happy to help.</p>
	</div>
	<div class="footer-links">
		<a href={`mailto:${site.email}`}>{site.email}</a>
		<a href="#booking">Book now</a>
	</div>
</footer>

<style>
	.pricing-shell {
		width: min(100% - 2rem, 90rem);
		margin-inline: auto;
	}

	.pricing-section {
		padding-block: 6rem 1rem;
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

	.subscription {
		display: grid;
		gap: 1.25rem;
		margin-top: 1.5rem;
		padding: 2rem 1.25rem;
		border: 1px solid rgb(18 107 255 / 30%);
		border-radius: 0.7rem;
		background:
			linear-gradient(105deg, rgb(18 107 255 / 12%), transparent 44%, rgb(240 165 26 / 8%)), #040710;
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
		margin-block: 1rem 5rem;
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

	.about-section {
		display: grid;
		gap: 2rem;
		padding-block: 6rem;
	}

	.about-section h2 {
		margin-bottom: 0;
	}
	.about-copy {
		max-width: 38rem;
	}
	.about-copy p:last-child {
		margin-bottom: 0;
	}

	.booking-section {
		padding-block: 5.5rem;
		border-block: 1px solid rgb(18 107 255 / 20%);
		background: linear-gradient(135deg, rgb(18 107 255 / 8%), transparent 38%), #040710;
	}

	.booking-heading {
		max-width: 45rem;
		margin-bottom: 2rem;
	}
	.booking-heading h2 {
		max-width: 11ch;
	}

	.booking-placeholder a {
		color: var(--accent-bright);
	}

	.site-footer > div > strong {
		display: block;
		margin-bottom: 0.35rem;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
		text-transform: uppercase;
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
		.about-section {
			grid-template-columns: 0.9fr 1.1fr;
			gap: 5rem;
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
