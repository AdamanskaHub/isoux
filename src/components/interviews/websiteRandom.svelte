<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='tc'? opened=false : opened = 'tc'}" aria-expanded={opened==='tc'} >
  <Carret />
  <h4 class="title">Website random users <span>(04/22)</span></h4> 
</button>

<div class="{opened==='tc'? 'accordion-show':'hidden'} mb-8">


  <p class="opacity-50 mr-4 mb-8">
  UX interviews with website visitors that filled in the hotjar survey.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">Quisk(ish) wins</h5>
    <ul class="ml-8">
      <li>In search tags and show the lifecycle, that what most of them only care about, save them a page load + scroll</li>
      <li>More videos & visual content</li>
    </ul>
  </div>
  

  <!-- FRANCO -->

  <h5 class="question font-bold mb-2">Franco</h5>

  <p class="opacity-50 mb-1">Works at intertek, specialist of certifications of persons</p>
  <ul class="ml-8">
    <li>Wants a dashboard look</li>
    <li>Wants a notification when certain standards are modified</li>
    <li>Searches by std #</li>
    <li>Thinks the search sucks</li>
    <li>Would like to have Italian for the website</li>
    <li>Intertek wanted to use videos of ISO but because there are none (of value) they are creating their own</li>
    <li>Would help us to see how good our future videos are</li>
  </ul>

  <!-- SANDRA -->

  <h5 class="question font-bold mb-2">Sandra</h5>

  <p class="opacity-50 mb-1">Researche and uni teacher. Part of some WG, very expert and super fan of std</p>
  <ul class="ml-8">
    <li>Unhappy about the delay between updates on the TC vs website</li>
    <li class="font-bold">Wants the convenor's address</li>
    <li>Fan of podcasts, happy to give her opinion</li>
    <li>Looks at std changes</li>
    <li>Shows things to her students</li>
    <li>Says students don't want to read anymore</li>
    <li>Wants to see case studies of applications of std</li>
    <li class="font-bold">Wants more videos</li>
    <li>Only reads from news from the newsletter</li>
    <li>Uses the search</li>
  </ul>


  <!-- HUBERT -->

  <h5 class="question font-bold mb-2">Hubert</h5>

  <p class="opacity-50 mb-1">Private ITC engineer. TC expert on multiple working groups, uses his wg power to put forward the interests of his private clients (says it totally openly, it's a lobby basically)</p>
  <ul class="ml-8">
    <li>Everyday on iso(!)</li>
    <li>Checks out state of std</li>
    <li>Goes on the website -> searches -> checks out the lifecycle and the preview on obp</li>
    <li class="font-bold">Would like to see more figures</li>
    <li class="font-bold">Would like a coversheet like the Australian std do</li>
    <li class="font-bold">Would like to see the preview in iso.org and not be sent to obp</li>
    <li>Wants to show me a list of technical committees during the call but can't find it (the guy is on iso EVERYDAY and he still struggles :'()</li>
    <li>Never reads the news</li>
    <li>Would like to know in news "what could it mean for me", to tell his clients</li>
    <li class="font-bold">Has seen over the years a decrease in number of people in big companies that are std experts, it's being externalized to companies like his.</li>
    <li class="font-bold">Top management wants to know the value of std "what it means in money"</li>
    <li>Wants to put colours in std sheets, animated pics, more interactive stuff</li>
  </ul>


  <!-- DANNY -->

  <h5 class="question font-bold mb-2">Danny</h5>

  <p class="opacity-50 mb-1">Part of TC42 and 130, totally expert</p>
  <ul class="ml-8">
    <li>Wants to see the status of a doc/std</li>
    <li>Wants to get TC contact</li>
    <li>Searches by # or topic</li>
    <li>Doesn't read the news</li>
    <li>Would like interviews on podcasts on newer std</li>
    <li>Would like to see the scope on std page</li>
    <li>Would like to see the lifecycle in the search results</li>
  </ul>






</div>