<script>
	export let title;
	export let date;
</script>

<div class="prose dark:prose-dark mx-auto">
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<slot />
</div>
