<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import {isRunningDay} from './counter'
</script>

<svelte:head>
  {#if $isRunningDay}
	<link rel="icon" href="./yes.png" />
  {:else}
    <link rel="icon" href="./no.png" />
  {/if}
</svelte:head>

<slot />
