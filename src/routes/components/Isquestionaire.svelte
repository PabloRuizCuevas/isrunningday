<script>
  let userRun = 0
  let excuse = 0 
</script>

<div class="card card-glass m-6 sm:m-auto space-y-6">
  {#if userRun==0}
    <h3 class="text-center text-xl lg:text-2xl m-6"> Did you include running in todays plan? </h3>
    <div class="grid grid-cols-2  gap-4 m-6 pb-4">
      <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>userRun=1}>Yes</button>
      <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>userRun=-1}>No</button>
    </div>
  {:else if userRun==1}
    <h3 class="text-center text-xl lg:text-2xl m-6"> 😊😊 Congratulations! Keep pushing 😊😊 </h3>
  {:else if userRun==-1}
    {#if excuse==0}
      <h3 class="text-center text-sm lg:text-2xl m-6"> Is your excuse in our comprehensive list? </h3>
      <div class="grid grid-cols-2 gap-4 m-6 pb-2">
        <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>excuse=1}>Yes</button>
        <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>excuse=-1}>No</button>
      </div>

      <h3 class="text-center text-xl lg:text-2xl m-6"> List of valid excuses:</h3>
      <div class="desert">
        <div class="tumbleweed"></div>
        <div class="tumbleweed"></div>
      </div>
    {:else if excuse==1}
      <h3 class="text-center text-xl lg:text-2xl m-6"> 🏃 Good try, keep running 🏃 </h3>
    {:else if excuse==-1}
      <h3 class="text-center text-xl lg:text-2xl m-6"> 🏃 Bad luck, keep running!🏃 </h3>
    {/if}
  {/if}
</div>


<style>

.desert {
  position: relative;
  height: 8rem;
  overflow: hidden;
}

.desert .tumbleweed {
    position: absolute;
    top: 0;
    left: -5rem;
    background: url(https://cdn-icons-png.flaticon.com/512/1171/1171228.png) no-repeat center;
    background-size: cover;
    width: 5rem;
    height: 5rem;
    animation: jumping 1.5s infinite, rolling 5s linear infinite, rotating 2s linear infinite;

}
.tumbleweed:nth-child(2) {
    animation-delay: 2.5s;
}
.tumbleweed:nth-child(3) {
    animation-delay: 4s;
}

@keyframes jumping {
    0% {
        top: 0rem;
        animation-timing-function: ease-in;
    }
    25% {
        top: 3rem;
        animation-timing-function: ease-out;
    }
    50% {
        top: 1rem;
        animation-timing-function: ease-in;
    }
    75% {
        top: 3rem;
        animation-timing-function: ease-out;
    }
    100% {
        top: 0rem;
        animation-timing-function: ease-in;
    }
}

@keyframes rolling {
    0% {
        left: -5rem;
    }
    100% {
        left: 100%;
    }
}

@keyframes rotating {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>