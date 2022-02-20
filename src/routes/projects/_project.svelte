<script>
	import SEO from '$lib/components/SEO.svelte';
	export const prerender = true;
	export let title;
	export let starting_date;
	export let description;
	// export let post;
	// export let timeToRead = Math.ceil(readingTime(post.body).minutes);
    // const categoryName = category && categories && categories[category] && categories[category];
	const metadescription = description;
</script>

<SEO {title} {metadescription} isArticle={false} publishedTime={starting_date} />

<div class="prose dark:prose-dark mx-auto pb-20">
	<h1 class="mb-0">{title}</h1>
	<p class="text-sm">
		
	</p>
	<slot />
</div>
