<script>
  import FiveSec from '../components/others_comp/fivesec.svelte'
  import TechStack from '../components/others_comp/techStack.svelte'
  import Persona from '../components/others_comp/persona.svelte'
  import Podcasts from '../components/others_comp/podcasts.svelte'
</script>

<h2 class="big-title mb-4">Others</h2>

<p class="opacity-50 mb-8">There are a variety of UX tools and methods to gather knowledge and test hypotesis.</p>

<Podcasts/>
<Persona/>
<FiveSec />
<a href="/newsletter" class="font-bold"><h3>Newsletter</h3></a>
<a href="others/podcast-guidelines" class="font-bold"><h3>Podcast Guidelines</h3></a>

<TechStack />