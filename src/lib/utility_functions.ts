
// Example usage:
//   const inputString = 'This is a &quot;test&quot; string with escaped symbols: &amp; &lt; &gt; &#39;';
//   const outputString = unescapeSymbols(inputString);
//   console.log(outputString);
// Output: "This is a "test" string with escaped symbols: & < > '"

export function unescapeSymbols(inputString: string): string {
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