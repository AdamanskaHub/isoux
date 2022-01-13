<script>import Carret from "../../static/carret.svelte"
let opened = ""
</script>

<!-- TWO -->

<button class=" flex items-center"
	on:click="{() => opened===2? opened=false : opened=2}" aria-expanded={opened===2} > <Carret />
  <h4 class="title">Attracting new users #2<span>(01/22)</span></h4> 
</button>


<div class="{opened===2? 'accordion-show':'hidden'}" >
<p class="method mb-10"> <a href="https://en.wikipedia.org/wiki/Disney_method">Reverse brainstorm technique</a> </p>

<div class="flex mb-6">
<p class="opacity-50 mr-4">Participants</p>
<ul class="participants mb-4">
  <li>INFANTE Catherine</li>
  <li>ROLANDO Mara</li>
  <li>DAUCH Stephanie</li>
  <li>LEWIS Barnaby</li>
  <li>PRINCIPI Luigi</li>
  <li>EGGER Lionel</li>
  <li>GOURMANEL Emilie</li>
  <li>ROESSLI David</li>
</ul>
</div>


<h5 class="question font-bold">How might we get random users to know (in a positive way) ISO via the website</h5>
<a href="https://www.figma.com/file/Cw4clpHmU7KxbusO6BW03S/Promo-brainstorm-batch-2---10%2F01?node-id=16%3A41" class="figmalink">Figma link
<img src=".//new2.png" alt="figma file" class="figmaimg" /></a>

<h5 class="sub-title mt-12 mb-4" > Most popular ideas</h5>

<ul class="ideas">
  <li>
    <!-- <i class="far fa-handshake"> </i> -->
    <div>
      <p class="mini-title">Make standards relevant</p> 
      <p>"The goal is to build relevance, not to sell standards, or even encourage participation (IMO) because those who are capable of developing standards are already well aware."</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Modern looking</p> 
      <p>"Mobile friendly, essential for a modern website."</p>
    </div>
    
  </li>
  <li>
    <div>
      <p class="mini-title">Fast website</p> 
  <p>"FAAAST is good for every user on every device everywhere. A website can never be TOO fast."</p>
    </div>
  <li>
    <div>
      <p class="mini-title">Influencers' content</p> 
  <p>"Content from people that I value and recognize as though-leaders in my areas of interest (“influencers”)"</p>
    </div>
  </li>
  <li>
    <!-- <i class="fab fa-youtube"></i> -->
    <div>
      <p class="mini-title">Clear navigation</p> 
      <p>"Simple, clear and unambiguous navigation is paramount to a good experience"</p>
    </div>
  </li>
</ul>

<h5 class="sub-title mt-12 mb-4" > Other ideas</h5>

<ul class="other-ideas">
  <li>"More languages available"</li>
  <li>"Focus on storytelling at first and less on the technicalities. What are the application of standards and how do they make our world better? Technical aspects behind how standards work should be secondary."</li>
  <li>"Interactivity is a key element to a good website. How can I, the user, engage with the information? ie- mapping tool representing members, SDG mapping tool, or my favorite--how a standard is created where you click along a sequence that demonstrates the process."</li>
  <li>"only 1 way to get to the information, not multiple places where to click to end up in the same place"</li>
</ul>
<p class="opacity-50">Special note</p>
<p>While both groups of "attracting new users" brainstorm session has different ideas, the fact that the website is currently not engaging and geared towards users who already know standards well came back.</p>
</div>