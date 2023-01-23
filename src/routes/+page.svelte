<script>
  import {timer, isRunningDay} from './components/counter';
  import IsRunning from './components/IsRunning.svelte';
  import NotRunning from './components/NotRunning.svelte';
  timer.start()
</script>

<div class="grid grid-cols-1 place-content-center h-full w-full space-y-6 ">
  {#if $isRunningDay} 
   <!-- YES -->
   <IsRunning></IsRunning>
  {:else}    
    <!-- NO -->
    <NotRunning></NotRunning>
  {/if}
</div>