<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { pricingPackages } from '$lib/pricing';
	import { site } from '$lib/site';

	const previewFeatures = (detailPackage: (typeof pricingPackages)[number]) =>
		[...detailPackage.interior, ...detailPackage.exterior].slice(0, 3);
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

<SiteHeader active="home" />

<main>
	<section class="hero">
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
					Professional mobile detailing at your home or workplace. Choose a service, pick a time,
					and leave the rest to us.
				</p>
				<div class="button-row">
					<a class="button" href={resolve('/book')}>Schedule a detail</a>
					<a class="button button-secondary" href="#services">Explore services</a>
				</div>
			</div>
		</div>
		<div class="hero-stats section-shell" aria-label="Service highlights">
			<div><span>01</span><strong>We come to you</strong><small>Home or workplace</small></div>
			<div>
				<span>02</span><strong>Book in minutes</strong><small>Simple online scheduling</small>
			</div>
			<div><span>03</span><strong>Premium finish</strong><small>Care in every detail</small></div>
		</div>
	</section>

	<section class="section section-shell" id="services">
		<div class="section-heading split-heading">
			<div>
				<p class="eyebrow">Detail packages</p>
				<h2>Choose your level of clean.</h2>
			</div>
			<p>Four levels of mobile detailing, starting at $75. Choose your package and book online.</p>
		</div>
		<div class="card-grid home-package-grid">
			{#each pricingPackages as detailPackage, index (detailPackage.slug)}
				<article class="card" style={`--card-accent: ${detailPackage.accent}`}>
					<div class="card-topline">
						<span class="card-number" aria-hidden="true">Package 0{index + 1}</span>
						<span class="card-status">${detailPackage.price}</span>
					</div>
					<h3>{detailPackage.name}</h3>
					<p>Professional mobile service completed at your home or workplace.</p>
					<ul>
						{#each previewFeatures(detailPackage) as feature (feature)}
							<li>{feature}</li>
						{/each}
					</ul>
					<a href={resolve('/pricing')}>View package <span aria-hidden="true">-&gt;</span></a>
				</article>
			{/each}
		</div>
	</section>

	<section class="section section-muted" id="process">
		<div class="section-shell process-layout">
			<div class="section-heading">
				<p class="eyebrow">How it works</p>
				<h2>Showroom results. On your schedule.</h2>
				<p>Three quick steps between you and a cleaner car.</p>
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
						<h3>Pick a convenient time</h3>
						<p>Book online through a simple Cal.com flow.</p>
					</div>
				</li>
				<li>
					<span>03</span>
					<div>
						<h3>We come to you</h3>
						<p>Meet us at your home, office, or approved location.</p>
					</div>
				</li>
			</ol>
		</div>
	</section>

	<section class="final-cta-shell" id="about">
		<div class="section-shell final-cta">
			<div>
				<p class="eyebrow">Ready when you are</p>
				<h2>Give your car the attention it deserves.</h2>
			</div>
			<div class="final-cta-action">
				<p>Online scheduling keeps booking quick on any device.</p>
				<a class="button" href={resolve('/book')}>Book an appointment</a>
			</div>
		</div>
	</section>
</main>

<footer class="site-footer section-shell" id="contact">
	<a class="brand footer-brand" href={resolve('/')} aria-label={`${site.name} home`}>
		<span class="brand-mark" aria-hidden="true">ID</span>
		<span class="brand-copy"><strong>IDEAL</strong><small>DETAILING</small></span>
	</a>
	<p>{site.description}</p>
	<div class="footer-links">
		<a href={resolve('/book')}>Book</a>
		<a href="mailto:{site.email}">{site.email}</a>
	</div>
</footer>
