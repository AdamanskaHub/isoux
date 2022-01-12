<script>
  import { onMount } from 'svelte';

  onMount(()=>{
    const mobileBtn =  document.querySelector('.mobile-menu')
    const sidebar= document.querySelector('.sidebar')
    mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('-translate-x-full')
    })
  })
  
  import {page} from '$app/stores'

  const nav = [
    {title:'Introduction', path:'/'},
    {title:'Brainstorms', path:'/brainstorms'},
    {title:'UX Interviews', path:'/uxinterviews'},
    {title:'Others', path:'/others'},
  ]

</script>



<div class="relative min-h-screen md:flex">
  <!-- MOBILE MENU-->
  <div class="mini-sidebar flex justify-between md:hidden">
  <!-- mobile menu -->
    <a href="www.iso.org" class=" flex items-center">
      <img src="/Logo.svg" alt="iso.org" class="w-8 logo">
      <span class="text-2x1  font-bold pl-2"> ISO UX</span>
    </a>

    <button class="mobile-menu p-4 focus:outline-none focus:bg-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>

  <!-- SIDEBAR -->
  <div class="w-54 sidebar absolute space-y-6  px-4 py-4 inset-y-0 left-0 transform -translate-x-full md:translate-x-0 md:relative">
    <a href="www.iso.org" class=" flex items-center">
      <img src="/Logo.svg" alt="iso.org" class="w-12 logo">
      <span class="text-2x1  font-bold pl-2"> ISO UX</span>
    </a>
    <nav>
      {#each nav as item}
        <a href={item.path} class="block py-1.5 nav-items" class:active-link={$page.url.pathname === item.path}>{item.title}</a>
      {/each}
    </nav>
  </div>

  <div class="container p-10 text-2x1 flex-1 max-w-screen-lg">
    <slot />
  </div>
</div> 

<style>

  .sidebar {
    background-color: #051626;
    color: #fff;
    transition: 200ms ease-in-out;
  }

  .mini-sidebar {
    background-color: #051626;
    color: #fff;
  }

  .logo{
    background-image: url(https://cdn.iso.org/resources/wood/3.3.7/img/iso/iso-logo.svg);
    background-color: #d33a2c;
  }
  .nav-items{
    transition: all .3s ;
  }
  .nav-items:hover{
    color: #d33a2c;
  }

  .active-link{
    color: #d33a2c;
    text-decoration: underline;
  }

</style>