<script>
	import SEO from '$lib/components/SEO.svelte';
	export const prerender = true;
	export let title;
	export let date;
	export let description;
    // export let post;
	// export let timeToRead = Math.ceil(readingTime(post.body).minutes);
	const metadescription = description;
</script>

<SEO
	{title}
	{metadescription}
    isArticle={true}
    publishedTime={date}
/>

<div class="prose dark:prose-dark mx-auto">
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<slot />
</div>
