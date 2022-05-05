import { type Writable, writable } from 'svelte/store';

export type Product = {
	name: string,
	description: string,
	price: number,
	currency: string
}

function ProductStore() {
	const products: Writable<Product[]> = writable([
		{
			name: 'product 1',
			description: 'lorem ipsum',
			price: 2,
			currency: 'HBD'
		},
		{
			name: 'product 2',
			description: 'lorem ipsum',
			price: 5,
			currency: "HIVE"
		}
	]);

	const updateProducts = (data: Product[]) => {
		products.set(data);
	};


	return { products, updateProducts };
}

export default ProductStore();
