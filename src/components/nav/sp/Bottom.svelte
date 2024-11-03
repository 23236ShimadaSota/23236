<script lang="ts">
    import { Menu } from 'lucide-svelte';
    import { fade } from "svelte/transition";

    import { gopg } from '$lib';
    import { page } from '$app/stores';
    let status: boolean

    export const mv = (url: string) => {
        status = false
        gopg(url)
    }
</script>

{#if status == true}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="bg" onclick={() => status = false} transition:fade={{ duration: 200 }}></div>
{/if}

<button class="left" onclick={() => status = true}><Menu size="3em"></Menu></button>

<div class="menu" class:em={status == true}>
    <menu>
        <button class="btn" onclick={() => mv("/tools")}>TOOLS</button>
        <button class="btn" onclick={() => mv("/news")}>NEWS</button>
        <button class="btn" onclick={() => mv("/settings")}>SETTINGS</button>
        {#if $page.url.pathname != "/"}
            <button class="btn"  transition:fade={{ duration: 200 }} onclick={() => mv("/")}>BACK</button>
        {/if}
    </menu>
</div>

<style>
    .left {
        transition: var(--ts-speed);
        position: fixed;
        left: 0;
        bottom: 0;
        width: 5em;
        height: 5em;
        background-color: var(--gray-3);
        color: var(--gray-12);
        margin: auto;
        border-top-right-radius: 10px;
        padding-left: 1em;
    }

    .menu {
        padding: 10px;
        position: fixed;
        width: 100vw;
        height: 10em;
        bottom: -10em;
        background-color: var(--gray-3);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        transition: var(--ts-speed);
        z-index: 10;
        margin: auto;
        text-align: center;
    }

    .em {
        bottom: 0;
    }

    .bg {
        backdrop-filter: blur(1em);
        position: fixed;
        width: 100vw;
        height: 100vh;
        transition: var(--ts-speed);
        z-index: 9;
    }
</style>