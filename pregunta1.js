
/**
 * 
 * @param {number[]} integers
 */
function findOutlier(integers) {

    if( integers.length < 3 ){
        return false;
    }
    //contar cantidad de pares e impares en array
    let evenNumbers = 0;
    let oddNumbers  = 0;
    //guardar el indice del array en donde esta el Outlier
    let evenIndex;
    let oddIndex;
    
    integers.forEach( (number, indice) => {

        if(number%2 == 0){
            evenNumbers++;
            evenIndex = indice;
            
        } else {
            oddNumbers++;
            oddIndex = indice;
        }

    } );

    if( evenNumbers > oddNumbers ){      
        return integers[oddIndex];
    } else {
        return integers[evenIndex];
    }

}


const test1 = [2, 4, 0, 100, 4, 11, 2602, 36];
const test2 = [160, 3, 1719, 19, 11, 13, -21];

console.assert(findOutlier(test1) == 11);
console.assert(findOutlier(test2) == 160);
