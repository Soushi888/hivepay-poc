import { type Writable, writable } from 'svelte/store';

export type Product = {
	name: string;
	description: string;
	imageUrl: string;
	price: number;
	baseCurrency: string;
	payCurrency: string | string[];
};

export const productStore: Writable<Product[]> = writable([
	{
		name: 'Chandail',
		description: 'Chandail à manches courtes.',
		imageUrl: 'https://cdn.pixabay.com/photo/2015/12/14/21/59/t-shirt-template-1093333_960_720.png',
		price: 5,
		baseCurrency: 'USD',
		payCurrency: 'HBD'
	},
	{
		name: 'Livre',
		description: 'Livre passionnant à lire.',
		imageUrl: 'https://cdn.pixabay.com/photo/2014/04/02/14/12/book-306468_960_720.png',
		price: 5,
		baseCurrency: 'CAD',
		payCurrency: 'HIVE'
	},
	{
		name: 'Sandwich',
		description: 'Délicieux sandwich à manger.',
		imageUrl: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_960_720.jpg',
		price: 8,
		baseCurrency: 'CAD',
		payCurrency: ['HIVE', 'HBD']
	},
	{
		name: "Abonnement à l'École du Consensus Blockchain",
		description: "Abonnement de 1 an à l'École du Consensus Blockchain",
		imageUrl:
			'https://images.squarespace-cdn.com/content/v1/6286accbc0a5324bacbd9249/0d84477b-8e31-46c1-a3a1-1584cd4e7026/ECB_banner_1.png?format=1000w',
		price: 120,
		baseCurrency: 'CAD',
		payCurrency: ['HIVE', 'HBD', 'THIA']
	}
]);
