<script context="module">
	/** @type {import('@sveltejs/kit').ErrorLoad} */
	export function load({ error, status }) {
        console.log(error, status);
		return {
			props: {
				message: error.message,
                status: status,
			}
		};
	}
</script>

<script>
	export let message, status;
</script>

<div class="max-w-prose mx-auto">
    {#if status === 404}
        <h1>Oh no!</h1>
        <p>This page does not exist (yet?)</p>
    {:else}
        <h1>{status}</h1>
        <p>{message}</p>
    {/if}

</div>