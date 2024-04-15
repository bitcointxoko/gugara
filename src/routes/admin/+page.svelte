<script lang="ts">
	import { PUBLIC_PUBKEY } from '$env/static/public';
	import ndk from '$lib/stores/ndk';
	import currentUser from '$lib/stores/currentUser';
	import { NDKEvent, NDKNip07Signer } from '@nostr-dev-kit/ndk';
	import {
		Button,
		Fileupload,
		Input,
		Label,
		Listgroup,
		ListgroupItem,
		Modal,
		Search,
		Select,
		Textarea
	} from 'flowbite-svelte';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	import timezones from '$lib/data/timezone.json';
	import type { NDKEventStore, ExtendedBaseType } from '@nostr-dev-kit/ndk-svelte';
	import { onMount, onDestroy } from 'svelte';

	let calendarStore: NDKEventStore<ExtendedBaseType<NDKEvent>>;
	let calendars: [{ value: string; name: string }];

	if ($currentUser)
		calendarStore = $ndk.storeSubscribe(
			{ kinds: [31924], authors: [$currentUser.pubkey] },
			{ closeOnEose: true }
		);

	onMount(() => {
		if ($currentUser)
			calendarStore = $ndk.storeSubscribe(
				{ kinds: [31924], authors: [$currentUser.pubkey] },
				{ closeOnEose: true }
			);
	});

	$: $calendarStore.map((event) => {
		if (event.tagValue('name')) {
			calendars = [
				{
					value: String(event.dTag),
					name: String(event.tagValue('name'))
				}
			];
		}
	});

	onDestroy(() => calendarStore?.unsubscribe());

	let event: {
		name: string;
		description: string;
		image: string;
		start: string;
		end: string;
		start_tzid: string;
		p: string;
		location: { name: string; address: string };
		address: string;
		g: string;
		calendar: string;
	} = {
		name: '',
		description: '',
		image: '',
		start: '',
		end: '',
		start_tzid: 'Europe/Amsterdam',
		p: '',
		location: { name: '', address: '' },
		address: '',
		g: '',
		calendar: ''
	};

	const create = async () => {
		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}

			const kind31923 = new NDKEvent($ndk);
			kind31923.kind = 31923;
			kind31923.content = event.description;

			kind31923.tags = [
				['name', event.name],
				['description', event.description as string],
				['image', event.image],
				['start', String(Math.floor(new Date(event.start).getTime() / 1000))],
				['end', String(Math.floor(new Date(event.end).getTime() / 1000))],
				['start_tzid', event.start_tzid],
				['p', $currentUser.pubkey, '', 'host']
			];

			if (event.location) {
				kind31923.tags.push(
					[
						'location',
						`${event.location.name}, ${event.location.address}`,
						event.location.name,
						event.location.address
					],
					[
						'address',
						`${event.location.name}, ${event.location.address}`,
						event.location.name,
						event.location.address
					]
					// ['g', '']
				);
			}

			if (event.calendar) {
				kind31923.tags.push(['calendar', `31924:${$currentUser.pubkey}:${event.calendar}`]);
			}

			await kind31923
				.publish()
				.then(() => {
					toast.success('Published', {
						position: 'bottom-right'
					});
					goto(`/calendar/${kind31923.encode()}`);
				})
				.catch((error) =>
					toast.error('Not published\n' + error, {
						position: 'bottom-right'
					})
				);
		}
	};

	let modalOpen = false;

	let files: FileList;

	const uploadFile = async () => {
		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}

			const kind22242 = new NDKEvent($ndk);
			kind22242.kind = 22242;
			kind22242.content = 'Authorize Upload';
			if (files) {
				kind22242.tags = [
					['name', files[0].name],
					['size', String(files[0].size)]
				];
			}

			const signature = await kind22242.sign();

			const uploadAuth = kind22242.rawEvent();

			const response = await fetch(
				`https://api.satellite.earth/v1/media/item?auth=${encodeURIComponent(JSON.stringify(uploadAuth))}`,
				{
					method: 'PUT',
					body: files[0]
				}
			);

			const data = await response.json();
			event.image = data.url;
			modalOpen = false;
		}
	};

	// let query: string;
	// let mapData: [];

	// let location: {};

	// const searchMap = async (query: string) => {
	// 	const response = await fetch(
	// 		`https://nominatim.openstreetmap.org/search?q=${query}&format=json`
	// 	);
	// 	const data = await response.json();
	// 	console.log(data);
	// 	mapData = data;
	// };
</script>

{#if $currentUser}
	{#if $currentUser.pubkey === PUBLIC_PUBKEY}
		<main class="mx-4 my-4 flex flex-col items-center gap-4">
			{#if event.image}
				<div>
					<img src={event.image} alt="uploaded" />
				</div>
			{/if}
			<form on:submit={create} class="flex flex-col gap-2">
				<div class="grid grid-cols-2 gap-2">
					<Label>
						Event name
						<Input type="text" bind:value={event.name} />
					</Label>
					<Label>
						Image
						<div class="flex gap-2">
							<Input type="url" bind:value={event.image} />
							<Button on:click={() => (modalOpen = !modalOpen)}>Upload</Button>
							<Modal title="Upload" bind:open={modalOpen} size="sm">
								<form on:submit|preventDefault={uploadFile} class="flex flex-col gap-2">
									<Fileupload id="multiple_files" bind:files />
									<Listgroup items={files} let:item class="mt-2">
										{#if item}
											{item.name}
										{:else}
											<ListgroupItem>No files</ListgroupItem>
										{/if}
									</Listgroup>
									<Button type="submit">Upload</Button>
								</form>
							</Modal>
						</div>
					</Label>
					<div>
						<Label>
							Start
							<Input
								type="datetime-local"
								min={new Date().toLocaleString()}
								bind:value={event.start}
							/>
						</Label>
						<Label>
							End
							<Input
								type="datetime-local"
								min={event.start.toLocaleString()}
								bind:value={event.end}
							/>
						</Label>
						<Label>
							Time Zone
							<Select bind:value={event.start_tzid} items={timezones} />
						</Label>
						<Label>
							Calendar
							<Select bind:value={event.calendar} items={calendars} />
						</Label>
					</div>
					<div>
						<!-- <form on:submit|preventDefault={() => searchMap(query)} class="flex flex-col gap-2">
							<Label>
								Search Map
								<Search bind:value={query} on:change={() => searchMap(query)} />
							</Label>
							<Select items={mapData} bind:value={event.location.name}/>
							<Button type="submit">Search</Button>
						</form> -->
						<Label>
							Location name
							<Input bind:value={event.location.name} />
						</Label>
						<Label>
							Location address
							<Input bind:value={event.location.address} />
						</Label>
					</div>
				</div>
				<Label>
					Description
					<Textarea bind:value={event.description} />
				</Label>
				<Button type="submit">Submit</Button>
			</form>
		</main>
	{:else}
		Forbidden
	{/if}
{:else}
	Sign in
{/if}
