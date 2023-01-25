<script>
  import {time, takeRandom} from '../components/counter'
  import Isquestionaire from '../components/Isquestionaire.svelte';

  const verb = ["Don't Stop", "Enjoy", "Start", "Continue", "Keep", "Dont' Cease"];
  const action = ["Running !", "🏃‍♀️🏃‍♀️", "🏃‍♀️", "🏃‍♂️", "🏃‍♂️🏃‍♀️" , "Pushing !", "Showing up !"]

  const text = takeRandom(verb) + ' ' + takeRandom(action)
  let expand = false
</script>

<div class="card card-glass p-6 mx-6 sm:m-auto space-y-6 ">
  <h1 class="text-center text-6xl lg:text-9xl "> YES !</h1>
  <h2 class="text-center text-2xl lg:text-6xl">{text}</h2>
  <h3 class="text-center text-xl lg:text-2xl">{$time} till rest 🛋️ day </h3>
  <div class="flex justify-center">
    <button class="btn btn-filled-primary btn-base w-3/4 m-auto align-center" on:click={()=>expand = !expand}> 
        {expand? "less" : "Expand"}
    </button>
  </div>
</div>

{#if expand}
  <Isquestionaire/>
{/if}

<style>

@keyframes lights {
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
  30% { 
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  40% { 
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }
  
  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }
  
  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
  
}

  h1 {
    margin: auto;
    animation: lights 5s 750ms linear infinite;
  }

</style>