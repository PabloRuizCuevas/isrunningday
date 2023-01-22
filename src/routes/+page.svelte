<script>
  import {timer, time, time2, isRunningDay} from './counter'
  import { onMount } from 'svelte';
  timer.start()

  function typewriter(node, { speed = 0.3}) {
		const valid = (
			node.childNodes.length === 1 &&
			node.childNodes[0].nodeType === Node.TEXT_NODE
		);

		if (!valid) {
			throw new Error(`This transition only works on elements with a single text node child`);
		}

		const text = node.textContent;
		const duration = text.length / (speed * 0.01);

		return {
			duration,
			tick: t => {
				const i = ~~(text.length * t);
				node.textContent = text.slice(0, i);
			}
		};
	}

  function takeRan(list){
    return  list[Math.floor(Math.random() * list.length)];
  }

  let visible = false;
  const verb = ["Don't Stop", "Enjoy", "Start", "Continue", "Keep", "Dont' Cease"];
  const action = ["Running !", "🏃‍♀️🏃‍♀️", "🏃‍♀️", "🏃‍♂️", "🏃‍♂️🏃‍♀️" , "Pushing !", "Showing up !"]

  const text = takeRan(verb) + ' ' + takeRan(action)

  const noran = ["NOT YET !", "ALMOST THERE", "TOMORROW", "WAIT A BIT", "PATIENCE", 
  "NOT TODAY", "ALMOST", "NO NO", "NOPE", "PATIENCE BRUH", "N😔"];
  const randomAction = takeRan(noran) //Math.floor(Math.random() * action.length);

  
  function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

	onMount(async () => {
    visible=true
    //delay(1000).then(() =>visible = true);
	});

  let userRun = 0
  let plannedRun = 0 
  let excuse = 0 
  
</script>


<div class="grid grid-cols-1 place-content-center h-full w-full space-y-6 ">
    
  {#if $isRunningDay}  <!-- YES -->
    <div class="card card-glass p-6 m-auto space-y-6">
      <div class="waviy text-center" style="font-size: 40px;">
        <span style="--i:1"><h1 class="text-7xl lg:text-9xl">Y</h1></span>
        <span style="--i:2"><h1 class="text-7xl lg:text-9xl">E</h1></span>
        <span style="--i:3"><h1 class="text-7xl lg:text-9xl">S</h1></span>
        <span style="--i:4"><h1 class="text-7xl lg:text-9xl">!</h1></span>
      </div>
      <h2  class="text-center text-5x lg:text-6xl">{text}</h2>
      <h3 class="text-center text-xl lg:text-2xl"> {$time} till rest 🛋️ day </h3>
    </div>

    <div class="card card-glass  m-auto space-y-6">
      {#if userRun==0}
        <h3 class="text-center text-xl lg:text-2xl m-6"> Did you include running in todays plan? </h3>
        <div class="grid grid-cols-2  gap-4 m-6">
          <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>userRun=1}>Yes</button>
          <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>userRun=-1}>No</button>
        </div>
      {:else if userRun==1}
        <h3 class="text-center text-xl lg:text-2xl m-6"> Congratulations! </h3>
      {:else if userRun==-1}

       

        {#if excuse==0}
          <h3 class="text-center text-xl lg:text-2xl m-6"> Is your excuse in the list? </h3>
          <div class="grid grid-cols-2 gap-4 m-6">
            <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>excuse=1}>Yes</button>
            <button  class="btn btn-filled-primary btn-base w-full" on:click={()=>excuse=-1}>No</button>
          </div>

          <h3 class="text-center text-xl lg:text-2xl m-6"> List of valid excuses:</h3>
          <div class="desert">
            <div class="tumbleweed"></div>
            <div class="tumbleweed"></div>
          </div>
        {:else if excuse==1}
          <h3 class="text-center text-xl lg:text-2xl m-6"> Good try, keep running </h3>
        {:else if excuse==-1}
          <h3 class="text-center text-xl lg:text-2xl m-6"> keep running! </h3>
        {/if}
  




      {/if}
    </div>

  {:else}    
    <div class="card card-glass p-6 m-auto space-y-6"> 
      <h1 class="text-center text-7xl lg:text-9xl"> {randomAction} </h1>
      <h2 class="text-center text-5x lg:text-6xl"> {$time2} </h2>
      {#if visible}
        <h3 transition:typewriter class="text-center text-xl lg:text-2xl"> Count down till 🏃‍♀️ day </h3> 
      {/if}
    </div>
  {/if}

</div>



<style>
  .waviy {
    position: relative;
  }
  .waviy span {
    position: relative;
    display: inline-block;
    font-size: 40px;
    color: #fff;
    text-transform: uppercase;
    animation: flip 2s 5s;
    animation-delay: calc(.2s * var(--i))
  }
  @keyframes flip {
    0%,80% {
      transform: rotateY(360deg) 
    }
  }




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