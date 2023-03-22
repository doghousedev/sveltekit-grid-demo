<script lang="ts">
	import '@ubeac/svelte/styles/tabler.css';

	import { Formly, type IField } from 'svelte-formly';

	const form_name = 'formly_usage';
	const fields: IField[] = [
		{
			type: 'input', // required
			name: 'firstname', // required
			attributes: {
				type: 'text',
				id: 'firstname', // required
				classes: ['form-control'],
				placeholder: 'First name'
			},
			rules: ['required', 'min:3', 'max:10'],
			messages: {
				required: 'The firstname is required',
				min: 'Your first name is too short min=3',
				max: 'Your first name is too long max=10'
			}
		},
		{
			type: 'input', // required
			name: 'lastname', // required
			attributes: {
				type: 'text',
				id: 'lastname', // required
				classes: ['form-control'],
				placeholder: 'Last Name'
			},
			rules: ['required', 'min:3', 'max:10'],
			messages: {
				required: 'The last name is required',
				min: 'Your last name is too short min=3',
				max: 'Your last name is too long max=10'
			}
		},
		{
			type: 'input', // required
			name: 'number', // required
			value: '', // optional
			attributes: {
				type: 'number', // default = text, or password, email, number, tel, optional
				id: 'number', // optional
				classes: ['form-control', 'custom-class'], // optional
				label: 'Field number', // optional
				placeholder: 'Placeholder field number', // optional
				disabled: false, // optional
				readonly: false // optional
			}
		},
		{
			type: 'input', // required
			name: 'password', // required
			attributes: {
				type: 'password',
				id: 'password', // required
				classes: ['form-control'],
				placeholder: 'Tap your password',
				autocomplete: 'off'
			},
			rules: ['required', 'min:6', 'max:10'],
			messages: {
				required: 'The password is required',
				min: 'Your password is too short min=6',
				max: 'Your password is too long max=10'
			}
		},
		{
			type: 'select', // required
			name: 'name-field-select', // required
			attributes: {
				id: 'id-field-select', // required
				classes: ['form-control-select'], // optional
				label: 'Select an Option', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{
						value: 1,
						title: 'option 1'
					},
					{
						value: 2,
						title: 'option 2'
					}
				]
			}
		},
		{
			type: 'select', // required
			name: 'name-field-select2', // required
			attributes: {
				id: 'id-field-select2', // required
				classes: ['form-control-select'], // optional
				label: 'Label field select2', // optional
				disabled: false // optional
			},
			extra: {
				options: [
					{
						value: 1,
						title: 'option 3'
					},
					{
						value: 2,
						title: 'option 4'
					}
				]
			}
		},
		{
			type: 'autocomplete', // required
			name: 'name-field-autocomplete', // required
			attributes: {
				id: 'id-field-autocomplete', // required
				classes: ['form-control-autocomplete'] // optional
			},
			extra: {
				multiple: true, // optional
				loadItemes: [
					// list items with id and title attributes.
					{
						value: 1,
						title: 'item 1'
					},
					{
						value: 2,
						title: 'item 2'
					},
					{
						value: 3,
						title: 'item 3'
					},
					{
						value: 4,
						title: 'item 4'
					}
				]
			}
		}
	];

	const onSubmit = ({ detail }: any) => {
		console.log('values:', detail);
	};
</script>

<div id="forms" style="display: none; flex-direction: column; align-items: center;">
	<h1>Formly</h1>
	<Formly
		{form_name}
		{fields}
		on:submit={onSubmit}
		btnSubmit={{
			text: 'Submit alter',
			classes: ['btn', 'btn-primary']
		}}
		btnReset={{
			text: 'Reset alter',
			classes: ['btn', 'btn-secondary']
		}}
	/>
</div>

<style>
</style>
