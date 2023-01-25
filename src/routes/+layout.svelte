<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';

	import {isRunningDay} from './components/counter'
</script>

<svelte:head>
  {#if $isRunningDay}
	<link rel="icon" href="./yes.png" />
  {:else}
    <link rel="icon" href="./no.png" />
  {/if}

</svelte:head>

<AppShell>
	<div class="grid grid-cols-1 place-content-center py-6 space-y-6 overflow-auto h-full ">
		<slot />
	</div>
</AppShell>