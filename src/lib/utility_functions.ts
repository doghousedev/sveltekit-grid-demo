
/* eslint-disable @typescript-eslint/no-explicit-any */
export function unescapeSymbols(inputString: string): string {
    if (!inputString) return ''; // Check for null or undefined input values

    const symbols: { [key: string]: string } = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&#39;': "'",
        '&#x2F;': '/',
        '&#x60;': '`',
        '&#x3D;': '=',
        '&#x22;': '"',
        '&#x3C;': '<',
        '&#x3E;': '>',
        '&#x26;': '&',
        '&#x27;': "'",
        '&#x2D;': '-',
        '&#x5F;': '_',
        '&#x2B;': '+',
        '&#x2E;': '.',
        '&#x2A;': '*',
        '&#xfffd;': ' ' // This is a special case for the "�" symbol
    };

    return inputString.replace(/&(#x?)?\w+;/g, match => {
        const symbol = symbols[match];
        return symbol ? symbol : match;
    });
}

export function numberParser(params: { newValue: string }): number {
    const value = Number(params.newValue);
    return isNaN(value) ? NaN : value;
}

export function numberValueFormatter(params: any) {
    const value = parseFloat(params.value);
    if (isNaN(value)) {
        return params.value;
    } else {
        return value.toFixed(2).toString();
    }
}

export function percentageValueFormatter(params: any) {
    const value = parseFloat(params.value);
    if (isNaN(value)) {
        return params.value;
    } else {
        return (value * 100).toFixed(2) + '%';
    }
}

export function createFlagImg(flag: string) {
    return (
        '<img border="0" width="15" height="10" src="https://flags.fmcdn.net/data/flags/mini/' +
        flag +
        '.png"/>'
    );
}
