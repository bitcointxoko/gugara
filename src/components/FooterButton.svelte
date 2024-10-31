<script lang="ts">
    export let url: string;
    export let icon: string;
    export let w: string;
    export let h: string;
    export let p: string;
</script>

<a href={url} class="inline-flex items-center align-middle">
    <button
        class={`flex gap-2 items-center w-16 h-16 dark:text-gray-50 text-gray-700 cursor-pointer`}
    >
        <svg
            fill="#ffffff"
            class="w-5 h-5 fill-current"
            viewBox={`0 0 ${w} ${h}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d={icon} />
        </svg>
    </button>
</a>
