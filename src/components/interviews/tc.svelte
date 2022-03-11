<script>
import Carret from "../../../static/carret.svelte"
let opened=''
</script>


<button class=" flex items-center"
	on:click="{() => opened==='tc'? opened=false : opened = 'tc'}" aria-expanded={opened==='tc'} >
  <Carret />
  <h4 class="title">Technical Committees <span>(02/22)</span></h4> 
</button>

<div class="{opened==='tc'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  UX interviews with TC members.
  </p>

  <!-- SOLUTIONS -->
  <div class="mt-8 mb-8">
    <h5 class="question font-bold mb-2">Pain points</h5>
    <ul class="ml-8">
      <li>tbc</li>
    </ul>
  </div>
  

  <!-- SALLY -->

  <h5 class="question font-bold mb-2">Sally</h5>

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


    <!-- NIGEL -->

  <h5 class="question font-bold mb-2 ">Nigel</h5>

  <p class="opacity-50 mb-1">TC Chairman goes on iso.org twice a week, and from there to OBP.</p>
  <ul class="ml-8">
    <li>Checks the ISO list of technical committee</li>
    <li>Looks for contact info</li>
    <li>checks out info on the OBP</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> He goes to iso.org => about us => standards => map => finds the country and clicks on it</p>
  <p>Taking parts => dev standards => TC link => list of TCs => clicks the correct TC => finds info on the page => clicks preview => goes to OBP and read the info </p>
  
  <p class="mt-2 "><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>TC (in the store page) is not a link but an internal tab (see video)</li>
    <li>Better committee.iso.org</li>
  </ul>

  <!-- Martin -->

  <h5 class="question font-bold mb-2 mt-8">Martin</h5>

  <p class="opacity-50 mb-1">TC Chairman goes on iso.org 1x/month, portal few times a week, obp rarely.</p>
  <ul class="ml-8">
    <li>Checks the ISO list of technical committee</li>
    <li>Looks for contact info rarely</li>
    <li>Checks out meetings and docs and ballots regularly</li>
    <li>Feels a bit spammed by emails because he's in many committee</li>
    <li>Gets lots of notifications</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow:</span> From bookmarks => committee.iso.org => list of committee. </p>
  <p></p>
  
  <p class="mt-2"><span class="font-bold">Quick wins:</span></p>
  <ul>
    <li>Grouping emails together daily or every other days with a recap</li>
  </ul>

  <!-- PHILIP -->

  <h5 class="question font-bold mb-2 mt-8">Philip</h5>

  <p class="opacity-50 mb-1">TC Chairman, works at BP, goes on iso.org rarely, portal few times a week.</p>
  <ul class="ml-8">
    <li>Checks the ISO list of technical committee</li>
    <li>Looks for contact info rarely</li>
    <li>Checks out meetings and docs and ballots regularly</li>
    <li>Feels a bit spammed by emails because he's in many committee</li>
    <li>Gets lots of notifications</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Secretary creates a meeting => Philip receives email => He wants to add it to his outlook calendar and he wants alerts</p>
  <p>A month before he'd like a reminder and a link in the reminder email to register if not done yet</p>
  <p>He wants a zoom link in the email and to be added to his outlook too (might as well)</p>
  <p>The way pdfs of standards are edited/discussed/annoted is currently very old school: emails back and forth, editing in word all in separate docs and more middle ages things. On average you'll have 30 contributors, a max of 10 being really active. It would be great to have a <a href="https://www.annotate.com">system</a> to enable users to annotate, share and discuss in a more efficient (way more efficient and time saving) way. (I discuss a lot with him about what would be best and it's quite doable what he needs - the tech exists)</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Grouping emails together daily or every other days with a recap</li>
    <li>Adding meetings to his outlook calendar from the email notif he gets</li>
  </ul>

  <!-- PHILIP 2 -->

  <h5 class="question font-bold mb-2 mt-8">Philip2</h5>

  <p class="opacity-50 mb-1">TC Chairman jtc1, goes on iso.org rarely, portal few times a week.</p>
  <ul class="ml-8">
    <li>Looks for contact info rarely</li>
    <li>Checks out meetings and docs and ballots regularly</li>
    <li>He's in many committee</li>
    <li>Gets lots of notifications</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He wants the docs from a reference from people with N number => will do an advanced search => opens doc => checks out the scope.</p>
  <p>He wants to find the people of a TC he's not part of = googles iso tc304 => click the iso.org link => on that page there's the email but not of the chair which is the one he wanted, he's frustrated.</p>
  
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>In docs it should be possible to see limited info (particularly contact) about any tc, even those we're not part of (in committee structure)</li>
    <li>He'd love a compact view for the results to scan more efficiently</li>
    <li>Possibility to filter his meetings per subcommittee (relevant for other users too)</li>
    <li>He should be able to see the status of meetings (accepted, pending etc)</li>
    <li>He should be able to see a list of his accepted meetings</li>
  </ul>

  <!-- JASON -->

  <h5 class="question font-bold mb-2 mt-8">Jason</h5>

  <p class="opacity-50 mb-1">TC Chairman, goes on iso.org rarely, portal most days, obp often.</p>
  <ul class="ml-8">
    <li>Looks for contact info rarely</li>
    <li>Checks out meetings and docs and ballots regularly</li>
    <li>He's in many committee</li>
    <li>Gets over 30 emails per week but fine with that</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He wants to navigate between the different workspaces of the portal smoothly (even has a mockup of how it could be) => From the meeting he wants to access the docs mentionned or about the meetings.</p>
  <p>He wants to see (meetings) the time for his time zone (poor man is in Australia, has to convert everything, misses meetings and it's so easy technically)</p>
  
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Wants an editable doc to collaborate with others (like Philip wants)</li>
    <li>Longer time loaded</li>
    <li>Wants the workspace to have real time updates</li>
    <li>He should be able to see a list of his accepted meetings etc</li>
  </ul>

  <!-- Anish -->

  <h5 class="question font-bold mb-2 mt-8">Anish</h5>

  <p class="opacity-50 mb-1">TC Chairman, doesn't go on iso.org, portal most days.</p>
  <ul class="ml-8">
    <li>Is an editor</li>
    <li>Said he was frustrated with the UX</li>
    <li>Struggles a lot with the meetings</li>
    <li>Mostly fine with the docs</li>
    <li>Really wants calendars connections</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He needs to register for a meeting. Goes to meetings => searches for sc 58 => open meeting he found => registers => has a lot of clicks to validates => click go back (which is something you gotta know, 0% intuitive) => can click add calendar => an ics is downloaded => he launches it and fiiiiinally it's on his calendar</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>My committee box should be min height of 100vh (checkout the video)</li>
    <li>Should by default see all committee (not first one to request that)</li>
    <li>Loading is weird (checkout vid)</li>
    <li>When he uploads a doc he would want to immediately and simply be able to add a notification with it</li>
    <li>Would like a way/place to discuss documents (basically notion is what they need, checkout the video). He wants a way (simple and clear and fast) to make a progress between meetings electronically</li>
  </ul>

  <!-- GARY -->

  <h5 class="question font-bold mb-2 mt-8">Gary</h5>

  <p class="opacity-50 mb-1">TC Chairman, doesn't go on iso.org, portal most days.</p>
  <ul class="ml-8">
    <li>He has a lot of documents to manage</li>
    <li>Very concerned about versioning</li>
    <li>Simply cannot do his work on docs platform and works outside on other platforms</li>
    <li>Collaborates a lot on documents</li>
    <li>Suffers from lack of permission management</li>
    <li>Has a very busy calendar</li>
    <li>He finds the website too slow</li>
    <li>He hates pdf cause you can't edit them</li>
    <li>Has a lot of workaround for everything because the whole iso platform is just wrong for him but he's still forced to used it in part</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He doesn't have one really in ISO or it's so big that it's everything.</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Give him a collaborative space for documents</li>
    <li>He needs versionning too</li>
    <li>Have some smart naming for documents so that it makes sense</li>
  </ul>

  <!-- KEITH -->

  <h5 class="question font-bold mb-2 mt-8">Keith</h5>

  <p class="opacity-50 mb-1">Convenor, doesn't go on iso.org, portal everyday days.</p>
  <ul class="ml-8">
    <li>Has a customized folders system</li>
    <li>Has a strong labelling/naming conventions</li>
    <li>Collaborates a lot on documents</li>
    <li>Has a very busy calendar</li>
    <li>Likes an old school mid-90's style of communication</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Download all the docs => uses an email reflector => discuss with the reflector after the meeting</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Quick preview & grp pdf+doc</li>
    <li>Option to dl all easily</li>
    <li>Wants an email reflector</li>
    <li>Default ordering should newer first</li>
    <li>Remove the prefixes to docs name from dl</li>
    <li>Faster</li>
  </ul>

  <!-- BILL -->

  <h5 class="question font-bold mb-2 mt-8">Bill</h5>

  <p class="opacity-50 mb-1">Admin of JTC1, doesn't go on iso.org, portal everyday days.</p>
  <ul class="ml-8">
    <li>Works outside of ISO on docs</li>
    <li>Switches quite a bit between different apps</li>
    <li>Loves the helpdesk</li>
    <li>Creates meetings</li>
    <li>Beta friendly</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Uses meeting as a starting point => clicks top right to navigate to other apps --- Get zip of the results ballots => send doc to some people => post into sub committee after making a collage pdf</p>
  
  <p class="mt-2"><span class="font-bold">Quick wins: </span></p>
  <ul>
    <li>Possibility to add multiple meetings/day</li>
    <li>Possibility to attach things to "email to all members"</li>
    <li>Really needs to copy paste and he can't (check out at the end of the vid)</li>
    <li>Wants a reflector</li>
  </ul>


  <!-- KHALID -->

  <h5 class="question font-bold mb-2 mt-8">Khalid</h5>

  <p class="opacity-50 mb-1">SC35 president, doesn't go on iso.org, portal from time to time</p>
  <ul class="ml-8">
    <li>Actually said he was unhappy with the platform without me even asking</li>
    <li>Wants one source of truth</li>
    <li>Doesn't want to go through afnor</li>
    <li>the portal is not at all beginner friendly</li>
    <li>Looks for docs and shares them</li>
    <li>Would want to be able to edit the docs</li>
    <li>Wants to simply see his sc35 upcoming meetings</li>
    <li>Thinks he should have access to all the WG of SC35</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>He's looking for the committee structure =>types in google sc35 working area => logs in via afnor => 403 permission denied => refreshes => searches parent grp but can't find it in my committees => clicks randomly, literally => clicks "general" => finds the committee structure</p>
  
  <p class="mt-2"><span class="font-bold">Wins: </span></p>
  <ul>
    <li>Have an onboarding tutorial</li>
    <li>Make docs editable cause they are many wanting that and it just pushes them outside the platform</li>
    <li>Have a simple view for those users who do just basic things</li>
  </ul>


  <!-- DAVID -->

  <h5 class="question font-bold mb-2 mt-8">David</h5>

  <p class="opacity-50 mb-1">Chair JTC SC22 & convenor, doesn't go on iso.org, meetings .5x/w, projects .25x/w, docs 1x/w</p>
  <ul class="ml-8">
    <li>Please watch the video</li>
  </ul>

  <p class="mt-2 mb-8"><span class="font-bold">Problem flow: </span>Asks for an N# by email to put it into the system => portal => docs => fumbles => finds the right folder => creates N# => sends it to appropriate people => people edit with # and send back => they upload</p>
  
  <p class="mt-2"><span class="font-bold">Wins: </span></p>
  <ul>
    <li>Wants to make some docs totally public with possibility to comment at the bottom</li>
    <li>Wants to have a clear url with just the N# (check out the video towards the end)</li>
    <li>Week long meeting, no time limit (watch his flow at the beginning of the video)</li>
    <li>Wants a way to modify frequency of alert "you haven't uploaded a doc" (see video)</li>
    <li>Wants to restore archive (again check out the video)</li>
  </ul>




</div>