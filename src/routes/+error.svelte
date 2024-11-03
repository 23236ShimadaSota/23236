<script lang="ts">
    import { page } from "$app/stores";
</script>

<main>
    {#if $page.status == 404}
        <p class="top">404</p>
    {:else}
        <p class="top">ERROR</p>
    {/if}
</main>

<svelte:head>
    <title>ERROR | 23236</title>
</svelte:head>