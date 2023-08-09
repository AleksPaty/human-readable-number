module.exports = function toReadable (number) {
    let readableNum = '';
    let stringNum = number.toString()
    if(stringNum === '0') return 'zero';
    if(stringNum.length < 3) {
        let wordesNumber = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen']
        let tenner = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy',
        'eighty', 'ninety']

        if(number < 16) readableNum += wordesNumber[number];
        if(15 < number && number < 20) {
            number == 18
                ? readableNum += 'eighteen'
                : readableNum += `${wordesNumber[number - 10]}teen`
        }
        if(number >= 20) {
            readableNum += tenner[(stringNum[0]*1)-2];
            if(stringNum[1]*1) readableNum += ` ${wordesNumber[stringNum[1]*1]}`
        }
        return readableNum
    } else {
        for(let i = stringNum.length; i > 0; i--) {
            if(i == 4) readableNum += `${toReadable(Number(stringNum[0]))} thousand `;
            if(i == 3) readableNum += `${toReadable(Number(stringNum[stringNum.length - i]))} hundred`;
            if(i == 2) readableNum += ` ${toReadable(Number(stringNum.slice(i-1)))}`
        }
        return readableNum.replace('zero', '').trimEnd()
    }
}
