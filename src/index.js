const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let input = expr.split('');

    let sym = '',
        arr = [],
        count = 0,
        space = "**********",
        str = '',
        dot = '10',
        dash = '11';


    for (let item of input) {
        sym += item;
        count++;

        if (count === 10) {
            arr.push(sym);
            sym = '';
            count = 0;
        }
    }

    arr = arr.map(item => {
        let index = item.indexOf('1');
        if (index >= 0) {
            item = item.slice(index).split('10').join('.').split('11').join('-');
        }
        return item;
    });

    arr.forEach(item => {
        if (item === space) {
            str += ' ';
        } else {
            str += MORSE_TABLE[item];
        }
    });

    return str;
}

module.exports = {
    decode
};