module.exports = function toReadable(number) {
    if (number === 0) return 'zero';
    let library = new Map();
    library.set(1, 'one').set(2, 'two').set(3, 'three').set(4, 'four').set(5, 'five').set(6, 'six').set(7, 'seven')
        .set(8, 'eight').set(9, 'nine').set(10, 'ten').set(11, 'eleven').set(12, 'twelve').set(13, 'thirteen')
        .set(14, 'fourteen').set(15, 'fifteen').set(16, 'sixteen').set(17, 'seventeen').set(18, 'eighteen')
        .set(19, 'nineteen').set(20, 'twenty').set(30, 'thirty').set(40, 'forty').set(50, 'fifty').set(60, 'sixty')
        .set(70, 'seventy').set(80, 'eighty').set(90, 'ninety').set(100, 'hundred');
    if (number > 0 && number < 100) {
        return twoMuch(number, library);
    } else if (number >= 100) {
        let first=number.toString()[0];
        let sec = number.toString().substring(1);
        if(+sec===0){
            return `${library.get(+first)} ${library.get(100)}`;
        }else{
            return `${library.get(+first)} ${library.get(100)} ${twoMuch(+sec, library)}`;
        }
    }
};

function twoMuch(number, library) {
    if ((number >= 1 && number <= 20) || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
        return library.get(number);
    } else {
        let strNumber=number.toString();
        return library.get(+strNumber[0] * 10) + ' ' + library.get(+strNumber[1]);
    }
}
