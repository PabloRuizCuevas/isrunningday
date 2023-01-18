<script>
  import {timer, time, time2, isRunningDay} from './counter'
  timer.start()
</script>


<div class="grid grid-cols-1 place-content-center h-full w-full ">
    <div class="card card-glass p-6 m-auto space-y-6">
      {#if $isRunningDay}
      <h1 class="text-center text-9xl">  YES ! </h1>
      <h2 class="text-center text-6xl"> Enjoy :) </h2>
      <h3 class="text-center text-2xl"> {$time} till rest day </h3>
    {:else}
      <h1 class="text-center text-9xl"> NOT YET ! </h1>
      <h2 class="text-center text-6xl"> {$time} </h2>
      <h3 class="text-center text-2xl"> till running day </h3> 
    {/if}
  </div>
</div>
