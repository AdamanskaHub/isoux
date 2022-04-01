<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='xxx'? opened=false : opened = 'xxx'}" aria-expanded={opened==='xxx'} >
  <Carret />
  <h4 class="title">5sec test<span> (12/21)</span></h4> 
</button>

<div class="{opened==='xxx'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  Some info about podcasts 🎤 at ISO.
  </p>


<h5 class="question font-bold mb-2">Getting ready for the podcast</h5>

<p>Material:</p>
<ul>
  <li>Audio technica 2100X or Samsung Q2U mic (100$)</li>
  <li><a href="https://riverside.fm/">Try riverside's free trial</a></li>
</ul>

<p>Material to take it to the next level with video (later):</p>
<ul>
  <li><a href="https://riverside.fm/">Pro tool riverside</a></li>
</ul>

<h5 class="question font-bold mb-2">Learn from the pros</h5>

<p>Watch part of those, look at the charisma, the dynamics, type of questions</p>
<ul>
  <li><a href="https://www.youtube.com/watch?v=-6Laa2LiS2E">Sinclair with tattoo guy. Tattoo guy is very prepared, has a list of questions, moderates. Sinclair is the expert.</a></li>
  <li><a href="https://www.youtube.com/watch?v=-6Laa2LiS2E">Short of Huberman giving the spotlight to the other guy.</a></li>
  <li><a href="https://www.youtube.com/watch?v=hcuMLQVAgEg">Monologue masterclass.</a></li>
  <li><a href="https://www.youtube.com/watch?v=PctD-ki8dCc">Huberman interviewing.</a></li>
</ul>

<h5 class="question font-bold mb-2">Practical things</h5>

<ul>
  <li>Practice with someone to see where you get sidetracked, what are your weaknesses? Are you rushing? Are you stressed out?</li>
  <li>Practice with the mic so you're not blowing in it or whistling or having poor sound</li>
  <li>Know where you'll record, with which mic, with which app, and test it (twice!) to be extra safe</li>
  <li>Practice channeling your inner overconfident super at ease self. Take it as a fun learning experience ;) </li>
  <li>Remember that even if you miserably fail and completely ruin a podcast, there are worse things and it's great if the worst thing in your life atm is ruining a podcast</li>
</ul>

</div>