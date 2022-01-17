<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='casco'? opened=false : opened = 'casco'}" aria-expanded={opened==='casco'} >
  <Carret />
  <h4 class="title">Casco <span>(01/22)</span></h4> 
</button>

<div class="{opened==='casco'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  Interviews with CASCO website and CASCO section of iso.org to see what could be improved currently in their flow.
  </p>


<h5 class="question font-bold mb-2">Nora</h5>

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

<h5 class="question font-bold mb-2 mt-8">Cristian Vasquez</h5>

<p class="opacity-50 mb-1">Goes to both the CASCO website, the portal and iso.org</p>
<ul class="ml-8">
  <li>Gets information and shares it</li>
  <li>Likes the quality of the docs he finds</li>
  <li>Gets lost often</li>
  <li>Find Casco.iso very useful</li>
  <li>When scanning a page his eyes jump from links to links</li>
  <li>He wishes there was an entry point with all the links</li>
</ul>

<p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> He is looking for a particular that he has seen previously. iso.org > taking part > other > Casco. He can't find it anymore and spends 10min clicking around on all the available links on the casco page (on iso.org). </p>







</div>