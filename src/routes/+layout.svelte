<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import { AppShell } from '@skeletonlabs/skeleton';
	import SocialIcons from '@rodneylab/svelte-social-icons';
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
	<svelte:fragment slot="pageFooter">
		<div class="grid grid-cols-1 place-content-center">
			<div class="card card-glass p-6 mx-6 sm:m-auto space-y-6">
				<!--
				<div class="grid grid-cols-3 place-content-center m-auto w-full">
					<SocialIcons alt="" network="github" fgColor="#111111" bgColor="#eeeeee00"/>
					<SocialIcons alt="" network="tiktok"/>
					<SocialIcons alt="" network="instagram" fgColor="#111111" bgColor="#eeeeee00"/>
				</div>
				-->

				<h3 class="text-center text-xl sm:text-2xl lg:text-4xl">Hilltop Hustlers </h3>
			</div>

		</div>
	</svelte:fragment>
</AppShell>
