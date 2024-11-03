<script lang="ts">
    import { page } from "$app/stores";
    import Calc from "../../components/tools/Calc/Calc.svelte";
</script>

<p class="top">TOOLS</p>

<article>
    <h3>アルティメット成績計算機</h3>
    <p>2023年度の鳥羽ハッカソンに出した物を再構築<del>しました</del>中です。</p>
    <a href="https://23201ishiikanata.github.io/ultimate-grades-calc/public/host" target="_blank">実物</a>
    <div class="box">
        <!-- <Calc></Calc> -->
        <h1>只今製作中</h1>
    </div>
</article>

<svelte:head>
    <title>TOOLS | 23236</title>
    <meta property="og:url" content="{$page.url.href}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="TOOLS | 23236"/>
    <meta property="og:description" content="成績計算機とかが追加される予定"/>
    <meta property="og:site_name" content="23236"/>
    <meta property="og:image" content="/favicon.png"/>
</svelte:head>

<style>
    .box {
        background-color: var(--gray-3);
        width: 100%;
        height: 100%;
        padding: 10px;
        border-radius: 10px;
    }
</style>