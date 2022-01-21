<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='fivesec'? opened=false : opened = 'fivesec'}" aria-expanded={opened==='fivesec'} >
  <Carret />
  <h4 class="title">5sec test<span> (12/21)</span></h4> 
</button>

<div class="{opened==='fivesec'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  Five second tests are a method of user research that help you measure what information users take away and what impression they get within the first five seconds of viewing a design. They're commonly used to test whether web pages are effectively communicating their intended message.
  </p>


<h5 class="question font-bold mb-2">First test: the actual homepage of iso.org in December 2021</h5>

<ul>
  <li>No one understood it was about standards 🤷‍♀️</li>
  <li>Almost all thought it was about climate</li>
  <li>Almost all were underwhelmed by the looks of the website</li>
  <li>All thought it was a news website 📰</li>
</ul>

<h5 class="question font-bold mb-2 mt-12">Second test: a mockup done for the test</h5>


  <img src=".//5stest.png" alt="figma mockup" class="figmaimg m-0" />
<ul class="mt-2">
  <li>Most thought it had to do with construction 🤦‍♀️</li>
  <li>The response to the design was more positive</li>
</ul>



<h5 class="question font-bold mb-2 mt-12">Learnings</h5>

<p class="mt-2">This definitely shows that there is room for improvement and that the photos on the main page of the website are critical to people's understanding of what ISO is.</p>
<img src=".//ux-learnings-1.png" alt="ux learnings" class="figmaimg" />



</div>