<script lang="ts">
	import '@ubeac/svelte/styles/tabler.css';
	import { Button, Spinner } from '@ubeac/svelte';
	import { DatePicker } from '@ubeac/svelte';
	import {
		Dialog,
		DialogBody,
		DialogClose,
		DialogContent,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '@ubeac/svelte';

	import { ToastBody, Toast, ToastHeader, Avatar } from '@ubeac/svelte';
	let show = false;
	function toggle() {
		show = !show;
	}
	import { Alert } from '@ubeac/svelte';

	let open = false;
	let value: Date;
</script>

<div id="tests" style:display="none">
	<div>
		<Button on:click={() => (open = true)} color="primary">Open Dialog</Button>
		<br />
		<div>
			<Dialog bind:open size="sm">
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Dialog title</DialogTitle>
						<DialogClose />
					</DialogHeader>
					<DialogBody>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus
						deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia
						quis reprehenderit sit tempora totam unde.
					</DialogBody>
					<DialogFooter>
						<Button class="me-auto" on:click={() => (open = false)}>Close</Button>
						<Button color="primary" on:click={() => (open = false)}>Save changes</Button>
						<Button color="secondary" on:click={() => alert('huh')}>Huh</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</div>
		<p />
		<DatePicker bind:value style="width:100px;" />
		<i>value: {value}</i>
		<br />
		<Button color="primary">Cool Huh?</Button>
		<br />
		<Button color="danger" on:click={toggle}>
			{show ? 'Hide' : 'Show'}
		</Button>

		<Toast {show} transition="fade">
			<ToastHeader>
				<Avatar image="/avatars/000m.jpg" />
				<strong class="me-auto ms-2">Mallory Hulme</strong>
				<small>11 mins ago</small>
			</ToastHeader>
			<ToastBody>
				<div>Hello, world! This is a toast message.</div>
			</ToastBody>
		</Toast>
		<br />
		<Alert
			dismissible
			filled
			title="Wow! Everything worked!"
			icon="check"
			color="success"
			bind:open
		>
			Your account has been saved!
		</Alert>
		<Alert dismissible filled title="Wow! Everything worked!" icon="info-circle" color="info">
			Here is something that you might like to know.
		</Alert>
		<Alert dismissible filled title="Wow! Everything worked!" icon="alert-triangle" color="warning">
			Sorry! There was a problem with your request.
		</Alert>
		<Alert dismissible filled title="I'm so sorry…" icon="alert-circle" color="danger">
			Your account has been deleted and can't be restored.
		</Alert>
	</div>
</div>
