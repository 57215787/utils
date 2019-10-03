export function repeat(string: string, number: number) {
    let result: string = ``;
    while (number) {
        if (number % 2 === 1) {
            result += string
        }
        if (number > 1) {
            string += string
        }
        number >>= 1
    }
    return result;
}

