<script lang="ts">
  import { _ } from '../services/i18n'
  import { Navbar, NavBrand, DarkMode } from 'flowbite-svelte'
  import {
    Drawer,
    Button,
    CloseButton,
    Dropdown,
    DropdownItem,
  } from 'flowbite-svelte'
  import BarsOutline from 'flowbite-svelte-icons/BarsOutline.svelte'
  import { sineIn } from 'svelte/easing'
  import Sidebar from './Sidebar.svelte'
  import { setLocale } from '$lib/util'

  let hidden1 = true
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  }
</script>

<Navbar let:NavContainer class="bg-warm-100 dark:bg-cool-100">
  <NavContainer class="py-2 px-2">
    <div class="text-center">
      <Button color="none" on:click={() => (hidden1 = false)}
        ><BarsOutline /></Button
      >
    </div>
    <NavBrand href="/" class="mx-auto">
      <img
        src="/logo.webp"
        class="h-10 sm:h-12 me-3"
        alt="Bitcoin Txoko Logo"
      />
    </NavBrand>
    <DarkMode />
  </NavContainer>
</Navbar>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
>
  <div class="flex">
    <Button color="none" class="dark:text-white">{$_('locale.short')}</Button>
    <Dropdown>
      <DropdownItem on:click={() => setLocale('en')}>🇬🇧</DropdownItem>
      <DropdownItem on:click={() => setLocale('es')}>🇪🇸</DropdownItem>
      <DropdownItem on:click={() => setLocale('eu')}>
        <img src="/eus.svg" alt="ikurriña" />
      </DropdownItem>
    </Dropdown>
    <CloseButton
      on:click={() => (hidden1 = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <Sidebar />
</Drawer>
