<script>
import Carret from "../../static/carret.svelte";
let opened = ""
</script>

<!-- FOUR -->
<button class=" flex items-center"
	on:click="{() => opened===4? opened=false : opened = 4}" aria-expanded={opened===4} >
  <Carret />
  <h4 class="title">A better ISO for advanced users #1<span>(01/22)</span></h4> 
</button>

<div class="{opened===4? 'accordion-show':'hidden'}">
<p class="method mb-10"> <a href="https://en.wikipedia.org/wiki/Disney_method">Disney brainstorm technique</a> </p>

<div class="flex mb-6">
<p class="opacity-50 mr-4">Participants</p>
<ul class="participants mb-4">
  <li>VON DER MUHLL Vanessa</li>
  <li>LAZARTE Maria</li>
  <li>STEPHENS Jaymi</li>
  <li>GERASYMCHUK Yuliya</li>
  <li>LEWIS Barnaby</li>
  <li>PRINCIPI Luigi</li>
  <li>EGGER Lionel</li>
  <li>GOURMANEL Emilie</li>
</ul>
</div>


<h5 class="question font-bold">How might we create the best ISO site for experts/members ?
What do the experts/members need to have the best experience?</h5>
<a href="https://www.figma.com/file/IFVAJaVBo7wCT0Q8dHpGOU/Experts-brainstorm---10%2F01?node-id=1%3A2" class="figmalink">Figma link
<img src=".//expert1.png" alt="figma file" class="figmaimg" /></a>
<p>The participants were imagining a website that is designed specifically for users that are very familiar with standards.</p>

<h5 class="sub-title mt-12 mb-4" > Most popular ideas</h5>

<ul class="ideas">
  <li>
    <!-- <i class="far fa-handshake"> </i> -->
    <div>
      <p class="mini-title">Custom content for users</p> 
      <p>"One central login - seamless connection to other ISO tools and services within the website"</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Better search</p> 
      <p>"powerful search tool, with possibility to save results and export lists of standards"</p>
    </div>
    
  </li>
  <li>
    <div>
      <p class="mini-title">Customer support</p> 
      <p>"Opportunity to contact appropriate ISO/CS staff on certain topics/projects"</p>
    </div>
  <li>
    <div>
      <p class="mini-title">Notifications system</p> 
      <p>"Possibility to “Follow” a standard and get updates notifications "</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Sharing with other experts</p> 
      <p>"A way to connect with and interact with other experts"</p>
    </div>
  </li>
</ul>

<h5 class="sub-title mt-12 mb-4" > Other ideas</h5>

<ul class="other-ideas">
  <li>"For tech committees experts: a dashboard with reminders of activities like balloting, new docs, for the committee they participate in"</li>
  <li>"I would like access to podcast like expert content for when I am on my way to work. :) E.g. on the future of standards, smart, foresight, etc. "</li>
  <li>"Consolidated list of upcoming ISO-hosted events (webinars, training sessions, etc)"</li>
</ul>

<p class="opacity-50">Special note</p>
<p>The participants generally came up often with the same ideas.</p>
</div>