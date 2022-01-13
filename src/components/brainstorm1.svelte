<script>
  import Collab from "../../static/shake.svelte"
  import Lady from "../../static/lady.svelte"
  import Me from "../../static/me.svelte"
  import Ok from "../../static/ok.svelte"
  import Video from "../../static/video.svelte"
  import Carret from "../../static/carret.svelte"
  let opened = ""
</script>

<!-- ONE -->
<button class=" flex items-center"
	on:click="{() => opened===1? opened=false : opened = 1}" aria-expanded={opened===1} >
  <Carret />
  <h4 class="title">Attracting new users #1<span>(12/21)</span></h4> 
</button>

<div class="{opened===1? 'accordion-show':'hidden'}">
<p class="method mb-10"> <a href="https://en.wikipedia.org/wiki/Disney_method">Disney brainstorm technique</a> </p>

<div class="flex mb-6">
<p class="opacity-50 mr-4">Participants</p>
<ul class="participants mb-4">
  <li>GERASYMCHUK Yuliya</li>
  <li>LAZARTE Maria</li>
  <li>THOMAS Tharun</li>
  <li>VON DER MUHLL Vanessa</li>
  <li>PRINCIPI Luigi</li>
  <li>EGGER Lionel</li>
  <li>GOURMANEL Emilie</li>
</ul>
</div>


<h5 class="question font-bold">How might we get random users to know (in a positive way) ISO via the website</h5>
<a href="https://www.figma.com/file/nc9lPIhhW7hTeI7F6U1iAd/Disney-random-users?node-id=4%3A77" class="figmalink">Figma link
<img src=".//new1.png" alt="figma file" class="figmaimg" /></a>


<h5 class="sub-title mt-12 mb-4" > Most popular ideas</h5>

<ul class="ideas">
  <li>
    <!-- <i class="far fa-handshake"> </i> -->
    <Collab />
    <div>
      <p class="mini-title">Collaboration with influencer</p> 
      <p>"Collaborative content, so that our stories are deeper than the standards angle. Talk about issues with other partnes and industries, e.g. an article on skincare from a Youtube influencer then going on to standards for skincare. Or talking about environmental issues with say UNEP or WFF or UNFFFC, then going into the solution part with standards on it"</p>
    </div>
  </li>
  <li>
    <!-- <i class="fas fa-user"></i> -->
    <Lady/>
    <div>
      <p class="mini-title">More human, less fake, more personality</p> 
      <p>"Make ISO more human. Less fake(imagery/video) and more dynamic/young"</p>
    </div>
    
  </li>
  <li>
    <!-- <i class="far fa-thumbs-up"></i> -->
    <Ok/>
    <div>
      <p class="mini-title">Simpler, clearer</p> 
  <p>"A site that doesn’t show ISO as a complicated, old, highly technical beast"</p>
    </div>
  <li>
    <!-- <i class="far fa-hand-pointer"></i> -->
    <Me/>
    <div>
      <p class="mini-title">What does it do for me? Not technicality</p> 
  <p>"A site that doesn’t show ISO as a complicated, old, highly technical beast"</p>
    </div>
  </li>
  <li>
    <Video/>
    <!-- <i class="fab fa-youtube"></i> -->
    <div>
      <p class="mini-title">Video</p> 
  <p>"Fun short video content people can scroll through, so that we can keep them “hooked” for longer.  Informative, people are learning something valuable while being entertained. "</p>
    </div>
  </li>
</ul>

<h5 class="sub-title mt-12 mb-4" > Other ideas</h5>

<ul class="other-ideas">
  <li>"I see something that relates to me and my daily world"</li>
  <li>"Super visual cool stuff that makes people want to stay on the site and click more // Poppier"</li>
  <li>"Search tool that doesn’t prioritse the standard itself but rather contextual / storytelling content"</li>
  <li>"Offer smth like ‘draft your first standard’ online - a bit of a game, but leading through close to real process"</li>
  <li>"Bespoke - tailored to my profile - content - placement"</li>
</ul>

</div>