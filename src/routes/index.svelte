<script>
	import { page } from '$app/stores';
	import Header from '../components/Header.svelte';
	import ProductsList from '../components/ProductsList.svelte';
	import Cancel from '../components/Cancel.svelte';

	let isCancel = $page.url.searchParams.get('cancel');
	let isSucces = $page.url.searchParams.get('success');
</script>

<svelte:head>
	<title>HivePay PoC</title>
</svelte:head>

<section>
	<Header />
	<ProductsList />
	{#if (isCancel)}
		<Cancel />
	{/if}
	{#if (isSucces)}
		<Cancel />
	{/if}
</section>
