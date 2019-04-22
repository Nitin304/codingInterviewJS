console.log("Starting the process");

//shows the string in the reverse order
//ignores case
function reverse(str){

    //using the inbuilt methods
    // const reverseStr = str.split('').reverse().join('');
    // return reverseStr;

    ///////////////////////////////////////////////////////////////

    //Using the for loop

    // let reverseStr = '';
    // const reverseArr = str.split('');
    // for(var i=0;i<reverseArr.length;i++){
    //     reverseStr = reverseArr[i] + reverseStr;
    // }
    // return reverseStr;
    ////////////////////////////////////////////////////////

    // Using for each

    let reverseStr = '';
    str.split('').forEach(char=>{
        reverseStr  = char + reverseStr
    });

    return reverseStr;

    ////////////////////////////////////////////////////////
    
}


//Check if a string is pallindrome or not.
function isPallindrome(str){
    const rev = str.split('').reverse().join('');
    return rev.toLowerCase() === str.toLowerCase();
}

//Reverse an integer and returns properly with its sign
function reverseInt(num){
    return parseInt(num.toString().split('').reverse().join('')) * Math.sign(num);
}

//This initializes first letter to caps
function capitalizeLetters(str){
    console.log(str);
    const returnarr = str.split(' ').map(function(elem){
        //console.log(elem);
        return elem.substring(0,1).toUpperCase()+elem.substring(1);
    });
    return returnarr.join(' ');
}


//This finds the maximum times a letter is present

function maxCharacter(str){
    const arr = str.split('');
    const obj = {};
    let maxChar = '',maxVal = 0;
    for(let i=0;i<arr.length;i++){
        if(obj[arr[i]]){
            obj[arr[i]]+=1;
        }
        else{
            obj[arr[i]] =1;
        }
    }

    for(let c in obj){
        if(obj[c]>maxVal){
            maxChar = c;
            maxVal = obj[c];
        }
    }

    console.log(maxChar);
}


function fizzBuzz(n){
    for(let i =1;i<=n;i++){
        if(i%15 == 0){
            console.log("FizzBuz");
        }
        else if(i%3==0){
            console.log("Fizz");
        }
        else if(i%5==0){
            console.log("Buzz")
        }
        else{
            console.log(i);
        }
    }
}


/////////////////////////////////////////////////////////////////////////

//Session 2 JS Cardio
//This will return the longest word in a string. If there are more then one with the same
//length then it will return the first one.
function longestword(str){
    const arr = str.toLowerCase().match(/[a-z0-9]+/g);
    console.log(arr);

    const sorted = arr.sort(function(a,b){
        return b.length - a.length;
    })
    console.log(sorted);
    return sorted[0];
}

//Chunk array
// This will split the array into chunks

function chunkArray(arr,len){
    const returnArray = [];
    let i=0;
    while(i<arr.length){
        returnArray.push(arr.slice(i,i+len))
        i=i+len;
    }
    return returnArray;
}

//checks if the words are anagram or nor
//it first replaces anything other then word.
function isAnagram(str1,str2){
    str1 = str1.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    console.log(str1);
    str2 = str2.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('');
    console.log(str2);

    return str1 ==str2;
};


function letterChanges(str){
    let newStr = str.toLowerCase().replace(/[a-z]/gi,(char)=>{
        if(char==='z'||char ==='Z'){
            return 'a';
        }
        return String.fromCharCode(char.charCodeAt()+1);
    })

    //Caputalize the vowels
    newStr = newStr.replace(/a|e|i|o|u/gi,(char)=>
         char.toUpperCase()
    )

    return newStr;
}
//Add all  numbers in the arguments-- ES6
function addAllNumbers(...arguments){
    // let total = 0;
    // for(let val of arguments){
    //     total +=val; 
    // }
    // return total;

    //////////////////////////////////
    //using reduce
    //Reduce has a natural accumulator which adds up

    return arguments.reduce((acc,cur)=>acc+cur);
}

//////////////////////////////////////////////////

// function addAllNumbers(){
//     var args = Array.prototype.slice.call(arguments);
//     var total = 0;
//     for(var i=0;i<args.length;i++){
//         total+=args[i]
//     }
//     return total;
// }


//Sum all prime numbers

function sumAllPrime(num){
    let total = 0;

    function checkIfPrime(i){
        for(let j=2;j<i;j++){
            if(i%j===0){
                return false;
            }
        }
        return true;
    }
    for(let i=2;i<=num;i++){
        if(checkIfPrime(i)){
            total+=i;
        }
    }
    return total;
}



//Seek and destroy

function seekanddestroy(arr,...rest){
    console.log(arr);
    console.log(rest);
    // let returnArr = [];
    // for(var i=0;i<rest.length;i++){
    //     for(var j=0;j<arr.length;j++){
    //         if(rest[i]===arr[j]){
    //             arr.splice(j,1);
    //             j++;
    //         }
    //     }
    // }
    // return arr;


    ////////////////////////////////////////
    //using filter and includes

    return arr.filter(val => !rest.includes(val));
}



//Even and odd sums
function evenAndOddSums(arr){
    let total = [0,0]
    for(let val of arr){
        if(val%2===0){
            total[0]+=val;
        }
        else{
            total[1]+=val;
        }
    }

    return total;
}

console.log(evenAndOddSums([1,2,3,4,5]));

