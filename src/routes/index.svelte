<script context='module' lang='ts'>
	export const prerender = true;
</script>

<script>
import Header from '../components/Header.svelte';
import ProductList from '../components/ProductList.svelte';
</script>

<svelte:head>
	<title>Hive Pay PoC</title>
</svelte:head>

<section>
	<Header />
	<ProductList />
</section>
