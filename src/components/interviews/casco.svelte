<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='casco'? opened=false : opened = 'casco'}" aria-expanded={opened==='casco'} >
  <Carret />
  <h4 class="title">Casco <span>(01/22)</span></h4> 
</button>

<div class="{opened==='casco'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  Interviews with CASCO website and CASCO section of iso.org to see what could be improved currently in their flow.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">UX fixes</h5>
    <ul class="ml-8">
      <li>Fav system in iso docs</li>
      <li>Infos currently found in the store not in the store (it's just weird)</li>
      <li>The casco part of iso.org could have all the links in a more optimised and grouped way</li>
      <li>More grouping of informations, less text more clear stuff</li>
      <li>Better advanced search in isodocs</li>
      <li>Permissions in iso solutions to not need the mirror</li>
    </ul>
  </div>
  

<!-- NORA -->

<h5 class="question font-bold mb-2">Nora</h5>

<p class="opacity-50 mb-1">She goes on the CASCO website mostly, not iso.org, about a couple of time a month.</p>
<ul class="ml-8">
  <li>Accesses the CASCO website from the favs</li>
  <li>Prefers the special website rather than the .org one</li>
  <li>It's more tedious from iso.org</li>
  <li>Looks for regulations and forms mostly</li>
  <li>CASCO has a lot of info which she likes</li>
  <li>Wants to see how the projects are linked visually</li>
  <li>Only goes to iso.org to see standards from other comittees</li>
  <li>Likes the brochures on CASCO, shares them regularly to instruct</li>
  <li>Wishes she could see an overview/summuary of brochure before hand</li>
  <li>Has a positive image of Iso</li>
  <li>Finds the documents she needs hard to find</li>
  <li>Would love a contact point like who's in charge for Europe</li>
  <li>Wishes the navigation was better</li>
  <li>Iso.org has too many news that she doesn't care about, she wants to see projects</li>
</ul>

<p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> she looks for something special on iso.org, a document for example, she searches, her results are news, she clicks a news, looks in it for the link to what she was actually looking for. Doesn't care much about the news, lots of extra clicking.</p>

<!-- CHRISTIAN -->

<h5 class="question font-bold mb-2 mt-8">Cristian</h5>

<p class="opacity-50 mb-1">Goes to both the CASCO website, the portal and iso.org</p>
<ul class="ml-8">
  <li>Gets information and shares it</li>
  <li>Likes the quality of the docs he finds</li>
  <li>Gets lost often</li>
  <li>Find Casco.iso very useful</li>
  <li>When scanning a page his eyes jump from links to links</li>
  <li>He wishes there was an entry point with all the links</li>
</ul>

<p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He is looking for a particular document that he has seen previously. iso.org > taking part > other > Casco. He can't find it anymore and spends 10min clicking around on all the available links on the casco page (on iso.org). </p>

<!-- AAINAA -->

<h5 class="question font-bold mb-2 mt-8">Aainaa</h5>

<p class="opacity-50 mb-1">Goes mostly to iso.org</p>
<ul class="ml-8">
  <li>Gets information and shares it</li>
  <li>Needs to know about certain TC statuses</li>
  <li>Never starts on the homepage but gets the link from google search</li>
  <li>Confused by the navigation</li>
  <li>Very used to the structure</li>
  <li>Struggles to find certain articles</li>
  <li>Often opens multiple tabs because she doesn't know where the info is</li>
  <li>Happens to find her info in the store section of the website (awkward)</li>
  <li>Wants one page to find everything</li>
</ul>

<p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span>She is looking for the status of a TC. She will type "ISO/TC27001" in google. She'll see two iso links and open both in different pages. Then she proceed to scroll them until she sees the status green block that she recognizes.</p>


<!-- Sandra -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Sandra</h5>

  <p class="opacity-50 mb-1">Mostly uses iso docs for everything Casco, but also .org and didn't know about Casco.org</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Goes to .org by typing "iso casco" in google and the first link goes to iso.org/comittee/54998</li>
    <li>Will read the articles on .org to keep herself up to date</li>
    <li>Likes the informations found on iso.org/comittee/54998</li>
    <li>Reacts to notifications</li>
    <li>Struggles to find certain articles</li>
    <li>Wishes everything was in the same place</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow:</span>She gets an email notification about a new casco document. She clicks the link after quickly scanning the email and lands on isodocs. There she might download the doc after reading it.</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>A dowload button where she lands from the Notification. </li>
    <li>A way to easily navigate between docs/ballots etc</li>
  </ul>

</div>


<!-- ELAINE -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Elaine</h5>

  <p class="opacity-50 mb-1">Uses iso docs and .org almost daily and rarely Casco.org</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Goes to .org by typing "iso" in google and then uses iso's search to look for "iso668"</li>
    <li>Reacts to notifications</li>
    <li>Finds presentations in isodocs but wish they were all grouped</li>
    <li>Wishes she could favourite some docs she goes back to all the time</li>
    <li>Wants to know what's the latest version of a standard</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow: </span>She gets an email notification about a new casco document. She clicks the link after quickly. She needs to login (everyday). She then sees the (uselessly long) document in which the only word that matters is "published". She will download it and share it to her experts, practitionners, employees of certified bodies.</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>A dowload button where she lands from the Notification. </li>
    <li>A way to easily navigate between docs/ballots etc</li>
    <li>A way to see the statuses with ease</li>
    <li>Favorites for docs</li>
  </ul>

</div>


<!-- MAHEYA -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Maheya</h5>

  <p class="opacity-50 mb-1">Uses iso docs very often and .org often</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Goes to .org by typing "iso" in google</li>
    <li>Reacts to notifications</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow: </span>None</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>No quick win really</li>
  </ul>

</div>

<!-- MAHEYA -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">German</h5>

  <p class="opacity-50 mb-1">Uses iso docs very often and .org often</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Goes to .org by using favorites</li>
    <li>Reacts to notifications</li>
    <li>When in the news section immediately scrolls to the bottom where the subject groups are</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow: </span>He's looking for a date => Click on his favorite "iso", goes to standards, then uses the search catalogue "17034", knows to click the first link, looks at the date, like to look at the abstract too and scopes and goals.</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>Favorites in iso docs as he spent a lot of time trying to find something for me and just couldn't.</li>
  </ul>

</div>


<!-- KAREN -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Karen</h5>

  <p class="opacity-50 mb-1">Uses iso docs and .org almost daily. Rarely iso.Casco.org</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Goes to .org by typing the end address in her search bar</li>
    <li>Reacts to notifications</li>
    <li>Doesn't even try to navigate in iso.org</li>
    <li>Like the tutorial like documents of iso and wants videos too</li>
    <li>Would like to easily access the member area (basically she wants to be log onto .org and see more things)</li>
    <li>Prefers to check links with other people (who might not have logins)</li>
    <li>Regularly wants to compare her country to other countries</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow: </span>She's looking for a standard's status => types is_crossorigin.org/technical-comittees, then ctl+f and types the number of what she's looking for. She clicks on it. She can see the lifecycle and gets the information she needs. (She doesn't use the search and doesn't end up on the store).</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>Nothing quick</li>
  </ul>
</div>

<!-- KRISTEN -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Kristen</h5>

  <p class="opacity-50 mb-1">Uses iso docs and the global directory almost daily and .org weekly.</p>
  <ul class="ml-8">
    <li>Gathers information and shares it most days</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Reacts to notifications</li>
    <li>Uses bookmarks</li>
    <li>Likes the presentations available</li>
    <li>Transfers docs to the mirror</li>
    <li>Sends links to other people</li>
    <li>Uses ctrl f</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow: </span>She's looking for a document => clicks a bookmark, she gets lost on .org and starts clicking AudioBufferSourceNode. She's looking for a link to the casco toolbox. She eventually finds it and navigates in the casco toolbox antique looking website</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>Renaming of the different links might help her</li>
  </ul>
</div>


<!-- FERNEY -->
<div class="mt-8 mb-8">
  <h5 class="question font-bold mb-2 ">Ferney</h5>

  <p class="opacity-50 mb-1">Uses uses .org a few times weekly.</p>
  <ul class="ml-8">
    <li>Gathers information and shares it</li>
    <li>Needs to know about certain TC statuses</li>
    <li>Types "iso" in google</li>
    <li>Likes the presentations available but can't find them</li>
    <li>Wants more videos</li>
    <li>Wants infographics</li>
    <li>Reads some news</li>
    <li>Would like to "watch" some standards to be informed of modifications</li>
  </ul>

  <p class="mt-2"><span class="font-bold">Problem flow (there's no problem actually): </span>She's looking for a standard => from iso.org she types the number of the standard in the search bar => she clicks the first link => the standard opens in the store and she can see the different information she needs.</p>

  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>Watch/follow standard</li>
    <li>Easier to find documents</li>
  </ul>
</div>




</div>