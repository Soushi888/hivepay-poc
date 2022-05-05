<script context='module' lang='ts'>
	export const prerender = true;
</script>

<script>
	import Header from '../components/Header.svelte';
	import ProductsList from '../components/ProductsList.svelte';
</script>

<svelte:head>
	<title>HivePay PoC</title>
</svelte:head>

<section>
	<Header />
	<ProductsList />
</section>
