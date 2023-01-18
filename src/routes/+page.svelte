<script>
  import {timer, time, isRunningDay} from './counter'
  timer.start()
</script>


<div class="grid grid-cols-1 place-content-center h-full w-full ">
    <div class="card card-glass p-6 m-auto space-y-6">
    
      {#if $isRunningDay}
      <h1 class="text-center text-9xl">  YES ! </h1>
      <h2 class="text-center text-6xl"> Enjoy :) </h2>
    {:else}
      <h1 class="text-center text-9xl"> NOT YET ! </h1>
      <h2 class="text-center text-6xl"> {$time} seconds</h2>
      <h2 class="text-center text-6xl"> TO YES</h2> 
    {/if}
  </div>
</div>

