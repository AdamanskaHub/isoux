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

  <!-- Nadia -->

  <h5 class="question font-bold mb-2 mt-8">Nadia</h5>

  <p class="opacity-50 mb-1">Service info of Morocco, goes often to .org and regularly to iso connect, very used to the website</p>
  <ul class="ml-8">
    <li>She tries to confirm statuses and checks prices</li>
    <li>She copies news for her own newsletter</li>
    <li>She said herself that she was not able to evaluate the quality of a news</li>
    <li>She wants more short texts</li>
    <li>She wants more little tools (like the webstore)</li>
    <li>She wants more comm material to share to explain std and such</li>
    <li>She wishes there were online little trainings people in her company could take to learn about advocating for standards and more general standard knowledge</li>
    <li>Finds the website confusing (who doesn't)</li>
    <li>Wants to call an API to get info from ISO</li>
    <li>Needs an option to follow pages/topics</li>
    <li>Wants to see the full article in article notification she receives</li>
    <li>She's confused about the different newsletters and would like to be able to subscribe to everything (crazy but ok)</li>
  </ul>
  
  <p class="mt-2"><span class="font-bold">Quick (or not so) wins: </span></p>
  <ul>
    <li>Place to download lots of comm material for her and her team to use (would help many)</li>
    <li>Give her the whole article in the notification</li>
    <li>Have a page with the all the norms and their prices, with a filter system (would help many)</li>
  </ul>

  <!-- Kevin -->

  <h5 class="question font-bold mb-2 mt-8">Kevin</h5>

  <p class="opacity-50 mb-1">Works at DIN in comm, rarely on .org</p>
  <ul class="ml-8">
    <li>DIN has a similar distribution of experts vs novices but less radical (25% on extremes)</li>
    <li>They have a newsletter quaterly with the top 5/7 hot topics</li>
    <li>They create videos for best practices and benefits as it's very requested</li>
    <li>Everyday life std are more popular than other topics. Still DIN sticks to their subjects</li>
    <li>DIN goes a long way to care for experts and attracting them</li>
    <li>They use confluence as their tool for experts</li>
    <li>He confirmed the importance of topics for users, already implemented at DIN</li>
    <li>Uses linkedin a lot and corporate influencers</li>
    <li>They are looking into youtube influencers</li>
  </ul>



</div>