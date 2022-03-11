<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='tc'? opened=false : opened = 'tc'}" aria-expanded={opened==='tc'} >
  <Carret />
  <h4 class="title">Marketing people <span>(03/22)</span></h4> 
</button>

<div class="{opened==='tc'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  UX interviews with Marketing members.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">Pain points</h5>
    <ul class="ml-8">
      <li>tbc</li>
    </ul>
  </div>
  

 
  <!-- Pirjetta -->

  <h5 class="question font-bold mb-2 mt-8">Pirjetta</h5>

  <p class="opacity-50 mb-1">Finland royalities, iso.org less than 1x/w, iso connect 1x/m.</p>
  <ul class="ml-8">
    <li>Thinks the search is bad</li>
    <li>It's a maze</li>
    <li>Would like supporting material for mktg std /use cases</li>
    <li>Would like a contact list for copyrights, cs, royality reporting</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Gets an email for a quotation => types in browser iso.org => uses the search for a std => hesitates with the results => clicks and looks at the prices on the std's page</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Meaningful tags in front of search results instead of confusing icons</li>
    <li>Having a　contact list for copyrights, cs, royality reporting</li>
  </ul>

  <!-- Riina -->

  <h5 class="question font-bold mb-2 mt-8">Riina</h5>

  <p class="opacity-50 mb-1">Finland royalities, iso.org rarely for some articles, iso connect .5x/m.</p>
  <ul class="ml-8">
    <li>It's a maze</li>
    <li>Deprecated pages (for prices in her case) are not marked as deprecated</li>
    <li>Looks at the news to learn about std</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Favourites => iso connect => direct link</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Quick 5min intro videos to explain what's ISO about</li>
  </ul>




</div>