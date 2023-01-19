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
</script>


<div class="grid grid-cols-1 place-content-center h-full w-full ">
    <div class="card card-glass p-6 m-auto space-y-6">
      {#if $isRunningDay}  
        
        <div class="waviy text-center" style="font-size: 40px;">
        <span style="--i:1"><h1 class="text-9xl">Y</h1></span>
        <span style="--i:2"><h1 class="text-9xl">E</h1></span>
        <span style="--i:3"><h1 class="text-9xl">S</h1></span>
        <span style="--i:4"><h1 class="text-9xl">!</h1></span>
       </div>
       <!--
        {#if visible}
          <h1 transition:typewriter class="text-center text-9xl waviy">  YES! </h1>
        {/if}
      -->
      <h2  class="text-center text-6xl">{text}</h2>
      <h3 class="text-center text-2xl"> {$time} till rest 🛋️ day </h3>
    {:else}     
      <h1 class="text-center text-9xl"> {randomAction} </h1>
      <h2 class="text-center text-6xl"> {$time2} </h2>
      {#if visible}
        <h3 transition:typewriter class="text-center text-2xl"> Count down till 🏃‍♀️ day </h3> 
      {/if}
    {/if}
  </div>
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
</style>