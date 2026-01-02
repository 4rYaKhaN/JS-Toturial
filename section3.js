// Q-01 / HW-NU2
let id = "   admin@QePAL.com   "
let isValid = id.trim()
// console.log(id)
// console.log(isValid)
// console.log(typeof isValid)
console.clear()
let sartsWithAdmin = isValid.startsWith('admin@')
// console.log(sartsWithAdmin)
let includeAT = isValid.includes("@")
// console.log(includeAT)
let endsWirthCom = isValid.endsWith('.com')
// console.log(endsWirthCom)
// if(sartsWithAdmin && includeAT && endsWirthCom){
//     console.log(true)
// }else{
//     console.log(false)
// }

// Q-2 / HW-NU2
const password = '12345678#'
let passLength = password.length >= 8
// console.log(passLength)
// let includeSpecialChar = password.includes('@') || password.includes('#') // Correct!
// let includeSpecialChar2 = password.includes('@') // Wrong!
// console.log(includeSpecialChar)
// if(passLength && includeSpecialChar){
//     console.log(true)
// }else{
//     console.log(false)
// }
// passLength && includeSpecialChar ? console.log(true) : console.log(false)

// let s = 'arya'
// if(7777 == '7777'){ //true
//     console.log('arya')
// }else{
//     console.log('error')
// }

// if(7777 === 7777){ //false
//     console.log('arya')
// }else{
//     console.log('error')
// }

// const num = 10
// let myNum = '0'
// if(myNum != 0){
//     console.log(num / myNum)
// }else{
//     console.log('Error')
// }
// != => Check Not Equal Without Type Checking.
// !== => Check Not Equal With Type Checking.

// let score = 16;
// if(score >= 0 && score <= 5){
//     console.log('D')
// }else if(score > 5 && score <= 10){
//     console.log('C')
// }else if(score > 10 && score <= 15){
//     console.log('B')
// }else if(score > 15 && score <= 20){
//     console.log('A')
// }else{
//     console.log('Invalid Score!')
// }


// console.log('10' * 10)
// console.log('60' - 20)
// console.log('' * 5)
// console.log('40' + 41)

// let strAge = '18'
// console.log(typeof strAge)
// let intAge = Number(strAge)
// console.log(intAge)
// console.log(typeof intAge)

// console.log(Number('@'))

// ---
// let nationalCode = 2283339966
// console.log(nationalCode)
// console.log(typeof nationalCode)
// let strNationalCode = String(nationalCode)
// console.log(strNationalCode)
// console.log(typeof strNationalCode)

// console.log('true')
// ---
// let isMarried = 0
// console.log(isMarried)
// console.log(typeof isMarried)
// let boolIsMarried = Boolean(isMarried)
// console.log(boolIsMarried)
// console.log(typeof boolIsMarried)

// console.log(Boolean(1))
// console.log(Boolean(undefined))
// console.log(Boolean(null))
// console.log(Boolean(NaN))
// let temp = 88
// console.log(typeof temp.toString())

let name = 'sina'

// switch(name){
//     case 'arya': 
//         console.log('Hello Arya')
//         break
//     case 'sina':
//         console.log('Hello Sina')
//         break
//     case 'arian':
//         console.log('Hello Arian')
//         break
//     case 'asma':
//         console.log('Hello Asma')
//         break
//     default :
//     console.log('Error')
//     break
// }

// let day = 7
// switch(day){
//     case 1:
//         console.log('Sunday')
//         break
//     case 2:
//         console.log('Monday')
//         break
//     case 3:
//         console.log('Tuesday')
//         break;
//     case 4:
//         console.log('Wndesday')
//         break
//     case 5:
//         console.log('Thursday')
//         break
//     case 6:
//         console.log('friday')
//         break;
//     case 7: 
//         console.log('Saturday')
//         break;
//     default :
//         console.log('Invalid Day')
//         break

// }

// let month = 11;
// switch(month){
//     case 1:
//     case 2:
//     case 3:
//         console.log('Bahar')
//         break;
//     case 4:
//     case 5:
//     case 6:
//         console.log('Tabestoon')
//         break;
//     case 7:
//     case 8:
//     case 9:
//         console.log('Paeiz')
//         break
//     case 10:
//     case 11:
//     case 12:
//         console.log('Zaemestoon')
//         break;
// }

let score = 11
switch(true){
    case score >= 0 && score <= 5:
        console.log('D')
        break;
    case score > 5 && score <= 10:
        console.log('C')
        break
    case score > 10 && score <= 15:
        console.log('B')
        break
    case score > 15 && score <= 20:
        console.log('A')
        break
    default : 
    console.log('Invalid Score!')
    break
}