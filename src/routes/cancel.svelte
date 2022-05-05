<script>
	import { onMount } from 'svelte';

	onMount(() => setTimeout(() => window.close(), 1500));
</script>

<section>
	<h3>Achat annulé !</h3>
</section>

<style>
    section {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
    }

    h3 {
        margin-top: 20px;
        color: red;
        font-size: 2rem;
    }
</style>
