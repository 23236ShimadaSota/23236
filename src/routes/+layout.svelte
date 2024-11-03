<script lang="ts">
	import '../app.css';
	import SideL from '../components/nav/pc/SideL.svelte';
	import Bottom from '../components/nav/sp/Bottom.svelte';

	import { setupViewTransition } from 'sveltekit-view-transition';
	setupViewTransition();

	let { children } = $props();
</script>

<nav>
	<div class="pc">
		<SideL/>
	</div>
	
	<div class="sp">
		<Bottom/>
	</div>
</nav>

<div class="main">
	{@render children()}
</div>

<style>
	.main {
		margin-left: 250px;
		width: calc(100% - 250px);
	}
	.sp {
		display: none;
	}
	@media (max-width: 750px) {
		.main {
			margin-left: 0px;
			margin-right: 0px;
			width: 500px;
			margin: auto;
		}
		.sp {
            display: unset;
        }
    }
	@media (max-width: 500px) {
		.main {
			margin-left: 0px;
			margin-right: 0px;
			width: 100%;
			margin: auto;
		}
	}
</style>