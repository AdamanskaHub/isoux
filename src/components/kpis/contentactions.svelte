<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='opener'? opened=false : opened = 'opener'}" aria-expanded={opened==='opener'} >
  <Carret />
  <h4 class="title">Content Actions</h4> 
</button>

<div class="{opened==='opener'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mt-2 mb-8">
  “Never confuse movement with action.”<br>
  ― Ernest Hemingway 
  </p>


  <h5 class="question font-bold mb-2">What can be done?</h5>
  
  <p>A lot of things can be implemented right now and the testing should start immediately (Q1 2022). Rome wasn't build in a day, especially when Rome has to do through a lot of iterations. A year of testing will see us on the path, but not to the goal.</p>

  <h5 class="question font-bold mb-2">Content - 🎤 audio</h5>
  
  <p class="mt-2">UX research</p>

  <ul class="list-disc mt-2 mb-2">
    <li>🕵️‍♀️ Someone - Get together a list of experts to contact</li>
    <li>👩‍🔬 Emilie - Craft and send out survey to those experts</li>
    <li>👩‍🔬 Emilie - Compile results</li>
    <li>⚖️ Team - Decide on the most appropriate type of content and test it</li>
  </ul>

  <p class="mt-2">Actual tests</p>

  <ul class="list-disc mt-2 mb-2">
    <li>🎤 Team - Select 1 interview subject for a short interview (5-10min)</li>
    <li>🎤 Team - Select 1 interview subject for an in-depth interview (5-10min)</li>
    <li>🎤 Team - Select 1 article subject to be read (5min-ish)</li>
    <li>🎤 Team - Get a mic and test it (Audio technica 2100X or Samsung Q2U - best in the 100$ range, if you really get into it you can later upgrade to fancy pricey mics)</li>
    <li>🎤 🎤 🎤 Team - Do the interviews!</li>
    <li>🧪 Web - Have 50% on a non audio page, 50% on the audio page</li>
    <li>🧪 Luigi or Emilie - Measure impact and report to Content team</li>
    <li>🎠 Team - Adjust and here we go again</li>
  </ul>

  <h5 class="question font-bold mb-2">Content - 🎥 video</h5>
  
  <p class="mt-2">Actual tests</p>

  <ul class="list-disc mt-2 mb-2">
    <li>🎥 Team - Discuss subjects for videos (according to data and feasibility)</li>
    <li>🎥 Team - Select 1 article subject for a short video (1min-ish)</li>
    <li>🎥 Team - Select 1 article subject for a bigger article (5min)</li>
    <li>🎥 Team - Select 1 article subject to be a video with someone filmed explaining stuff (5min-ish)</li>
    <li>🎬 Alexane(Emilie) - Buy some video effects online</li>
    <li>🎬🎬🎬 Alexane(Emilie) - Create each video: short motion, longer motion, </li>
    <li>🎥 🎥 🎥 Team - Do the interviews!</li>
    <li>🧪 Web - Have 50% on a non audio page, 50% on the audio page</li>
    <li>🧪 Luigi or Emilie - Measure impact and report to Content team</li>
    <li>🎠 Team - Adjust and here we go again</li>
  </ul>




</div> <!--closing accordion-->