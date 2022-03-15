

class RSTLabChallenge {
/**
* 
* @param {Array} list 
* @param {Number} integer 
*/
aboveBelow(list,integer){
    var above = 0;
    var below = 0;
    list.map((i)=>{
        if (i > integer){
                above++;
        }else if(i < integer){
                below++;
        }
    });
    return {above: above.toString(), below: below.toString()};
}
/**
 * 
 * @param {String} text 
 * @param {Number} num
 * @returns 
 */
stringRotation(text, num){
    const number = num % text.length;
    return text.slice(text.length - number) + text.slice(0, text.length - number);    
}
}

module.exports = RSTLabChallenge;

/*
var test = new RSTLabChallenge()
var arr = [1,8,5,9,13,24]

console.log(test.stringRotation("MyString",2));

console.log(test.aboveBelow(arr,6));*/