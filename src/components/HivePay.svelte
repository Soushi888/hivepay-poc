<script lang='ts'>
	import { page } from '$app/stores';
	import type { Product } from '../stores/product.store';

	export let product: Product;
	let { name, description, price, baseCurrency, payCurrency } = product;

	let form;
	let location = $page.url.origin;
	let merchantImage = 'https://images.hive.blog/p/FxX5caie56ynwsjysm2XuNozdMysq1YNDRbt9X9VeerNm1981Q9QbBMAae56reruh3oPEPxXcntWKcGMSHj6xjDsn1Q6pWLBn3bCbY8qCcCe?width=128&height=128';
	let apiUrl = 'https://hivepay.io/purchase/';

	function openHivePayWindow(evt: Event) {
		evt.preventDefault();
		window.open(apiUrl, 'hivepay-popup', 'width=600,height=800');
		form.submit();
	}
</script>

<form method='post' action='{apiUrl}' target='hivepay-popup' bind:this={form}>
	<input type='hidden' name='merchant' value='hivequebec'>
	<input type='hidden' name='item_name' value={name}>
	<input type='hidden' name='description' value={description}>
	<input type='hidden' name='notify_url' value=''>
	<input type='hidden' name='return_url' value='{location}/success'>
	<input type='hidden' name='amount' value={price}>
	<input type='hidden' name='base_currency' value={baseCurrency}>
	<input type='hidden' name='merchant_email' value='sacha.pignot@protonmail.com'>
	<input type='hidden' name='merchant_image' value='{merchantImage}'>
	<input type='hidden' name='pay_currency' value={payCurrency}>
	<input type='hidden' name='merchant_name' value='Hive Québec'>
	<input type='hidden' name='cancel_url' value='{location}/cancel'>
	<input type='image' on:click={openHivePayWindow} src='https://hivepay.io/buttons/16.png' alt='Pay With HivePay'>
</form>

