// let day = 4
// switch(day){
//     case 1 : 
//     console.log(1)
//     break;
//     case 2 : 
//     console.log(2)
//     break;
//     case 3:
//     console.log(3)
//         break;
//     default :
//         console.log('default')
// }

console.clear()

// let f = 10;
// let s = 0;
// let op = '/';

// switch(op){
//     case '+' :
//         console.log(f + s);
//         break;
//     case '-' :
//         console.log(f - s);
//         break;
//     case '*' :
//         console.log(f * s);
//         break;
//     case '/' :
//         if(s != 0){
//             console.log(f / s);
//         }else{
//             console.log('Divide By Zero')
//         }
//         break;
//     default :
//         console.log('Invalid Operator');
//         break;
// }

// + - * /
// let num = 6;
// console.log(num)
// num = num + 1
// console.log(num)
// num += 1 // +=
// console.log(num)

// let numManfi = 9
// console.log(numManfi);
// numManfi = numManfi - 5
// console.log(numManfi)
// numManfi -= 5  // -=
// console.log(numManfi)

// let numMul = 5;
// console.log(numMul);
// numMul = numMul * 4;
// console.log(numMul);
// numMul *= 5;
// console.log(numMul);

// let numDiv = 8;
// console.log(numDiv);
// numDiv = numDiv / 2
// console.log(numDiv);
// numDiv /= 2;
// console.log(numDiv);


// += | -= | *= | /= %

// let baghimande = 11 % 4
// console.log(baghimande) 

// let number = 108;
// if ( number % 2 == 0 ){
//     console.log('Zoj')
// }else{
//     console.log('Fard')
// }


let n2 = 1
// i++
// ++i
// i--
// --i
// console.log(n2)

// let n = 1
// console.log(n)
// console.log(n + 1)
// console.log(++n)

// let inum = 5;
// inum += 5;
// inum *= 2;
// inum++
// inum++
// inum++
// inum %= 3
// console.log(inum)

// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)

// for( start ; stop ; step ){

// }

// for(let i = 50 ; i <= 70 ; i++ ){
//     console.log(i)
// }

// Sum 20 + 21 ... 29 + 30

// let sum = 0;
// for( let j = 20 ; j <= 30 ; j++ ){
//     sum += j;
// }
// console.log(sum)

// Fact(9) => 9*8*7...2*1
// let fact = 1;
// for( let i = 9 ; i >= 1 ; i-- ){
//     fact *= i
// }
// console.log(fact)

// Majmoue Adad Zoj Beyn 100 Ta 200
//1
let sum = 0;
// for ( let i = 100 ; i <= 200 ; i++ ){
//     if(i % 2 == 0){
//         sum = sum + i // sum += i;
//     }
// }
// console.log(sum)

for(let j = 100 ; j <= 200 ; j = j + 2 ){
    sum += j
}
console.log(sum.toExponential())