<script context="module">
	export const load = async ({ fetch }) => {
		const getPosts = await fetch('/api/posts.json');
		const posts = await getPosts.json();

		return {
			props: {
				posts,
			}
		};
	};
</script>

<script>
    import SEO from '$lib/components/SEO.svelte';
	export let posts;
</script>

<SEO title="Blog of Johannes Herrnegger" metadescription="Johannes writes about personal development and software development." isArticle={false} />

<div class="max-w-prose mx-auto">
	<h1>Blog</h1>
	<ul class="list-disc ml-6">
		{#each posts as post}
			<li class="my-5">
				<h2>
					<a href={post.path}>
						{post.meta.title}
					</a>
				</h2>
				{post.category.title}, {post.meta.readingTime.text}, {new Date(post.meta.date).toLocaleDateString(
					'de-DE'
				)}
			</li>
		{/each}
	</ul>
</div>
