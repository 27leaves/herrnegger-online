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
	const article = isArticle
		? {
				publishedTime,
				authors: ['Johannes Herrnegger']
				// tags: ['Tag A', 'Tag B', 'Tag C']
		  }
		: undefined;
	const extendedOpenGraph = {
		title: title,
		description: metadescription,
		url: pageUrl,
		type: isArticle ? 'basic' : 'article',
		article
	};
	const twitter = {
		site: '@27leaves',
		creator: '@27leaves',
		title: title,
		description: metadescription,
		card: 'summary'
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
</svelte:head>

<SvelteSeo openGraph={extendedOpenGraph} {twitter} />
