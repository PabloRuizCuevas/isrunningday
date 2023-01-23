<script>
  import {timer} from '../components/counter';
  import NotRunning from '../components/NotRunning.svelte';
  timer.start()
</script>

<svelte:head>
	<title>NO</title>
	<meta name="No" content="Not a running day" />
</svelte:head>


<div class="grid grid-cols-1 place-content-center h-full w-full space-y-6 ">
  <NotRunning></NotRunning>
</div>