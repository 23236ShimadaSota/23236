<script lang="ts">
    let percent: number
    let type: string
</script>

<div class="title">
    <h1>アルティメット成績計算機</h1>
    <small>-Original by Hamaguchi Ryuki-</small>
    <h3>tap or click to start</h3>
</div>

<div class="w1">
    <h1>アルティメット成績計算機</h1>
    <div id="subject-data">
        試験点:ポートフォリオ =
        <select bind:value={percent}>
            <option value="50">5:5</option>
            <option value="60">6:4</option>
            <option value="70" selected>7:3</option>
            <option value="80">8:2</option>
            <option value="90">9:1</option>
            <option value="100">10:0</option>
        </select>
        の教科で、
    </div>

    <div id="calc-base-container">
        <select bind:value={type}>
            <option value="first" class="calc-ignore">前期</option>
            <option value="first-mid" selected>前期中間</option>
            <option value="first-final">前期期末</option>
            <option value="first-supplemental">前期補講</option>
            <option value="first-reexam">前期再試</option>
            <option value="second" class="calc-ignore">後期</option>
            <option value="second-mid">後期中間</option>
            <option value="second-final">後期期末</option>
            <option value="second-supplemental">後期補講</option>
            <option value="second-reexam">後期再試</option>
            <option value="last">単位認定試験</option>
            <option value="retention" style="display: none;" hidden></option>
        </select>
        までの成績から、
    </div>
</div>

<div class="w2">
    <h1>{type}で必要な点数を計算</h1>
</div>

<div class="w3">
    <h1>留年</h1>
</div>

<div class="w4">
    <h1>合格</h1>
</div>

<style>
    .title {
        text-align: center;
    }
</style>
