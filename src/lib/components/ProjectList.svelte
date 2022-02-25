<script>
    export let items;
</script>

<div>
    {#each items as item}
        <div class="flex flex-col bg-slate-100 pt-3 pb-2 px-5 my-5 rounded-lg">
            <div class="flex flex-row">
                <h3 class="m-0 p-0">{item.title}</h3>
                <div class="text-sm bg-slate-100 rounded-md ml-3 whitespace-nowrap flex-grow text-right">{new Date(item.date).toLocaleDateString()}</div>
            </div>
            <p class="m-0 mb-2">
                Tweet: {item.tweet?.text}
            </p>
            <div class="text-right">
                <a href="{item.url}" class="mx-4">View on Blog</a>
                <a href="{item.twitterUrl}" class="text-cyan-400">View on Twitter</a>
            </div>
        </div>
    {/each}
</div>
