<script context="module">
	export const load = async ({ fetch }) => {
		const getPosts = await fetch('/api/posts.json');
		const getCategories = await fetch('/api/categories.json');
		const categories = await getCategories.json();
		const posts = await getPosts.json();

		return {
			props: {
				posts,
				categories
			}
		};
	};
</script>

<script>
    import SEO from '$lib/components/SEO.svelte';
	export let posts, categories;
</script>

<SEO title="Blog" metadescription="Blog posts" isArticle={false} />

<div class="max-w-prose mx-auto">
	<h1>Blog</h1>
	<ul>
		{#each posts as post}
			<li>
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				{categories[post.meta.category].title}, {new Date(post.meta.date).toLocaleDateString(
					'de-DE'
				)}
			</li>
		{/each}
	</ul>
</div>
