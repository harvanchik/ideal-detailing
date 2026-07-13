<script lang="ts">
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import { site } from '$lib/site';

	const bookingUrl = import.meta.env.VITE_CALCOM_URL?.trim();
</script>

<svelte:head>
	<title>Book an appointment | {site.name}</title>
	<meta
		name="description"
		content={`Schedule a mobile car detailing appointment with ${site.name}.`}
	/>
</svelte:head>

<SiteHeader active="book" />

<main class="booking-page section-shell">
	<div class="booking-heading">
		<p class="eyebrow">Online booking</p>
		<h1>Choose a time that works for you.</h1>
		<p>Appointments will appear here once your Cal.com booking link is added.</p>
	</div>

	{#if bookingUrl}
		<div class="booking-frame">
			<iframe src={bookingUrl} title={`Book an appointment with ${site.name}`}></iframe>
		</div>
		<p class="booking-fallback">
			Trouble with the calendar?
			<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -->
			<a href={bookingUrl} target="_blank" rel="noreferrer">Open booking in a new tab</a>.
		</p>
	{:else}
		<section class="booking-placeholder">
			<span class="status-pill">Setup needed</span>
			<h2>Your booking calendar will live here.</h2>
			<p>
				Add your public Cal.com event URL as <code>VITE_CALCOM_URL</code> to enable the embedded calendar.
				No site code changes are needed.
			</p>
		</section>
	{/if}
</main>
