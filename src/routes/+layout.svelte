<script>
    import "../app.css";
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
    import { setupI18n } from '../services/i18n';
	  setupI18n({ withLocale: 'es' });
  </script>
  
  <div class="container relative flex flex-col max-w-[1800px] mx-auto w-full text-sm sm:text-base min-h-screen">
    <Header/>
    <slot />  
    <Footer/>
  </div>