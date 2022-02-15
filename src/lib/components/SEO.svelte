<script>
	import SvelteSeo from 'svelte-seo';
	import website from '$lib/config/website';
	import { page } from '$app/stores';

	const { siteLanguage, siteTitle } = website;

	export let metadescription;
	export let title;
	export let isArticle = false;
    export let publishedTime = undefined;
    // export let timeToRead = 0;

	const pageTitle = `${title} - ${siteTitle}`;
    const pageUrl = `${website.siteUrl}${$page.url.pathname}`;
    const article = isArticle ? {
        publishedTime,
        authors: ['Johannes Herrnegger']
        // tags: ['Tag A', 'Tag B', 'Tag C']
    } : undefined;
    const extendedOpenGraph = {
		title: pageTitle,
		description: metadescription,
		url: pageUrl,
		type: isArticle ? 'basic' : 'article',
        article,
	}
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta
		name="robots"
		content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
	/>
	<html lang={siteLanguage} />
</svelte:head>

<SvelteSeo
	openGraph={extendedOpenGraph}
/>
