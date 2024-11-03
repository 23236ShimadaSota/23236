<script lang="ts">
    import { fade } from "svelte/transition";
    import { page } from '$app/stores';

    import { gopg } from "$lib";
</script>

<div class="side">
    <div class="logo">
        <button onclick={() => gopg("/")}>
            <img src="/favicon.png" alt="logo" width="100px">
        </button>
    </div>
    <menu>
        <button onclick={() => gopg("/tools")}>TOOLS</button>
        <br>
        <button onclick={() => gopg("/news")}>NEWS</button>
        <br>
        <button onclick={() => gopg("/settings")}>SETTINGS</button>
        <br>
        {#if $page.url.pathname != "/"}
            <button transition:fade={{ duration: 200 }} onclick={() => gopg("/")}>BACK</button>
        {/if}
    </menu>
</div>

<style>
    .side {
        transition: var(--ts-speed);
        position: fixed;
        left: 0;
        top: 0;
        width: 250px;
        height: 100%;
        background-color: var(--gray-3);
        margin: auto;
        text-align: center;
        padding-top: 25px;
    }

    .logo button img {
        border-radius: 10px;
    }

    menu button {
        background-color: var(--gray-4);
        color: var(--gray-12);
        min-width: 100px;
        padding: 10px;
        margin: 3px;
        border-radius: 10px;
    }
    menu button:hover {
        background-color: var(--gray-5);
    }
    menu button:active {
        background-color: var(--gray-6);
    }

    @media (max-width: 750px) {
        .side {
            left: -250px;
        }
    }
</style>