<script>
    import { page } from '$app/stores';
    let path, currentActiveUrl;

    const navItems = [
        {
            url: '/',
            label: 'Home',
        },
        {
            url: '/projects',
            label: 'Projects',
        },
        {
            url: '/blog',
            label: 'Blog',
        },
        {
            url: '/about',
            label: 'About',
        },
    ];

    $: {
        path = $page.url.pathname;
        currentActiveUrl = '/';
        if(path !== '/') {
            const currentActiveRoute = navItems.find(item =>
                item.url !== '/'
                && path.startsWith(item.url)
            );
            currentActiveUrl = currentActiveRoute.url;
        }
    }
</script>

<header class="container max-w-prose flex flex-row justify-between py-5 mb-10 border-b-2">
	<a href="/">Johannes Herrnegger</a>
	<nav>
		<ul class="flex flex-row">
            {#each navItems as item}
                <li><a href="{item.url}" class="px-1 py-1 mx-1 {item.url === currentActiveUrl ? 'font-bold' : ''}">{item.label}</a></li>
            {/each}
		</ul>
	</nav>
</header>
