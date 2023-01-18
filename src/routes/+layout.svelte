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
	<title>IsItRunningDay?</title>
	<meta property="og:title" content="Is It Running Day ?">
	<meta name="twitter:title" content="Is It Running Day?">

	<meta name="description" content="Is It Running Day ?">
	<meta property="og:description" content="Is It Running Day ?">
	<meta name="twitter:description" content="Is It Running Day ?">

	{#if $isRunningDay}
		<meta property="og:image" content="./yes.png">
		<meta name="twitter:image" content="./yes.png">
	{:else}
		<meta property="og:image" content="./no.png">
		<meta name="twitter:image" content="./no.png">
	{/if}

</svelte:head>

<slot />
