<script lang="ts">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let materials: number = 0;
	let shipping: number = 0;
	let tax: number = 0;
	let service: number = 0;

	function handleBlur(value: number, fieldName: string) {
		console.log(`${fieldName} value is:`, value * 10);
		// Perform any necessary actions with the value
	}
</script>

<div id="rates" style:display="none" style:margin-top="2rem">
	<div class="columns margins">
		<div>
			<Textfield
				variant="outlined"
				type="number"
				label="Materials Rate"
				style="width: 180px; height:40px;"
				bind:value={materials}
				on:blur={() => handleBlur(materials, 'Materials')}
			>
				<Icon class="material-icons" slot="trailingIcon">percent</Icon>
				<HelperText slot="helper" />
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				label="Shipping Rate"
				style="width: 180px; height:40px;"
				bind:value={shipping}
			>
				<Icon class="material-icons" slot="trailingIcon">percent</Icon>
				<HelperText slot="helper">Typically 6%</HelperText>
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				label="Tax Rate"
				style="width: 180px; height:40px;"
				placeholder="Placeholder"
				bind:value={tax}
			>
				<Icon class="material-icons" slot="trailingIcon">percent</Icon>
				<HelperText slot="helper">Helper Text</HelperText>
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				label="Service Rate"
				style="width: 180px; height:40px;"
				bind:value={service}
			>
				<Icon class="material-icons" slot="trailingIcon">percent</Icon>
				<HelperText slot="helper">This will be replaced with a select</HelperText>
			</Textfield>
		</div>
	</div>
</div>
