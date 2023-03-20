<script lang="ts">
	import Snackbar, { Label, Actions } from '@smui/snackbar';
	import IconButton from '@smui/icon-button';
	import Button from '@smui/button';

	let snackbarSuccess: Snackbar;
	let snackbarWarning: Snackbar;
	let snackbarError: Snackbar;
</script>

<Snackbar bind:this={snackbarSuccess} class="demo-success">
	<Label>That thing you tried to do actually worked, if you can believe it!</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>

<Snackbar bind:this={snackbarWarning} class="demo-warning">
	<Label>Ok, it looks like that thing you tried to do might not have work.</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>

<Snackbar bind:this={snackbarError} class="demo-error">
	<Label>That thing you tried to do didn't work. Honestly, I'm not sure why you even tried.</Label>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>

<Button on:click={() => snackbarSuccess && snackbarSuccess.open()}>
	<Label>Open Success Snackbar</Label>
</Button>

<Button on:click={() => snackbarWarning && snackbarWarning.open()}>
	<Label>Open Warning Snackbar</Label>
</Button>

<Button on:click={() => snackbarError && snackbarError.open()}>
	<Label>Open Error Snackbar</Label>
</Button>

<style lang="scss">
	@use '@material/snackbar/mixins';
	@use '@material/theme/color-palette';
	@use '@material/theme/theme-color';

	.mdc-snackbar.demo-success {
		@include mixins.fill-color(color-palette.$green-500);
		@include mixins.label-ink-color(theme-color.accessible-ink-color(color-palette.$green-500));
	}

	.mdc-snackbar.demo-warning {
		@include mixins.fill-color(color-palette.$orange-500);
		@include mixins.label-ink-color(theme-color.accessible-ink-color(color-palette.$orange-500));
	}

	.mdc-snackbar.demo-error {
		@include mixins.fill-color(color-palette.$red-500);
		@include mixins.label-ink-color(theme-color.accessible-ink-color(color-palette.$red-500));
	}
</style>
