<script lang="ts">
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
</svelte:head>