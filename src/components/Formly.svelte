<script lang="ts">
	import '@ubeac/svelte/styles/tabler.css';
	import { get } from 'svelte/store';
	import { Formly, type IField, getValues } from 'svelte-formly';

	const form_name = 'formly_usage';
	// const fields: IField[] = [
	// 	{
	// 		type: 'input', // required
	// 		name: 'firstname', // required
	// 		attributes: {
	// 			type: 'text',
	// 			id: 'firstname', // required
	// 			classes: ['form-control'],
	// 			placeholder: 'First name'
	// 		},
	// 		rules: ['required', 'min:3', 'max:10'],
	// 		messages: {
	// 			required: 'The firstname is required',
	// 			min: 'Your first name is too short min=3',
	// 			max: 'Your first name is too long max=10'
	// 		}
	// 	},
	// 	{
	// 		type: 'input', // required
	// 		name: 'lastname', // required
	// 		attributes: {
	// 			type: 'text',
	// 			id: 'lastname', // required
	// 			classes: ['form-control'],
	// 			placeholder: 'Last Name'
	// 		},
	// 		rules: ['required', 'min:3', 'max:10'],
	// 		messages: {
	// 			required: 'The last name is required',
	// 			min: 'Your last name is too short min=3',
	// 			max: 'Your last name is too long max=10'
	// 		}
	// 	},
	// 	{
	// 		type: 'input', // required
	// 		name: 'password', // required
	// 		attributes: {
	// 			type: 'password',
	// 			id: 'password', // required
	// 			classes: ['form-control'],
	// 			placeholder: 'Tap your password',
	// 			autocomplete: 'off'
	// 		},
	// 		rules: ['required', 'min:6', 'max:10'],
	// 		messages: {
	// 			required: 'The password is required',
	// 			min: 'Your password is too short min=6',
	// 			max: 'Your password is too long max=10'
	// 		}
	// 	},
	// 	{
	// 		type: 'select', // required
	// 		name: 'name-field-select', // required
	// 		attributes: {
	// 			id: 'id-field-select', // required
	// 			classes: ['form-control-select'], // optional
	// 			label: 'Select an Option', // optional
	// 			disabled: false // optional
	// 		},
	// 		extra: {
	// 			options: [
	// 				{
	// 					value: 1,
	// 					title: 'option 1'
	// 				},
	// 				{
	// 					value: 2,
	// 					title: 'option 2'
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		type: 'select', // required
	// 		name: 'name-field-select2', // required
	// 		attributes: {
	// 			id: 'id-field-select2', // required
	// 			classes: ['form-control-select'], // optional
	// 			label: 'Label field select2', // optional
	// 			disabled: false // optional
	// 		},
	// 		extra: {
	// 			options: [
	// 				{
	// 					value: 1,
	// 					title: 'option 3'
	// 				},
	// 				{
	// 					value: 2,
	// 					title: 'option 4'
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		type: 'autocomplete', // required
	// 		name: 'name-field-autocomplete', // required
	// 		attributes: {
	// 			id: 'id-field-autocomplete', // required
	// 			classes: ['form-control-autocomplete'] // optional
	// 		},
	// 		extra: {
	// 			multiple: true, // optional
	// 			loadItemes: [
	// 				// list items with id and title attributes.
	// 				{
	// 					value: 1,
	// 					title: 'item 1'
	// 				},
	// 				{
	// 					value: 2,
	// 					title: 'item 2'
	// 				},
	// 				{
	// 					value: 3,
	// 					title: 'item 3'
	// 				},
	// 				{
	// 					value: 4,
	// 					title: 'item 4'
	// 				}
	// 			]
	// 		}
	// 	}
	// ];
	const fields: IField[] = [
		{
			type: 'input',
			name: 'firstname',
			attributes: {
				type: 'text',
				id: 'firstname',
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
			type: 'input',
			name: 'lastname',
			attributes: {
				id: 'lastname',
				placeholder: 'First name'
			},
			rules: [
				'required',
				{ name: 'notEqual', fnc: notEqual },
				{ name: 'customRule2', fnc: customRule2 }
			],
			messages: {
				notEqual: 'Last name not equal to First name',
				customRule2: 'foo bar'
			}
		},
		{
			type: 'input',
			name: 'companyname',
			attributes: {
				type: 'text',
				id: 'companyname',
				classes: ['form-control'],
				placeholder: 'Company Name'
			}
		},
		{
			type: 'input',
			name: 'accountid',
			attributes: {
				type: 'text',
				id: 'accountid',
				classes: ['form-control'],
				placeholder: 'Account ID'
			}
		},
		{
			type: 'input',
			name: 'address1',
			attributes: {
				type: 'text',
				id: 'address1',
				classes: ['form-control'],
				placeholder: 'Address 1'
			}
		},
		{
			type: 'input',
			name: 'address2',
			attributes: {
				type: 'text',
				id: 'address2',
				classes: ['form-control'],
				placeholder: 'Address 2'
			}
		},
		{
			type: 'input',
			name: 'city',
			attributes: {
				type: 'text',
				id: 'city',
				classes: ['form-control'],
				placeholder: 'City'
			}
		},
		{
			type: 'input',
			name: 'state',
			attributes: {
				type: 'text',
				id: 'state',
				classes: ['form-control'],
				placeholder: 'State'
			}
		},
		{
			type: 'input',
			name: 'zip_code',
			attributes: {
				type: 'text',
				id: 'zip_code',
				classes: ['form-control'],
				placeholder: 'Zip Code'
			}
		},
		{
			type: 'input', // required
			name: 'name-field-tel', // required
			value: '', // optional
			attributes: {
				type: 'tel', // default = text, or password, email, number, tel, optional
				id: 'id-field-tel', // optional
				classes: ['form-control'], // optional
				label: 'Phone Number', // optional
				placeholder: '(555)555-1212', // optional
				disabled: false, // optional
				readonly: false // optional
			}
		},
		{
			type: 'input',
			name: 'email',
			attributes: {
				type: 'text',
				id: 'email',
				classes: ['form-control-email'],
				placeholder: 'Email'
			},
			rules: ['required', 'email'],
			messages: {
				required: 'The email is required',
				email: 'Please enter a valid email'
			}
		}
	];

	const onSubmit = ({ detail }: any) => {
		console.log('values:', detail);
	};
	// Custom rule to force field
	async function notEqual(): Promise<boolean> {
		const values: any = await getValues(form_name);
		console.log('values:', values);
		if (values.firstname === values.lastname2) {
			return false;
		}
		return true;
	}

	async function customRule2(): Promise<boolean> {
		// ...others conditions.
		return true;
	}
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
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 16px;
	}
</style>
