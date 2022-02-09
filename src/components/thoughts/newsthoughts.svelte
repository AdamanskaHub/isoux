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
  <div class="flex flex-col mb-2">
<a href="https://www.curemedia.com/media-consumption-trends/" class="active-link">General trends</a><a class="active-link" href="https://whatsnewinpublishing.com/us-media-consumption-trends-tectonic-shifts-emerge/">General trends</a><a class="active-link" href="https://vidchops.com/the-short-form-video-trends-that-will-define-2021/">Short videos</a><a class="active-link" href="https://explodingtopics.com/blog/video-trends">Short videos</a><a class="active-link" href="https://www.convinceandconvert.com/content-marketing/video-is-the-now-but-short-form-video-is-the-future/">Short videos</a>
  </div>
  

  <p>Generally we are going away from text towards sounds and images. Podcasts for long form content (interviews, open discussions), videos for long form and instructional content (tutorial, animation, interviews, documentaries), infographics for their capacity to capture an idea (and the attention of the watcher) at a glance, but also more and more shorter videos, sometimes under a minute.</p>

  <p class="font-bold mt-2">Podcasts</p>
  <ul>
    <li>From 5min to 1h30</li>
    <li>Averaging at 40min </li>
    <li>Interviews or conversations</li>
    <li>Aims to inform and entertain</li>
    <li>Images would not add much value</li>
    <li>Goes in depth</li>
    <li>Target: experts</li>
  </ul>

  <p class="font-bold mt-2">Long videos</p>
  <ul>
    <li>From 5min to 30min</li>
    <li>Interviews or documentary style</li>
    <li>Aims to inform and entertain</li>
    <li>Visual aspect must add value</li>
    <li>Goes in depth(ish)</li>
    <li>Target: anyone depending how it's done, except absolute noobs</li>
  </ul>

  <p class="font-bold mt-2">Short videos</p>
  <ul>
    <li>3min max</li>
    <li>Any type of content, every type</li>
    <li>Aims to inform and entertain, one subject straight to the point</li>
    <li>Visual aspect must add value, especially keeping the rythm high</li>
    <li>No depth whatsoever</li>
    <li>Target: anyone depending how it's done, especially noobs</li>
  </ul>

  <p class="font-bold mt-2">Infographics</p>
  <ul>
    <li>Can you add some graphs in this piece of media? Yes, then do. No, try harder.</li>
  </ul>

  <h5 class="question font-bold mb-2  mt-4">Goals</h5>

  <p>It's important to not do short videos, for instance, just for the sake of following trends. Is there added value. What does a piece of media doing well looks like? How do we measure success?</p>
  <p>We can measure in terms of quantity and quality.</p>
  <span class="font-bold">Quantity</span>
  <ul>
    <li>How many clicks</li>
    <li>Did they watch/read until the end</li>
    <li>Did they take any action after that</li>
  </ul>
  <span class="font-bold mt-2">Quality</span>
  <ul>
    <li>Did they see what they expected to see</li>
    <li>Were they entertained</li>
    <li>Did they like the production/experience (sound, images, subjects etc)</li>
  </ul>
  <p>For quantity we can simply use analytics. For the quality we would need to implement some interviews and widgets to ask the users. It's simply harder to measure.</p>

  <p class="mt-2">It's important to make those goals match with even bigger ones such as the objectives for 2030. Did we increase the awareness about standards? Is the overall image more positive? Has it changed? Are members getting the info they need? In a format they like? Do they share more? Has their image of ISO improved? Is the ISO com' team feeling that their job has an impact? Is it exciting? </p>


  <h5 class="question font-bold mt-4 mb-2">A step by step guide to the future (Emilie's grand plan for less words and more excitement)</h5>

  <p class="font-bold mt-2">Quick win 1: Infographics</p>
  <p>Why? People skim through the article, at least here they can grasp the key points of the information.</p>
  <p>How? Each news should be inspected to see if a little pie chart, a little graph, or even better cool looking infographics, could be inserted. Then throw it there, preferably in the first part of the text.</p>
  <p>Lazy option => ask Alexane or Emilie to quickly do something, add it. </p>
  <p>Better => there's an official style for infographics</p>
  <p>Better! => the infographics are animated</p>
  <p>Better!! => the infographics have shapes and styles that are original and unique and match the content of the article (think a comparison of cats vs dogs not with sad bar charts but a bar made of cats and dogs</p>
  <p>Did it work? We show both to people and ask which they prefer. Is it even necessary though?</p>


  <p class="font-bold mt-2">Quick win 2: Read it</p>
  <p>Why? People skim through the article, at least here they can listen to it as they do something else.</p>
  <p>How? Each time there's a news it is read and recorded by someone with great English and voice (or a couple of people). It's added at the top of the news.</p>
  <p>Lazy option => it's already lazy. <a href="https://www.wsj.com/articles/china-fortifies-its-borders-with-a-southern-great-wall-citing-covid-19-11643814716?mod=hp_lead_pos6">Example</a> </p>
  <p>Did it work? We measure clicks on the play btn.</p>

  <p class="font-bold mt-2">Quick win 3: Cleaner</p>
  <p>Why? So many links and things asking me to actually not focus on the article. Also white space please. </p>
  <p>How? Alexane + Emilie team effort on spacing. Some rules for how much of what on the right hand side of the news.</p>
  <p>Lazy option => it's already lazy. </p>
  <p>Did it work? We show both to people and ask which they prefer.</p>

  <p class="font-bold mt-2">Medium energy win 1: Short videos</p>
  <p>Why? People don't read much. From my (Emilie) interviews I heard multiple people asking for videos. Content in video format is more engaging for many people.</p>
  <p>How? At the top of the news you have the video of it. Short stuff, 3min tops. Underneath we have the text that is the transcript of the video. This replaces the audio only option ofc. <a href="https://www.bbc.com/news/av/10462520">Example</a></p>
  <p>Lazy option => I would suggest to do it properly actually and have good video with some images and at least a very quick (2s) intro and outro animations, a proper style and sexy official ISO voice at the narration.</p>
  <p>Better => Fancy and snappy videos</p>
  <p>Better! => Fancy and with a personality!!!</p>
  <p>Did it work? Did they watch.</p>


  <p class="font-bold  mt-2">Big energy win 1: Long videos</p>
  <p>Why? Sometimes short and sweet is not appropriate.</p>
  <p>How? At the top of the long news you have the video of it. More depth, more minutes, think of a mini mini documentary. Underneath we have the text that is the transcript of the video. This replaces the audio only option ofc. <a href="https://www.youtube.com/watch?v=eMFYkOXr_Ok">Example</a> as you can see most of the images are actually static(!) but thanks to the engaging personality of the narrator and the movements, it just works. <a href="https://www.youtube.com/watch?v=TppkZGWZFHw">Awesome example.</a> Look at that: wow, that's how it's done. Smooooooth, just the right amount of animation vs information. THIS IS TOP QUALITY SHORT VIDEOS!</p>
  <p>Lazy option => I would suggest to do it properly actually and have good video with some images, transitions, text on screen, graphs and such, and at least a very quick (2s) intro and outro animations, a proper style and sexy official ISO voice at the narration.</p>
  <p>Better => Fancy and snappy videos</p>
  <p>Better! => Fancy and with a personality!!!</p>
  <p>BETTER => Like the <a href="https://www.youtube.com/watch?v=TppkZGWZFHw">that</a></p>
  <p>Did it work? Did they watch. Was it worth the effort.</p>
  
  <h5 class="question font-bold mt-4 mb-2">Once the news are top-notch</h5>

  <p>Without proper content, content that people actually have an interest in, it doesn't matter how good is the video. This can be found via UX research.</p>
  <p>In the same way, without appropriate promotion on the appropriate channels, people are not going to magically land on the news. But that's another story for another time...</p>




</div> <!--closing accordion-->