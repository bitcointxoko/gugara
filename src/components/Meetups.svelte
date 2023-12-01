<script>
  import { _ } from "../services/i18n";
  import { PUBLIC_RSVPLEASE, PUBLIC_YONDAR } from "$env/static/public";

  let meetups = [
    {
      date: "17.12.2023",
      start: "15:00",
      end: "19:00",
      location: "Izarra Centre, Ermua",
      locationNaddr:
        "naddr1qqx5j7npwfexzgzrv4h8gun9qy88wumn8ghj7mn0wvhxcmmv9uq3zamnwvaz7tmwdaehgu3wwa5kuef0qyfhwumn8ghj7ur4wfcxcetsv9njuetn9upzqkvlvlma7a55ccp6d5rrdc27h3ssmdmael286mjaq5uxmqslk04fqvzqqqyj3vxwxkju",
      rsvpEvent:
        "b2864f90174986cb4f9eb1998905756f3d2ac43e33fc8e033285b611bbeb73ce",
    },
  ];
</script>

<div
  class="mt-6 px-2 sm:px-4 md:px-6 pt-2 sm:pt-4 md:pt-6 pb-1 sm:pb-2 md:pb-3 my-6 h-30 gap-4 rounded-lg border border-solid hover:border-bright bg-card-bright font-mono max-w-lg"
>
  <h2 class="text-xl ml mt text-title-bright">{$_("meetup.title")}</h2>
  <div class="divide-y">
    {#each meetups as meetup}
      <div
        class="relative mx-2 py-4 border-gray-300 text-muted-bright mt-2 flex flex-row"
      >
        <div>
          <p>🗓️ {meetup.date} {meetup.start}-{meetup.end}</p>
          <a href="{PUBLIC_YONDAR}{meetup.locationNaddr}"
            ><p>
              📍 <span
                class="hover:text-highlight hover:underline hover:decoration-dashed"
                >{meetup.location}</span
              >
            </p></a
          >
        </div>
        <a
          href="{PUBLIC_RSVPLEASE}{meetup.rsvpEvent}"
          class="absolute right-1 px-3 py-3 rounded-lg text-center text-sm text-gray-50 bg-button-bright hover:bg-green-800 hover:text-highlight"
          >{$_("meetup.rsvp")}</a
        >
      </div>
    {/each}
  </div>
</div>
