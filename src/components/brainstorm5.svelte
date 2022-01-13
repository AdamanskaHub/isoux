<script>
import Carret from "../../static/carret.svelte";
let opened = ""
</script>

<!-- FOUR -->
<button class=" flex items-center"
	on:click="{() => opened===6? opened=false : opened = 6}" aria-expanded={opened===6} >
  <Carret />
  <h4 class="title">A better ISO for advanced users #2<span>(01/22)</span></h4> 
</button>

<div class="{opened===6? 'accordion-show':'hidden'}">
<p class="method mb-10"> <a href="https://en.wikipedia.org/wiki/Disney_method">Reverse brainstorm technique</a> </p>

<div class="flex mb-6">
<p class="opacity-50 mr-4">Participants</p>
<ul class="participants mb-4">
  <li>ROESSLI David</li>
  <li>ALCORTA Jose</li>
  <li>PIERLOT Victoria</li>
  <li>INFANTE Catherine</li>
  <li>THOMAS Tharun</li>
  <li>PRINCIPI Luigi</li>
  <li>EGGER Lionel</li>
  <li>GOURMANEL Emilie</li>
</ul>
</div>


<h5 class="question font-bold">How might we create the best ISO site for experts/members ?
What do the experts/members need to have the best experience?</h5>
<a href="https://www.figma.com/file/XTmneWiKrOFJNiC0GM7oaM/Experts-brainstorm---11%2F01?node-id=2%3A6" class="figmalink">Figma link
<img src=".//expert2.png" alt="figma file" class="figmaimg" /></a>
<p>The participants were imagining a website that is designed specifically for users that are very familiar with standards.</p>

<h5 class="sub-title mt-12 mb-4" > Most popular ideas</h5>

<ul class="ideas">
  <li>
    <!-- <i class="far fa-handshake"> </i> -->
    <div>
      <p class="mini-title">Single sign on</p> 
      <p>"Provide a single sign on to access all tools and features"</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Better search</p> 
      <p>"Where I can get get straight the information I want with a simple search"</p>
      <p>"Efficient auto complete fast up-to-date magical search"</p>
    </div>
    
  </li>
  <li>
    <div>
      <p class="mini-title">Differentiate the levels</p> 
      <p>"Make a clear bridge between the “newbie” pages and the 'expert' pages."</p>
    </div>
  <li>
    <div>
      <p class="mini-title">Better UX</p> 
      <p>"Linked directly to knowing who is accessing the page and customizing teh navigation accordingly."</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Sharing with other experts</p> 
      <p>"Allow expert users to interact among each other easily"</p>
    </div>
  </li>
</ul>

<h5 class="sub-title mt-12 mb-4" > Other ideas</h5>

<ul class="other-ideas">
  <li>"adapt language to different level of knowledge of audience. For experts, this could include broader use of acronyms, more technical language, and an assumption that they understand the standards process generally"</li>
  <li>"Make the expert tools visible and easy to find."</li>
  <li>"No disturbing UX patterns. Make the website an example of best practices"</li>
</ul>

<p class="opacity-50">Special note</p>
<p>Many ideas were the same as the previous group, such as a community, a better search, a single sign on, sending a strong signal.</p>
</div>