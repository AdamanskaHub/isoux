<script>
import Carret from "../../../static/carret.svelte"
let opened=''

</script>
<button class=" flex items-center"
	on:click="{() => opened==='techstack'? opened=false : opened = 'techstack'}" aria-expanded={opened==='techstack'} >
  <Carret />
  <h4 class="title">Tech stack considerations<span> (01/22)</span></h4> 
</button>

<div class="{opened==='techstack'? 'accordion-show':'hidden'}">


  <p class="opacity-50 mr-4 mb-8">
  Currently iso.org runs on a stack of coupled jahia and java. Jahia is running an old version of itself. Modifications are painful and dangerous to do.
  </p>


<h5 class="question font-bold mb-2">CMS decoupled/coupled/headless</h5>

<p>References:</p>
<a href="https://www.brightspot.com/learn/articles/decoupled-cms-and-headless-cms-platforms">Brighspot</a><a href="https://www.contentful.com/blog/2019/02/04/difference-between-headless-decoupled-contentful/">Contentful</a><a href="https://www.contentstack.com/cms-guides/decoupled-cms/">Content stack</a><a href="https://www.progress.com/blogs/decoupled-vs.-headless">Progress</a><a href="https://www.storyblok.com/tp/headless-cms-explained">Storyblok</a>

<p class="font-bold mt-4">Coupled</p>
<p>In a traditional or coupled CMS, the traditional CMS architecture tightly links the back end to the front end. Content is created, managed, and stored—along with all digital assets—on the site’s back end. The back end is also where website design and customization applications are stored. This content management back end and database is bound within the same system that delivers and presents content to devices and end users (front end).</p>

<p class="font-bold mt-4">Decoupled</p>
<p>Decoupled CMS architecture separates—or decouples—the back-end and front-end management of a website into two different systems: one for content creation and storage, and another system, one or more, are responsible for consuming that data and presenting it to the user through some interface. In a decoupled CMS, these two systems are housed separately. Once content is created and edited in the back end, this front-end agnostic approach takes advantage of flexible and fast web services and APIs to deliver the raw content to any front-end design on any device or channel.</p>

<p class="font-bold mt-4">Headless</p>
<p>Headless architecture is actually a subset of decoupled architecture. Both have a content management and storage back ends and deliver content from that database through a web service or API. But the key difference is the presentation layer: unlike a decoupled CMS, a headless CMS does not have a defined front-end system or presentation environment. This means that a headless CMS implementation is “API only, UI anything”; it can push content to any device or channel with internet access. It can publish the same content to a website, an app, a wearable device or any device connected via Internet of Things (IoT) because the content isn’t bound by a predetermined user interface.</p>

<h5 class="question font-bold mb-2 mt-12">Pros and cons</h5>
<p class="mb-2"><span class="font-bold">A Decoupled CMS Frees Your Developers to Excel</span> Front-end technologies are accelerating, and new delivery channels and devices continue to grow exponentially. A traditional or legacy CMS locks your developers into the language and framework built into the CMS. Since a traditional CMS is a single website management tool that controls layout with built-in tools, it is difficult to change or integrate to use new state-of-the-art tools and solutions. </p>

<p class="mb-2"><span class="font-bold">A Decoupled CMS Enables Omnichannel Delivery</span> A major benefit that a decoupled CMS brings to the table is omnichannel delivery. Because your content is separate in a decoupled CMS, content managers create content while developers work on ways to present content for omnichannel delivery, such as native iOS and Android apps, wearable devices such as smartwatches, streaming apps etc.</p>

<p class="mb-2"><span class="font-bold"> A Decoupled CMS Improves Reliability and Performance</span> The problem with a traditional CMS is that it locks you into whatever your CMS vendor does or doesn’t support. By putting yourself into a proprietary content model that is reliant on front-end standards, it becomes hard to move away from a traditional CMS and can prove extremely difficult to re-purpose your content for multiple front-ends. Scaling is much easier to do with a decoupled CMS.</p>

<p class="mb-2"><span class="font-bold"> A Decoupled CMS Improves Reliability and Performance</span> The problem with a traditional CMS is that it locks you into whatever your CMS vendor does or doesn’t support. By putting yourself into a proprietary content model that is reliant on front-end standards, it becomes hard to move away from a traditional CMS and can prove extremely difficult to re-purpose your content for multiple front-ends. Scaling is much easier to do with a decoupled CMS.</p>

<p class="mb-2"><span class="font-bold">A Decoupled CMS Saves Time</span> By separating content from the presentation layer, makes it possible to let developers work on upgrades and site redesigns without holding your content editors hostage, while upgrading the system or applying new presentation changes. If you need to upgrade the system or roll out a new site for a marketing campaign, a legacy CMS might take weeks to months. Using a decoupled CMS, it can take as little as a day. When you are upgrading software with a decoupled CMS, only the back and front-end of your CMS application is affected, not your content and your website.</p>

<p class="mb-4 mt-8 font-bold">Pros and cons in the case of isoorg</p>
<ul class="mb-2">
  <li>PROS</li>
  <li>WT (web team) can choose its own stack of tech and therefore be modern</li>
  <li>WT doesn't depend on IT for deployments => can update not content but STYLE and STRUCTURE multiple times a day!</li>
  <li>Possibility to upgrade/change with ease tech stack as technology evolves</li>
  <li>A loooot more flexibility in design</li>
  <li>Components can be created and implemented in a day (without even touching java)</li>
  <li>Possibility to develop thinking components first (as it's done now)</li>
  <li>More possibility to animate</li>
  <li>More control about responsiveness</li>
</ul>

<ul class="mb-2">
  <li>CONS</li>
  <li>Less flexibility for the editors (rigidity which I -Emilie- think is a good thing</li>
  <li>It means a LOT of work basically from scratch to get it working (but the alternative is each task everyday is a lot of work)</li>
</ul>

<p><span class="font-bold">Emilie -> A Decoupled CMS Separates IT and Front-end</span> IT can do their thing independantly, with java or whatever they see fit. Meanwhile the Front-end (the web team) can uses whatever they want without asking anything from the IT (the back-end). IT just needs to create an API that the web team can call.</p>

<img class="mt-4" src="https://brightspot.brightspotcdn.com/dims4/default/61c94ad/2147483647/strip/true/crop/1600x988+0+0/resize/1600x988!/format/webp/quality/90/?url=http%3A%2F%2Fbrightspot-brightspot.s3.amazonaws.com%2Fbsp%2Fd3%2F75%2F1bd434f44feb95b3132d15e0edf2%2Fdecoupled-cms-infographic-2.png" alt="api schema">


<h5 class="question font-bold mb-2 mt-12">Stacks for isoorg</h5>

<p class="mt-2">IT can keep using java to create an API or they can switch to Go, doesn't matter to the web team</p>

<p class="mt-2">Of all front-end frameworks that can be used (react, angular, vue, svelte) Sveltekit is probably the best option as it's the rising star and the one that Lionel would not struggle with learning (while he would suffer with React & friends, Svelte is very close to original html and vanilla js).</p>

<p class="mt-2">Storybook for component/design system</p>

<p class="mt-2">Some testing implemented. Jest? Playwright?</p>

<p class="mt-2">Component first css with tailwind?</p>


  <h5 class="question font-bold mb-2 mt-12">A concrete example with the pledgers page</h5>

  <ul class="mb-4">
    <li>Design</li>
    <li>Creating the component in wood</li>
    <li>Making the component hyper future proof</li>
    <li>Publishing the component (with the IT involved)</li>
    <li>Creating the page with preexisting block in jahia</li>
    <li>Adding each pledge via jahia's interface</li>
    <li>No possibility to easily edit the structure/looks of the quotebox</li>
  </ul>

  <ul class="mb-4">
    <li>Design</li>
    <li>Creating the component in storybook with testing</li>
    <li>Adding the component in Sveltekit</li>
    <li>Creating the page however we want with total control</li>
    <li>Adding each pledge either via netlify cms for editors (something very simple with just fiels to fill in) or via code</li>
    <li>Easily edit/add/delete the structure/looks of the quotebox at any point in any way</li>
  </ul>



</div>