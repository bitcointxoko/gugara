<script>
    import { _ } from '../services/i18n';
    // create a new `Date` object
const now = new Date();
// get the current date and time as a string
const currentHour = now.getHours();
</script>

<div>
    <!-- <h1 class="text-4xl font-serif font-semibold text-amber-500 ">{currentHour}:{currentMinute}</h1> -->
    {#if currentHour >= 8 && currentHour < 12}
        <h1 class="text-4xl font-serif font-semibold text-amber-500 ">{$_('greeting.morning')}</h1>
    {:else if currentHour >= 12 && currentHour < 14}
        <h1 class="text-4xl font-serif font-semibold text-amber-500 ">{$_('greeting.midday')}</h1>
    {:else if currentHour >= 14 && currentHour < 21}
        <h1 class="text-4xl font-serif font-semibold text-amber-500 ">{$_('greeting.afternoon')}</h1>
    {:else}
        <h1 class="text-4xl font-serif font-semibold text-amber-500 ">{$_('greeting.night')}</h1>
    {/if}
</div>