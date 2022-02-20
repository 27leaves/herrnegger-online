<script context="module">
	export const load = async ({ fetch }) => {
		const getProjects = await fetch('/api/projects.json');
		const projects = await getProjects.json();

		return {
			props: {
				projects,
			}
		};
	};
</script>

<script>
    import SEO from '$lib/components/SEO.svelte';
	export let projects;
</script>

<SEO title="Projects of Johannes Herrnegger" metadescription="Johannes writes about personal development and software development." isArticle={false} />

<div class="max-w-prose mx-auto">
    <div class="prose dark:prose-dark">
        <h1>Projects</h1>
        <p>
            In January 2022 I started a writing challenge where I wrote "Atomic Essays" for 30 days in a row.
            <a href="/blog/30-essays-in-30-days-my-honest-review">You can read about my experience here</a>. My goals for this challenge was to overcome the fear of
            putting myself out there and my perfectionism.
        </p>
        <p>2 ingredients really helped me to do that:</p>
        <ul>
            <li><strong>The Johannes Hour:</strong> Putting one hour every day in my calendar which was exclusively for something that I enjoy doing.</li>
            <li><strong>Daily updates:</strong> Posting an update every day to Twitter as an accountability.</li>
        </ul>
        <p>So instead of using this hour now exclusively for writing, I will start new projects from time to time which I usually would not do and document my progress here:</p>
    </div>
	<ul class="list-disc ml-6">
		{#each projects as project}
			<li class="my-5">
				<h2>
					<a href={project.path}>
						{project.meta.title}
					</a>
				</h2>
				Started at {new Date(project.meta.started_date).toLocaleDateString(
					'de-DE'
				)}
			</li>
		{/each}
	</ul>
</div>
