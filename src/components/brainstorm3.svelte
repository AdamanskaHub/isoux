<script>import Carret from "../../static/carret.svelte"
let opened = ""
</script>

<!-- THREE -->
<button class=" flex items-center"
	on:click="{() => opened===3? opened=false : opened = 3}" aria-expanded={opened===3} >
  <Carret />
  <h4 class="title">Getting users to the "promo" website<span>(12/21)</span></h4> 
</button>

<div class="{opened===3? 'accordion-show':'hidden'}">
<p class="method mb-10"> <a href="https://en.wikipedia.org/wiki/Disney_method">Reverse brainstorm technique</a> </p>

<div class="flex mb-6">
<p class="opacity-50 mr-4">Participants</p>
<ul class="participants mb-4">
  <li>Thalita</li>
  <li>Ashraf</li>
  <li>Tharun</li>
  <li>Stefanie</li>
  <li>Luigi</li>
  <li>Lionel</li>
  <li>Emilie</li>
</ul>
</div>


<h5 class="question font-bold">How might we get random users to the ISO promo website?</h5>
<a href="https://www.figma.com/file/CL4YAPbhbXXMzFz0sx47bS/Newcomers-Edition---23%2F12?node-id=1%3A2" class="figmalink">Figma link
<img src="./promo.png" alt="figma file" class="figmaimg" /></a>
<p>The participants were thinking about an imaginary website/page that is designed specifically for first time users. How do we bring 5000 new users to that website?</p>

<h5 class="sub-title mt-12 mb-4" > Most popular ideas</h5>

<ul class="ideas">
  <li>
    <!-- <i class="far fa-handshake"> </i> -->
    <div>
      <p class="mini-title">Collaboration with influencer</p> 
      <p>"Ask a tiktoker or social media influencer to promote something on the site"</p>
    </div>
  </li>
  <li>
    <div>
<p class="mini-title">Advertising</p> 
    <p>"Make advertisements comparing standards and our dailylife."</p>
    </div>
    
  </li>
  <li>
    <div>
      <p class="mini-title">Great SEO</p> 
      <p>"Make sure ISO DOES appear in Google search"</p>
    </div>
  <li>
    <div>
      <p class="mini-title">Better accessibility</p> 
  <p>"Make the site accessible from mobile devices"</p>
    </div>
  </li>
  <li>
    <div>
      <p class="mini-title">Promotion</p> 
      <p>"Promote ISO to other website owners, make sure they link to our site"</p>
    </div>
  </li>
</ul>

<h5 class="sub-title mt-12 mb-4" > Other ideas</h5>

<ul class="other-ideas">
  <li>"Make iso’s name appear on news pages like BBC. Ofcourse with a catchy news article. Like ISO saved people"</li>
  <li>"Add a QR code pointing to ISO.org to all products that are “ISO CERTIFIED"</li>
  <li>"Make iso go beyond standard and a place for knowledge in general. Like wikipedia."</li>
  <li>"We somehow get iso.org to be deatured more on other websites such as the UN website"</li>
  <li>"Have a famous spokeperson (like Angelina Jolie for UNHCR)"</li>
</ul>

<p class="opacity-50">Special note</p>
<p class="mb-6">The participants came up with many modern ways to atttract users.</p>
</div>