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


    <!-- NIGEL -->

  <h5 class="question font-bold mb-2">Nigel</h5>

  <p class="opacity-50 mb-1">TC Chairman goes on iso.org twice a week, and from there to OBP.</p>
  <ul class="ml-8">
    <li>Checks the ISO list of technical committee</li>
    <li>Looks for contact info</li>
    <li>checks out info on the OBP</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> He goes to iso.org => about us => standards => map => finds the country and clicks on it</p>
  <p>Taking parts => dev standards => TC link => list of TCs => clicks the correct TC => finds info on the page => clicks preview => goes to OBP and read the info </p>
  
  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>TC (in the store page) is not a link but an internal tab (see video)</li>
    <li>Better committee.iso.org</li>
  </ul>




</div>