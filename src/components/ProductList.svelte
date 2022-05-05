<script lang='ts'>
	import  ProductStore from '../stores/product.store';
	let {products} = ProductStore
</script>

<section>
	<div class='grid'>
		{#each $products as product}
			<div class='product-card'>
				<h2>{product.name}</h2>
				<p>{product.description}</p>
				<p>Prix : <b>{product.price} {product.currency}</b></p>
			</div>
		{/each}
	</div>
</section>

<style>
    section .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 80px;
    }

    section .product-card {
        background: antiquewhite;
        height: 300px;
    }
</style>
