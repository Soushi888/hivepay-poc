<script lang="ts">
	import { productStore } from '../stores/product.store';
	import ProductCard from './ProductCard.svelte';
</script>

<section>
	<div class="grid">
		{#each $productStore as product}
			<ProductCard {product} />
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
