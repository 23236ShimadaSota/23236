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

<p class="top">NEWS</p>

<article>
    <h2>只今工事中</h2>
</article>

<svelte:head>
    <title>NEWS | 23236</title>
</svelte:head>