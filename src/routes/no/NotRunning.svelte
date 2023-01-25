<script>
  import {time2, takeRandom} from '../components/counter';
  import { onMount } from 'svelte';

  function typewriter(node, { speed = 1.5}) {
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

  let visible = false;

  const noran = ["NOT YET !", "ALMOST THERE", "TOMORROW", "WAIT A BIT", "PATIENCE", 
  "NOT TODAY", "ALMOST", "NO NO", "NOPE", "PATIENCE BRUH", "N😔"];
  const randomAction = takeRandom(noran) //Math.floor(Math.random() * action.length);

	onMount(async () => {
    visible=true
    //delay(1000).then(() =>visible = true);
	});

</script>

<div class="card card-glass p-6 m-auto space-y-6"> 
  <h1 class="text-center text-5xl sm:text-7xl lg:text-9xl"> {randomAction} </h1>
  <h2 class="text-center text-3xl sm:text-5xl lg:text-6xl"> {$time2} </h2>
  {#if visible}
    <h3 transition:typewriter class="text-center text-lg sm:text-xl lg:text-2xl"> Count down till 🏃‍♀️ day </h3> 
  {/if}
</div>