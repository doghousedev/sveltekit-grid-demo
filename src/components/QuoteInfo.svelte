<script context="module">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import LayoutGrid, { Cell } from '@smui/layout-grid';

	let valueA = '';
	let valueB = '';
	let valueC = '';
	let valueD = '';
</script>

<div id="quote-info" style:display="flex" style:margin-top="5px">
	<div class="columns margins">
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueA}
				label="Label"
				style="width: 180px; height:40px;"
			>
				<HelperText slot="helper" />
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueB}
				label="Leading Icon"
				style="width: 180px; height:40px;"
			>
				<Icon class="material-icons" slot="leadingIcon">event</Icon>
				<HelperText slot="helper">Helper Text</HelperText>
			</Textfield>
		</div>
		<div>
			<Textfield
				variant="outlined"
				bind:value={valueC}
				label="Trailing Icon"
				style="width: 180px; height:40px;"
			>
				<Icon class="material-icons" slot="trailingIcon">delete</Icon>
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
