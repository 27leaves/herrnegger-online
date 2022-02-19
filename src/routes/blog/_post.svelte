<script context="module">
    // This is not called ATM. Wait for mdsvex team to respond:
    // https://github.com/pngwn/MDsveX/issues/423
	export const load = async ({ fetch }) => {
		const getCategories = await fetch('/api/categories.json');
		const categories = await getCategories.json();

		return {
			props: {
				categories
			}
		};
	};
</script>

<script>
    import {get as getCategories} from '../api/categories.json';
	import SEO from '$lib/components/SEO.svelte';
	export const prerender = true;
	export let title;
	export let date;
	export let description;
	export let readingTime;
	export let category;
	// export let post;
	// export let timeToRead = Math.ceil(readingTime(post.body).minutes);
    // const categoryName = category && categories && categories[category] && categories[category];
	const metadescription = description;
</script>

<SEO {title} {metadescription} isArticle={true} publishedTime={date} />

<div class="prose dark:prose-dark mx-auto">
	<h1 class="mb-0">{title}</h1>
	<p class="text-sm">
		{readingTime.text}, Published on {new Date(date).toLocaleDateString()}
	</p>
	<slot />
</div>
