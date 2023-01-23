<script>
  import {timer} from '../components/counter';
  import IsRunning from '../components/IsRunning.svelte';
  timer.start()
</script>

<svelte:head>
	<title>YES</title>
	<meta name="yes" content="About this app" />
</svelte:head>


<div class="grid grid-cols-1 place-content-center h-full w-full space-y-6 ">
  <IsRunning></IsRunning>
</div>