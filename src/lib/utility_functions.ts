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

export function getContextMenuItems(params: any) {
    console.log({ params });
    const result = [
        {
            // custom item
            name: 'Alert ' + params.value,
            action: () => {
                window.alert('Alerting about ' + params.value);
            },
            cssClasses: ['redFont', 'bold']
        },
        {
            // custom item
            name: 'Always Disabled',
            disabled: true,
            tooltip:
                'Very long tooltip, did I mention that I am very long, well I am! Long!  Very Long!'
        },
        {
            name: 'Country',
            subMenu: [
                {
                    name: 'Ireland',
                    action: () => {
                        console.log('Ireland was pressed');
                    },
                    icon: createFlagImg('ie')
                },
                {
                    name: 'UK',
                    action: () => {
                        console.log('UK was pressed');
                    },
                    icon: createFlagImg('gb')
                },
                {
                    name: 'France',
                    action: () => {
                        console.log('France was pressed');
                    },
                    icon: createFlagImg('fr')
                }
            ]
        },
        {
            name: 'Person',
            subMenu: [
                {
                    name: 'Niall',
                    action: () => {
                        console.log('Niall was pressed');
                    }
                },
                {
                    name: 'Sean',
                    action: () => {
                        console.log('Sean was pressed');
                    }
                },
                {
                    name: 'John',
                    action: () => {
                        console.log('John was pressed');
                    }
                },
                {
                    name: 'Alberto',
                    action: () => {
                        console.log('Alberto was pressed');
                    }
                },
                {
                    name: 'Tony',
                    action: () => {
                        console.log('Tony was pressed');
                    }
                },
                {
                    name: 'Andrew',
                    action: () => {
                        console.log('Andrew was pressed');
                    }
                },
                {
                    name: 'Kev',
                    action: () => {
                        console.log('Kev was pressed');
                    }
                },
                {
                    name: 'Will',
                    action: () => {
                        console.log('Will was pressed');
                    }
                },
                {
                    name: 'Armaan',
                    action: () => {
                        console.log('Armaan was pressed');
                    }
                }
            ]
        }, // built in separator
        'separator',
        {
            // custom item
            name: 'Windows',
            shortcut: 'Alt + W',
            action: () => {
                console.log('Windows Item Selected');
            },
            icon: '<img src="https://www.ag-grid.com/example-assets/skills/windows.png" />'
        },
        {
            // custom item
            name: 'Mac',
            shortcut: 'Alt + M',
            action: () => {
                console.log('Mac Item Selected');
            },
            icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
        }, // built in separator
        'separator',
        {
            // custom item
            name: 'Checked',
            checked: true,
            action: () => {
                console.log('Checked Selected');
            },
            icon: '<img src="https://www.ag-grid.com/example-assets/skills/mac.png"/>'
        }, // built in copy item
        'copy',
        'separator',
        'chartRange'
    ];

    return result;
}
