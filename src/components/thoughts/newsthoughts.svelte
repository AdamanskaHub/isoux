<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='news'? opened=false : opened = 'news'}" aria-expanded={opened==='news'} >
  <Carret />
  <h4 class="title">Thoughts about news</h4> 
</button>

<div class="{opened==='news'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  The news get little views but lots of efforts are poured into them. They are good old plain text with generic images in a world of tiktiok, videos, low span of attention and extreme competitivity for people's eyeballs.
  <br>
  It might be better to altogether get rid of them, except that they help the website rank well.
  <br>
  However, the energy used for the news could be used in a more efficient way. 
  <br>
  A more efficient way could be: creating content that's useful for the members, creating content to raise awareness about standards, producing the kind of content that appeals to ISO's different audiences, creating content of a different type, more in line with what is being done currently online.
  </p>


  <h5 class="question font-bold mb-2">Trends</h5>

  <p>References:</p>
  <a href="https://www.curemedia.com/media-consumption-trends/">General trends</a><a href="https://whatsnewinpublishing.com/us-media-consumption-trends-tectonic-shifts-emerge/">General trends</a><a href="https://vidchops.com/the-short-form-video-trends-that-will-define-2021/">Short videos</a><a href="https://explodingtopics.com/blog/video-trends">Short videos</a><a href="https://www.convinceandconvert.com/content-marketing/video-is-the-now-but-short-form-video-is-the-future/">Short videos</a>

  <p>Generally we are going away from text towards sounds and images. Podcasts for long form content (interviews, open discussions), videos for long form and instructional content (tutorial, animation, interviews, documentaries), infographics for their capacity to capture an idea (and the attention of the watcher) at a glance, but also more and more shorter videos, sometimes under a minute.</p>

  <p class="font-bold">Podcasts</p>
  <ul>
    <li>From 5min to 1h30</li>
    <li>Averaging at 40min </li>
    <li>Interviews or conversations</li>
    <li>Aims to inform and entertain</li>
    <li>Images would not add much value</li>
    <li>Goes in depth</li>
    <li>Target: experts</li>
  </ul>

  <p class="font-bold">Long videos</p>
  <ul>
    <li>From 5min to 30min</li>
    <li>Interviews or documentary style</li>
    <li>Aims to inform and entertain</li>
    <li>Visual aspect must add value</li>
    <li>Goes in depth(ish)</li>
    <li>Target: anyone depending how it's done, except absolute noobs</li>
  </ul>

  <p class="font-bold">Short videos</p>
  <ul>
    <li>3min max</li>
    <li>Any type of content, every type</li>
    <li>Aims to inform and entertain, one subject straight to the point</li>
    <li>Visual aspect must add value, especially keeping the rythm high</li>
    <li>No depth whatsoever</li>
    <li>Target: anyone depending how it's done, especially noobs</li>
  </ul>

  <p class="font-bold">Infographics</p>
  <ul>
    <li>Can you add some graphs in this piece of media? Yes, then do. No, try harder.</li>
  </ul>

  <h5 class="question font-bold mb-2">Trends</h5>




</div> <!--closing accordion-->