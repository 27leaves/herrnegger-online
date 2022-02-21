<script>
    export let items;
</script>

<div>
    {#each items as item}
        <div class="flex flex-row items-center">
            <div class="text-sm p-1 bg-slate-100 rounded-md my-2">{item.date}</div>
            <h3 class="m-0 text-sm p-0 mx-2"><a href="{item.url}">{item.title}</a></h3>
            <a href="{item.twitterUrl}" class="text-cyan-400 text-sm">Twitter</a>
        </div>
    {/each}
</div>
