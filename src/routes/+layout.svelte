<script lang="ts">
	import { page } from '$app/stores';

	import TopAppBar, { Row, Section, Title as BarTitle } from '@smui/top-app-bar';
	import Drawer, { AppContent, Content, Header, Title, Subtitle } from '@smui/drawer';
	import List, { Item, Text } from '@smui/list';
	import IconButton from '@smui/icon-button';

	let open = false;
	let path: string;

	// binds to changes only to pathname deeper from the generated store ;)
	$: path = $page.url.pathname;
</script>

<TopAppBar variant="static" prominent={false} dense={true} color={'primary'}>
	<Row>
		<Section>
			<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
			<BarTitle>Quotes {path}</BarTitle>
		</Section>
	</Row>
</TopAppBar>
<div class="flexor-content">
	<div class="drawer-container">
		<Drawer variant="dismissible" bind:open>
			<Header>
				<Title>Net-AV</Title>
				<Subtitle><hr /></Subtitle>
			</Header>
			<Content>
				<List>
					<Item href="/" on:click={() => console.log('New')}>
						<Text>New</Text>
					</Item>
					<hr />
					<Item href="/" on:click={() => console.log('Save')}>
						<Text>Save</Text>
					</Item>

					<Item href="/snacks" activated={path === '/snacks'} on:click={() => (open = false)}>
						<Text>Save As</Text>
					</Item>
					<hr />
					<Item href="/grid" activated={path === '/grid'} on:click={() => (open = false)}>
						<Text>Print</Text>
					</Item>
					<hr />
					<Item href="/grid" activated={path === '/grid'} on:click={() => (open = false)}>
						<Text>Preferences</Text>
					</Item>
				</List>
			</Content>
		</Drawer>

		<AppContent class="app-content">
			<slot />
		</AppContent>
	</div>
</div>

<style lang="scss">
	// @import '@ubeac/svelte/styles/tabler.css';

	.drawer-container {
		position: relative;
		display: flex;
		height: 100%;
		border: 1px solid var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
		overflow: hidden;
		z-index: 0;
	}
	.flexor-content {
		flex-basis: 0;
		height: 0;
		flex-grow: 1;
		overflow: hidden;
	}
	/* "sadly" how to overwrite components from outside */
	* :global(.app-content) {
		flex: auto;
		overflow: hidden;
		position: relative;
		flex-grow: 1;
		padding: 35px;
	}
</style>
