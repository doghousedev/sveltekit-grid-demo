<script lang="ts">
	import '@ubeac/svelte/styles/tabler.css';
	import {
		Button,
		Card,
		Checkbox,
		Dialog,
		DialogBody,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle,
		El,
		Input,
		Table,
		TableHead,
		TableRow,
		TableCell,
		TableBody
	} from '@ubeac/svelte';

	let showCard: boolean = false;
	let selectedRow: any = null;
	let open: boolean = false;

	interface PbRecord {
		mfg: string;
		part_number: string;
		desc: string;
		unit_cost: number;
		unit_price: number;
	}

	let pbRecords: PbRecord[] = [
		{
			mfg: 'Sony',
			part_number: 'XBR-65X850E',
			desc: '65" BRAVIA 4K HDR Ultra HD TV with Android TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 1299
		},
		{
			mfg: 'LG',
			part_number: 'OLED65C7P',
			desc: '65" OLED 4K HDR Smart TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 1499
		},
		{
			mfg: 'Panasonic',
			part_number: 'TH-65EZ1000U',
			desc: '65" OLED 4K HDR Ultra HD TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 2999
		},
		{
			mfg: 'Samsung',
			part_number: 'UN65MU8500FXZA',
			desc: '65" Curved 4K UHD Smart LED TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 1699
		},
		{
			mfg: 'Sharp',
			part_number: 'PN-R903',
			desc: '90" Class (90-1/16" diagonal) Professional LCD Display',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 8499
		},
		{
			mfg: 'NEC',
			part_number: 'E905',
			desc: '90" LED Backlit Commercial-Grade Display',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 7999
		},
		{
			mfg: 'Panasonic',
			part_number: 'TH-98LQ70U',
			desc: '98" Class (97.5" diagonal) Professional 4K UHD LCD Display',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 24999
		},
		{
			mfg: 'Sony',
			part_number: 'FW-85BZ35F',
			desc: '85" BRAVIA Professional Display with Android TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 4499
		},
		{
			mfg: 'LG',
			part_number: '98LS95A-5B',
			desc: '98" Ultra HD 4K Commercial Display with Smart Features',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 19999
		},
		{
			mfg: 'Samsung',
			part_number: 'QH98H',
			desc: '98" QLED 8K UHD Signage',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 69999
		},
		{
			mfg: 'Epson',
			part_number: 'V11H812020',
			desc: 'PowerLite 2150 Wireless Full HD 1080p 3LCD Projector',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 899
		},
		{
			mfg: 'NEC',
			part_number: 'P605UL',
			desc: 'The P605UL entry level installation projector features advanced technologies at a competitive cost.',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 800 // replace with actual unit price as needed
		},
		{
			mfg: 'Samsung',
			part_number: 'QB65R',
			desc: '65" commercial display with Edge-Lit LED technology',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 1500 // replace with actual unit price as needed
		},
		{
			mfg: 'Sony',
			part_number: 'VPL-FHZ60L',
			desc: 'The VPL-FHZ60 laser projector is ideal for a wide range of business, education and entertainment applications.',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 3000 // replace with actual unit price as needed
		},
		{
			mfg: 'NEC',
			part_number: 'E506',
			desc: 'Affordable 50-inch LCD display with full HD resolution',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 700 // replace with actual unit price as needed
		},
		{
			mfg: 'LG',
			part_number: '65SM8600PUA',
			desc: '65" 4K UHD Smart LED NanoCell TV w/ AI ThinQ®',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 1200 // replace with actual unit price as needed
		},
		{
			mfg: 'Samsung',
			part_number: 'ME95C',
			desc: '95-inch LED backlit LCD commercial display with ultra-narrow bezel',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 15000 // replace with actual unit price as needed
		},
		{
			mfg: 'Sony',
			part_number: 'VPL-VZ1000ES',
			desc: 'The VPL-VZ1000ES ultra-short throw laser projector offers stunning 4K HDR picture quality from just inches away from the screen.',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 25000 // replace with actual unit price as needed
		},
		{
			mfg: 'Sharp',
			part_number: 'PN-LE601',
			desc: '60" Full HD Commercial LCD TV',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 800 // replace with actual unit price as needed
		},
		{
			mfg: 'NEC',
			part_number: 'E905',
			desc: '90" large-screen LCD display with full HD resolution',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 12000 // replace with actual unit price as needed
		},
		{
			mfg: 'Sony',
			part_number: 'FW-85BZ35F',
			desc: '85" BRAVIA 4K HDR Professional Display',
			unit_cost: Math.floor(Math.random() * 100) + 1,
			unit_price: 3000 // replace with actual unit price as needed
		}
	];

	function showPopup(): void {
		showCard = true;
	}

	function closePopup(): void {
		showCard = false;
	}

	function onRowSelect(event: any): void {
		selectedRow = event.detail.selectedRow;
		alert(selectedRow);
	}
</script>

<div id="tests" style:display="none">
	<div>
		<Button on:click={showPopup}>Show PB Records</Button>

		<Dialog size="md" bind:open={showCard}>
			<Card style="width: 800px; margin: 2em auto;">
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Product Search</DialogTitle>
						<DialogClose />
					</DialogHeader>
					<Table bind:selectedRow on:rowSelect={onRowSelect} striped>
						<TableHead>
							<TableRow>
								<TableCell>Select</TableCell>
								<TableCell>Mfg</TableCell>
								<TableCell>Part Number</TableCell>
								<TableCell>Description</TableCell>
								<TableCell>Unit Cost</TableCell>
								<TableCell>Unit Price</TableCell>
								<TableCell>Qty</TableCell>
							</TableRow>
						</TableHead>
						<TableBody style="max-height: 300px; overflow-y: auto;">
							{#each pbRecords as pbRecord}
								<TableRow>
									<TableCell><Checkbox style="border-color:blue;" /></TableCell>
									<TableCell>{pbRecord.mfg}</TableCell>
									<TableCell>{pbRecord.part_number}</TableCell>
									<TableCell>{pbRecord.desc}</TableCell>
									<TableCell>{pbRecord.unit_cost}</TableCell>
									<TableCell>{pbRecord.unit_price}</TableCell>
									<TableCell><Input placeholder="Qty" type="number" /></TableCell>
								</TableRow>
							{/each}
						</TableBody>
					</Table>
					<DialogFooter>
						<Button class="me-auto" on:click={() => (showCard = false)}>Close</Button>
						<Button
							color="primary"
							on:click={() => {
								console.log(pbRecords.filter((record) => record.selected === true));
								showCard = false;
							}}>Add Items</Button
						>
					</DialogFooter>
				</DialogContent>
			</Card>
		</Dialog>
	</div>
</div>

<style></style>
