<script lang='ts'>
	import  ProductStore from '../stores/product.store';
	import ProductCard from './ProductCard.svelte';
	let {products} = ProductStore
</script>

<section>
	<div class='grid'>
		{#each $products as product}
			<ProductCard product={product} />
		{/each}
	</div>
</section>

<style>
    section .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
    }
</style>
