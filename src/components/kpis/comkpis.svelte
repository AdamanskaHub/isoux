<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='opener'? opened=false : opened = 'opener'}" aria-expanded={opened==='opener'} >
  <Carret />
  <h4 class="title">Content KPIs</h4> 
</button>

<div class="{opened==='opener'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  KPI=key performance indicator. Without a goal and an action we won't go far.
  </p>


  <h5 class="question font-bold mb-2">Success</h5>
  
  <p>What does success looks like for the content team?</p>
  <p>We know from the ISO 2030 doc that we want to improve the experience for the experts and bring standards awareness to yet unaware people.<br>
    <p class="mt-2">We should therefore measure: </p>

  <ul >
    <li>- Qty of <b>people</b> reached (in absolute num)</li>
    <li>- Positive img of std and ISO</li>
    <li>- Qty of <b>experts</b> reached (in %)</li>
    <li>- Satisfaction/engagement of experts</li>
  </ul>

  <p class="mt-2 mb-2"><i>Content of type XXXXXX is preferred by XXXXXX who like to see it on XXXXXX and discover it via XXXXXX. They like to engage via XXXXXX and want to see new content every XXXXXX</i></p>

  <h5 class="question font-bold mt-4 mb-2">How do we measure success with experts?</h5>
  
  <ul>
    <li>Qty of experts reached (in %) [we need current number]<br>
    ⇒ analytics</li>
    <li>Satisfaction of experts according to survey once some quality content is out<br>
    ⇒ survey</li>
    <li>Engagement of experts with the content/discussions created<br>
    ⇒ that means there's a place to engage</li>
    <li>Dl of material created for the countries<br>
    ⇒ analytics</li>
  </ul>

  <h5 class="question font-bold mt-4 mb-2">How do we measure success with random people?</h5>
  
  <ul>
    <li>Qty of views <br>
    ⇒ analytics</li>
    <li>Awareness of people according to  a yearly survey <br>
    ⇒ survey</li>
    <li>Sharing of content<br>
    ⇒ that means there's a place to engage</li>
  </ul>


  <h5 class="question font-bold mt-4 mb-2">What kind of content?</h5>
  
  <p>Short? Long? In-depth? Interview like?</p>
  <p>We need to ask the people and organise user interviews.</p>
  <p>We can also test.</p>
  <p>Frequency?</p>
  <p>We musn't forget that there are two audiences: experts and randos.</p>

  <h5 class="question font-bold mt-4 mb-2">What type of media?</h5>
  
  <p>Text? Podcasts? Long animated videos? Interview podcasts? Short videos? Video interviews? ASMR with someone whispering standards acronyms?</p>
  <p>Again, we need to ask the people and organise user interviews.</p>
  <p>We MUST A/B test different formats vs each other.</p>
  <p>We musn't forget that there are two audiences: experts and randos.</p>

  <h5 class="question font-bold mt-4 mb-2">Which channels of promotion?</h5>
  
  <p>FB/Lk/whatsapp/.org/newsletter/yt channel</p>
  <p>Track that stuff like you mean it!</p>
  <p>A/B test and measure the engagement SYSTEMATICALLY</p>
  <p>We musn't forget that there are two audiences: experts and randos.</p>

  <h5 class="question font-bold mt-4 mb-2">Where to display the content?</h5>
  
  <p>This is mostly testing and iterating over and over and over.</p>
  <p>We musn't forget that there are two audiences: experts and randos.</p>




</div> <!--closing accordion-->