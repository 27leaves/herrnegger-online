<script>
    import "../lib/styles/app.css";
    import Header from '$lib/components/Header.svelte';
</script>

<div class="">
    <Header></Header>
    <main>
        <slot />
    </main>
</div>