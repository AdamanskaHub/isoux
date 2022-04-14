<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='xx'? opened=false : opened = 'xx'}" aria-expanded={opened==='xx'} >
  <Carret />
  <h4 class="title">Novices <span>(04/22)</span></h4> 
</button>

<div class="{opened==='xx'? 'accordion-show':'hidden'} mb-8">


  <p class="opacity-50 mr-4 mb-8">
  UX interviews with website visitors that filled in the hotjar survey.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">Quisk(ish) wins & learnings</h5>
    <ul class="ml-8">
      <li>Have more case studies, more ways to answer the question "what's in it for me", "what benefit ($$$) do I get out of standards"?</li>
    </ul>
  </div>
  

  <!-- FIONA -->

  <h5 class="question font-bold mb-2">Fiona</h5>

  <p class="opacity-50 mb-1">Business consultant with some knowledge of standards. Said that 70% of what the 9001 does is what she does in her job. </p>
  <p class="font-bold">JTBD: Find a certification for lead auditor (who can certify her)</p>
  <ul class="ml-8">
    <li>Website was easy to navigate</li>
    <li>Had to look at the website of the British bureau of assessment to get the info</li>
    <li>homepage -> std -> get certified</li>
    <li>Wanted to know how long a certification lasts</li>
    <li>The overview of the stds was good</li>
    <li>Certification page could have had a lot more</li>
    <li>She wants to know which opportunities she gets from it - make it more relevant </li>
    <li>Would like to know what other companies enjoyed or not about the process of applying a std</li>
  </ul>

  






</div>