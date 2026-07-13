<script lang="ts">
	import { resolve } from '$app/paths';
	import { site } from '$lib/site';
</script>

<svelte:head>
	<title>{site.name} | Mobile car detailing</title>
	<meta name="description" content={site.description} />
	<meta property="og:title" content={`${site.name} | Mobile car detailing`} />
	<meta property="og:description" content={site.description} />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<header class="site-header">
	<a class="brand" href={resolve('/')} aria-label={`${site.name} home`}>
		<span class="brand-mark" aria-hidden="true">ID</span>
		<span>{site.name}</span>
	</a>
	<nav aria-label="Primary navigation">
		<a href="#services">Services</a>
		<a href="#process">How it works</a>
		<a class="button button-small" href={resolve('/book')}>Book now</a>
	</nav>
</header>

<main>
	<section class="hero section-shell">
		<div class="hero-copy">
			<p class="eyebrow">Mobile detailing / We come to you</p>
			<h1>A cleaner car, without rearranging your day.</h1>
			<p class="lede">
				Professional mobile detailing at your home or workplace. Choose a service, pick a time, and
				leave the rest to us.
			</p>
			<div class="button-row">
				<a class="button" href={resolve('/book')}>Schedule a detail</a>
				<a class="button button-secondary" href="#services">Explore services</a>
			</div>
			<ul class="trust-list" aria-label="Service highlights">
				<li>Mobile service</li>
				<li>Simple online booking</li>
				<li>Careful, professional work</li>
			</ul>
		</div>
		<div class="hero-placeholder" aria-label="Future brand photography placeholder">
			<div>
				<span>Brand photography</span>
				<p>Ready for your vehicle imagery and visual direction.</p>
			</div>
		</div>
	</section>

	<section class="section section-shell" id="services">
		<div class="section-heading">
			<p class="eyebrow">Services</p>
			<h2>A flexible starting point for your service menu.</h2>
			<p>Packages, prices, and exact inclusions can be swapped in once your content is ready.</p>
		</div>
		<div class="card-grid">
			{#each site.services as service (service.number)}
				<article class="card">
					<span class="card-number" aria-hidden="true">{service.number}</span>
					<h3>{service.name}</h3>
					<p>{service.description}</p>
					<a href={resolve('/book')}>Book this service <span aria-hidden="true">-&gt;</span></a>
				</article>
			{/each}
		</div>
	</section>

	<section class="section section-muted" id="process">
		<div class="section-shell process-layout">
			<div class="section-heading">
				<p class="eyebrow">How it works</p>
				<h2>From booking to spotless in three simple steps.</h2>
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

	<section class="section section-shell final-cta">
		<p class="eyebrow">Ready when you are</p>
		<h2>Give your car the attention it deserves.</h2>
		<p>Online scheduling keeps booking quick on any device.</p>
		<a class="button" href={resolve('/book')}>Book an appointment</a>
	</section>
</main>

<footer class="site-footer section-shell">
	<div>
		<strong>{site.name}</strong>
		<p>{site.description}</p>
	</div>
	<div class="footer-links">
		<a href={resolve('/book')}>Book</a>
		<a href="mailto:{site.email}">{site.email}</a>
	</div>
</footer>
