<script lang="ts">
	import { _ } from "svelte-i18n";
	import { PUBLIC_PUBKEY } from "$env/static/public";
	import ndk from "$lib/stores/ndk";
	import currentUser from "$lib/stores/currentUser";
	import { NDKEvent, NDKNip07Signer } from "@nostr-dev-kit/ndk";
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
		Spinner,
		Textarea,
	} from "flowbite-svelte";
	import toast from "svelte-french-toast";
	import { goto } from "$app/navigation";
	import timezones from "$lib/data/timezone.json";
	import type {
		NDKEventStore,
		ExtendedBaseType,
	} from "@nostr-dev-kit/ndk-svelte";
	import { onMount, onDestroy } from "svelte";
	import Geohash from "latlon-geohash";
	import SigninAlert from "../../components/signin/SigninAlert.svelte";

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
		if (event.tagValue("name")) {
			calendars = [
				{
					value: String(event.dTag),
					name: String(event.tagValue("name")),
				},
			];
		}
	});

	onDestroy(() => calendarStore?.unsubscribe());

	let event: {
		title: string;
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
		title: "",
		description: "",
		image: "",
		start: "",
		end: "",
		start_tzid: "Europe/Amsterdam",
		p: "",
		location: { name: "", address: "" },
		address: "",
		g: "",
		calendar: "",
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
				["title", event.title],
				["description", event.description as string],
				["image", event.image],
				[
					"start",
					String(
						Math.floor(
							new Date(event.start).getTime() / 1000
						)
					),
				],
				[
					"end",
					String(
						Math.floor(
							new Date(event.end).getTime() / 1000
						)
					),
				],
				["start_tzid", event.start_tzid],
				["p", $currentUser.pubkey, "", "host"],
			];

			if (location) {
				kind31923.tags.push(
					[
						"location",
						`${location.name}, ${location.address}`,
						location.name,
						location.address,
					],
					[
						"address",
						`${location.name}, ${location.address}`,
						location.name,
						location.address,
					],
					["g", location.g]
				);
			}

			if (event.calendar) {
				kind31923.tags.push([
					"calendar",
					`31924:${$currentUser.pubkey}:${event.calendar}`,
				]);
			}

			await kind31923
				.publish()
				.then(() => {
					toast.success("Published", {
						position: "bottom-right",
					});
					goto(`/calendar/${kind31923.encode()}`);
				})
				.catch((error) =>
					toast.error("Not published\n" + error, {
						position: "bottom-right",
					})
				);
		}
	};

	let files: FileList;
	let uploading = false;
	let modalOpen = false;

	const uploadFile = async () => {
		if ($currentUser) {
			if (!$ndk.signer) {
				const signer = new NDKNip07Signer();
				$ndk.signer = signer;
			}

			const kind22242 = new NDKEvent($ndk);
			kind22242.kind = 22242;
			kind22242.content = "Authorize Upload";
			if (files) {
				kind22242.tags = [
					["name", files[0].name],
					["size", String(files[0].size)],
				];
			}
			kind22242.sig = await kind22242.sign();
			const uploadAuth = kind22242.rawEvent();

			uploading = true;
			const response = await fetch(
				`https://api.satellite.earth/v1/media/item?auth=${encodeURIComponent(JSON.stringify(uploadAuth))}`,
				{
					method: "PUT",
					body: files[0],
				}
			);
			const data = await response.json();
			event.image = data.url;
			uploading = false;
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

	let location: {
		lat: string;
		lon: string;
		name: string;
		address: string;
		g: string;
	} = {
		lat: "",
		lon: "",
		name: "",
		address: "",
		g: "",
	};

	function getGeohash(lat: string, lon: string) {
		location.g = Geohash.encode(lat, lon);
	}
</script>

<svelte:head>
	<title>Admin - Bitcoin Txoko</title>
	<meta name="description" content={`The admin panel of Bitcoin Txoko.`} />
</svelte:head>
{#if $currentUser}
	{#if $currentUser.pubkey === PUBLIC_PUBKEY}
		<main class="mx-4 my-4 flex flex-col items-center gap-4">
			{#if event.image}
				<div>
					<img
						src={event.image}
						alt="uploaded"
						class="h-64 max-w-full rounded-md"
					/>
				</div>
			{/if}
			<form on:submit={create} class="flex flex-col gap-2">
				<h2
					class="text-2xl font-bold text-gray-900 dark:text-white"
				>
					{$_("admin.newEvent")}
				</h2>
				<div class="grid gap-2 md:grid-cols-2">
					<Label>
						{$_("admin.title")}
						<Input
							required
							type="text"
							bind:value={event.title}
						/>
					</Label>
					<Label>
						{$_("admin.image")}
						<div class="flex gap-2">
							<Input
								required
								type="url"
								bind:value={event.image}
							/>
							<Button
								on:click={() =>
									(modalOpen = !modalOpen)}
								>{$_("admin.upload")}</Button
							>
							<Modal
								title="Upload"
								bind:open={modalOpen}
								size="sm"
							>
								<form
									on:submit|preventDefault={uploadFile}
									class="flex flex-col gap-2"
								>
									<Fileupload
										id="multiple_files"
										bind:files
									/>
									<Listgroup
										items={files}
										let:item
										class="mt-2"
									>
										{#if item}
											{item.name}
										{:else}
											<ListgroupItem
												>{$_(
													"admin.noFiles"
												)}</ListgroupItem
											>
										{/if}
									</Listgroup>
									<Button type="submit">
										{$_("admin.upload")}
										{#if uploading}
											<Spinner
												size={4}
												class="ml-1"
											/>
										{/if}
									</Button>
								</form>
							</Modal>
						</div>
					</Label>
					<div>
						<Label>
							{$_("admin.start")}
							<Input
								required
								type="datetime-local"
								min={new Date().toLocaleString()}
								bind:value={event.start}
							/>
						</Label>
						<Label>
							{$_("admin.end")}
							<Input
								required
								type="datetime-local"
								min={event.start.toLocaleString()}
								bind:value={event.end}
							/>
						</Label>
						<Label>
							{$_("admin.timeZone")}
							<Select
								required
								bind:value={event.start_tzid}
								items={timezones}
							/>
						</Label>
						<Label>
							{$_("admin.calendar")}
							<Select
								bind:value={event.calendar}
								items={calendars}
							/>
						</Label>
					</div>
					<div>
						<Label>
							{$_("admin.locationName")}
							<Input bind:value={location.name} />
						</Label>
						<Label>
							{$_("admin.locationAddress")}
							<Input
								bind:value={location.address}
							/>
						</Label>
						<Label>
							{$_("admin.latitude")}

							<Input bind:value={location.lat} />
						</Label>
						<Label>
							{$_("admin.longitude")}

							<Input bind:value={location.lon} />
						</Label>
						<Label>
							{$_("admin.geohash")}

							<div class="flex gap-2">
								<Input
									bind:value={location.g}
									class="w-3/4"
								/>
								<Button
									on:click={() =>
										getGeohash(
											location.lat,
											location.lon
										)}
									class="w-1/4"
								>
									{$_("admin.getHash")}
								</Button>
							</div>
						</Label>
					</div>
				</div>
				<Label>
					{$_("admin.description")}
					<Textarea bind:value={event.description} />
				</Label>
				<Button type="submit">{$_("admin.submit")}</Button>
			</form>
		</main>
	{:else}
		Forbidden
	{/if}
{:else}
	<SigninAlert />
{/if}
