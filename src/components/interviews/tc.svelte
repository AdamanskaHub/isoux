<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='tc'? opened=false : opened = 'tc'}" aria-expanded={opened==='tc'} >
  <Carret />
  <h4 class="title">Technical Committees <span>(02/22)</span></h4> 
</button>

<div class="{opened==='tc'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  UX interviews with TC members.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">Pain points</h5>
    <ul class="ml-8">
      <li>tbc</li>
    </ul>
  </div>
  

<!-- SALLY -->

<h5 class="question font-bold mb-2">Sally</h5>

<p class="opacity-50 mb-1">She goes on the CASCO website mostly, not iso.org, about a couple of time a month.</p>
<ul class="ml-8">
  <li>Accesses the CASCO website from the favs</li>
  <li>Prefers the special website rather than the .org one</li>
  <li>It's more tedious from iso.org</li>
  <li>Looks for regulations and forms mostly</li>
  <li>CASCO has a lot of info which she likes</li>
  <li>Wants to see how the projects are linked visually</li>
  <li>Only goes to iso.org to see standards from other comittees</li>
  <li>Likes the brochures on CASCO, shares them regularly to instruct</li>
  <li>Wishes she could see an overview/summuary of brochure before hand</li>
  <li>Has a positive image of Iso</li>
  <li>Finds the documents she needs hard to find</li>
  <li>Would love a contact point like who's in charge for Europe</li>
  <li>Wishes the navigation was better</li>
  <li>Iso.org has too many news that she doesn't care about, she wants to see projects</li>
</ul>

<p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> she looks for something special on iso.org, a document for example, she searches, her results are news, she clicks a news, looks in it for the link to what she was actually looking for. Doesn't care much about the news, lots of extra clicking.</p>






</div>