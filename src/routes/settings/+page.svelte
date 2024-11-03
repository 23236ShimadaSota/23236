<script lang="ts">
    import { page } from "$app/stores";
    export const dark = () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };
</script>

<p class="top">SETTINGS</p>

<article>
    <h3>全般</h3>
    ダークテーマ<button class="btn" on:click={dark}>toggle</button>
    <h3>情報</h3>
    23236 v0.0
</article>

<svelte:head>
    <title>SETTINGS | 23236</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="SETTINGS | 23236"/>
    <meta property="og:description" content="設定。それだけ"/>
    <meta property="og:site_name" content="23236"/>
    <meta property="og:image" content="/favicon.png"/>
</svelte:head>