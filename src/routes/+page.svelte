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
  const verb = ["Don't Stop", "Enjoy", "Start", "Continue", "Keep"];
  const action = ["Running !", "🏃‍♀️🏃‍♀️", "🏃‍♀️", "🏃‍♂️", "🏃‍♂️🏃‍♀️" , "Pushing !", "Showing up !"]

  const text = takeRan(verb) + ' ' + takeRan(action)

  const noran = ["NOT YET !", "ALMOST THERE", "TOMORROW", "WAIT A BIT", "PATIENCE", 
  "NOT TODAY", "ALMOST", "NO NO", "NOPE", "PATIENCE BRUH"];
  const randomAction = takeRan(noran) //Math.floor(Math.random() * action.length);

	onMount(async () => {
		visible = true
	});

</script>




<div class="grid grid-cols-1 place-content-center h-full w-full ">
    <div class="card card-glass p-6 m-auto space-y-6">
      {#if !$isRunningDay}
      {#if visible}
        <h1 transition:typewriter class="text-center text-9xl">  YES! </h1>
      {:else}
        <h1>  YES! </h1>
      {/if}
      <h2  class="text-center text-6xl">{text}</h2>
      <h3 class="text-center text-2xl"> {$time} till rest 🛋️ day </h3>
    {:else}     
      <h1 class="text-center text-9xl"> {randomAction} </h1>
      <h2 class="text-center text-6xl"> {$time2} </h2>
      {#if visible}
        <h3 transition:typewriter class="text-center text-2xl"> till 🏃‍♀️ day </h3> 
      {/if}
    {/if}
  </div>
</div>
