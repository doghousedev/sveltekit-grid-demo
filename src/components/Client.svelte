<script context="module">
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';

	let valueA = '';
	let valueB = '';
	let valueC = '';
	let valueD = '';
</script>

<div id="client" style:display="none" style:margin-top="5px">
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
	</div>
</div>
