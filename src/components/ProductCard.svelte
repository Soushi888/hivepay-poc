<script lang='ts'>
	import type { Product } from '../stores/product.store';
	import HivePay from './HivePay.svelte';

	export let product: Product;
</script>

<div class='product-card'>
	<h2>{product.name}</h2>
	<img src={product.imageUrl} alt={product.name}>
	<p>{product.description}</p>
	<p>Prix : <b>{product.price} {product.baseCurrency}</b></p>
	<p>Payé en : <b>{product.payCurrency}</b></p>
	<div class='hivepay'>
		<HivePay product={product} />
	</div>

</div>

<style>
    .product-card {
        background: antiquewhite;
        padding: 20px;
    }

    .product-card h2 {
        text-align: center;
        margin-bottom: 20px;
    }

    .product-card img {
        display: block;
        height: 200px;
        margin: auto auto 20px;
    }

    .product-card > p:not(:last-of-type) {
        margin-bottom: 5px;
    }

    .hivepay {
			margin-top: 20px;
    }
</style>
