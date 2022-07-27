
<script>
const people = ["Vanessa", "Emilie", "Liz", "Sandrine", "Luigi", "Alexandra", "Leila", "Catherine", "Tharun", "Lionel", "Alexane", "Vivienne", "Barnaby", "Carine", "Maria", "Nyasha" ];
	let chosen =""

function chose () {
	chosen= Math.floor(Math.random() * people.length);
} 
</script>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" on:click={chose}>Pick someone from comm</button>

{#if chosen!="" }
<p>{people[chosen]} is the chosen one</p>
{/if}
{#if chosen==9  }
<p>Sorry...</p>
{:else if chosen==1  }
<p>😎</p>
{/if}