<script>
  import {timer, isRunningDay} from './components/counter';
  import IsRunning from './yes/IsRunning.svelte';
  import NotRunning from './no/NotRunning.svelte';
  timer.start()
</script>

{#if $isRunningDay} 
  <!-- YES -->
  <IsRunning/>
{:else}    
  <!-- NO -->
  <NotRunning/>
{/if}
