import { writable } from 'svelte/store';
import type { Rate } from '$types/Rates';

const initialRates: Rate = {
    material: 6.5,
    shipping: 7.30,
    tax: 8.10,
    service: 10.0
};

export const rates = writable<Rate>(initialRates);