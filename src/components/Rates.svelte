<script context="module">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let valueA = '';
	let valueB = '';
	let valueC = '';
	let valueD = '';
</script>

<div id="rates" style:display="none" style:margin-top="5px">
	<div class="columns margins">
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueA}
				label="Materials Rate"
				style="width: 180px; height:40px;"
			>
				<HelperText slot="helper" />
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueB}
				label="Shipping Rate"
				style="width: 180px; height:40px;"
			>
				<Icon class="material-icons" slot="leadingIcon">shopping_basket</Icon>
				<HelperText slot="helper">Typically 6%</HelperText>
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueC}
				label="Tax Rate"
				style="width: 180px; height:40px;"
			>
				<Icon class="material-icons" slot="trailingIcon">done</Icon>
				<HelperText slot="helper">Helper Text</HelperText>
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				invalid
				bind:value={valueD}
				label="Invalid"
				style="width: 180px; height:40px;"
			>
				<HelperText slot="helper">put something in here</HelperText>
			</Textfield>
		</div>
	</div>
</div>
