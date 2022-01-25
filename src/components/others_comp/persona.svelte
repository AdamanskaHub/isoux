<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='persona'? opened=false : opened = 'persona'}" aria-expanded={opened==='persona'} >
  <Carret />
  <h4 class="title">Persona JTBD<span> (02/22)</span></h4> 
</button>

<div class="{opened==='persona'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  The way the JTBD framework reframes the connection between a user and user’s problem or need is by phrasing the need as a job that the user wants to get done. Your product is what the user “hires” to get that job done.

  Let’s revisit Henry Ford’s quote above. Instead of saying that someone needed a faster horse (the solution), you could say that they were hiring a horse to get from Point A to Point B. In this case, the job to be done is getting from Point A to Point B. Implied in Ford’s quote though, is that the job to be done is to get from Point A to Point B faster.

  The job to be done is fundamentally is what the user is trying to accomplish. What Ford’s quote implies is that most people will fall into the trap of thinking that what the user is trying to accomplish is to ride a faster horse. So if you try to solve for that problem, you won’t think much beyond horses⁠—unlike Ford, who would go on to revolutionize not only the industry but society as well.
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