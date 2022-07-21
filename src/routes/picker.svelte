
<script>
const people = ["Vanessa", "Emilie", "Liz", "Sandrine", "Luigi", "Alexandra", "Leila", "Catherine", "Tharun", "Lionel", "Alexane", "Vivienne", "Barnaby", "Carine", "Maria", "Nyasha" ];
	let chosen =""

function chose () {
	chosen= Math.floor(Math.random() * people.length);
} 
</script>

<button on:click={chose}>Pick someone from comm</button>

{#if chosen!="" }
<p>{people[chosen]} is the chosen one</p>
{/if}
{#if chosen=="Lionel"  }
<p>Sorry...</p>
{:else if chosen=="Emilie"  }
<p>😎</p>
{/if}