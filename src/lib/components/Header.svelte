<script>
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
    ]
</script>

<header class="container max-w-prose flex flex-row justify-between py-5 mb-10 border-b-2">
	<a href="/">Johannes Herrnegger</a>
	<nav>
		<ul class="flex flex-row">
            {#each navItems as item}
                <li><a href="{item.url}" class="px-1 py-1 mx-1">{item.label}</a></li>
            {/each}
		</ul>
	</nav>
</header>
