export let fix = (num) => Number(String(num).match(/.+\.../) + "") || num

export function string_compare(a, b) {
    if (a?.birim < b?.birim) {
        return -1;
    }
    if (a?.birim > b?.birim) {
        return 1;
    }
    return 0;
}

export let highToLow = (a, b) => b.toplam - a.toplam;
export let lowToHigh = (a, b) => a.toplam - b.toplam;