console.log("hii working")

//equality oprator
// var a = 10;
// var b = "10";
// console.log(a===b);

//closure example
// function outer(){
//     var a = 10

//     function ineer()  {
//         console.log(a)
//     }
//      ineer();
    
// }
// outer();

// function methopration(){
//     var a = 10;
//     var b = 34;

//     function substraction(){
//         console.log(a - b);

//         function addition(){
//             console.log(a + b);

//             function  multiplication(){
//                 console.log(a * b);
//             }
//             multiplication()
//         }
//         addition()
//     }
   
//     substraction()
   
// }
// methopration()


//event handling  and  event deligation

//promiss  concept 



// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     setTimeout(() => {
//       const success = false;
//       if (success) {
//         resolve("Operation succeeded");
//       } else {
//         reject("Operation failed");
//       }
//     }, 1000);
//   });
//   myPromise
//   .then((message) =>{
//       console.log(message);
//   })
//   .catch((error)=>{
//     console.log(error);
//   });

//this  kye  word  example

// console.log(this)

// function info(){
//     return "pratiksha"
// }
// const name1 = info();
// console.log(`my name is ${name1}`)

// const student = {
//     name: "pratiksha",
//     age: "34"

// }

// console.log("hello my name  is",this.name)

// const xyz = new Xyz(()=>{
//   const address = "pune";
//   console.log("hi this  is my add", this.address)
// }

// ) Xyz();

  
//hosting in javscript
// greeting()
// function greeting(){
//     console.log("hello good afternoon")
// }

// console.log(a);
// var a = 10;

// console.log(a);
// let a = 20;

// console.log(r)
// const r = 40;


// synchronous  code 

// function syncronous(){
//    setTimeout(()=>{
//     console.log("helooo")
//    },5000)

// }
// syncronous();
// console.log('End');

//asynchronous functiuon  

// function asynchronous (){
//     console.log("start1");

//     setTimeout(()=>{
//         console.log("this  is  settimeout")
//     },5000);

//     console.log("end2")
// }
// asynchronous();

//  scope  of  the  verable


// function valuechange(){
//     var a = 10;
//     var a = 30;

// }



// function uniarray(arr) {
//    let result = [];
//    for (let i = 0; i < arr.length; i++) {
//        let isDuplicate = false; // Reset isDuplicate for each element in arr
//        for (let j = 0; j < result.length; j++) {
//            if (arr[i] === result[j]) {
//                isDuplicate = true;
//                break;
//            }
//        }
//        if (!isDuplicate) {
//            result.push(arr[i]);
//        }
//    }
//    return result;
// }

// let a = [1, 2, 2, 3, 4, 8, 8];
// let unique = uniarray(a);
// console.log(unique); // Output: [1, 2, 3, 4, 8]












// function uniarray(arr){
//     let result = [];
   
//     for(let i = 0; i< arr.length;i++){
//       let isDuplicate = false;
//     for(let j = 0; j < result.length; j++){
//     if(arr[i] === result[j]){
//        isDuplicate = true;
//     break;
    
//     }
//     }
//     if(!isDuplicate){
//     result.push(arr[i]);
//     }
//     }
     
    
//     return result;
    
//  }
//   let a = [1,2,2,3,4,8,8];
//   let unique = uniarray(a);
//   console.log(unique);



// function uniArray(arr){

//    let result = [];

//    for(let i = 0 ; i < arr.length; i++){
//       let  isDuplicate = false;
//       for(let j = 0 ; j < result.length; j++){

//          if(arr[i] === result[j]){
//             isDuplicate = true;
//             break;

//          }

//       }
//       if(!isDuplicate){
//          result.push(arr[i]);
//       }



//    }
//    return result.join(" ");
//    //we are  used  the  join for return the  array as  a string  aoutput
// }

// let a = uniArray([1,1,2,2,3,3,4,5,5,6,7,7,8]);
// let uniqe  = a;
// console.log(uniqe)


// reverse  the  array logic  program

// function revereseArray(arr){
//    let reversed = [];
//    for (let i = arr.length-1 ; i >= 0 ; i--){
   
//        reversed += arr[i]
//        // if  we  want  to this  aoutput as  array  so we  can  used the 
//        //reversed.push(arr[i])
      
//    }
//    return reversed;
// }

// let reversfun = revereseArray([1,3,4,67,8,4,3,6,5]);
// let a = reversfun;
// console.log(a);


//  if  we  want  to  mixture  of  the  array  licke  character  also  and  numberalso  how e can  fined same  logic  are ther afor that 



// function uniarray(arr) {
//    let result = [];
//    for (let i = 0; i < arr.length; i++) {
//        let isDuplicate = false; // Reset isDuplicate for each element in arr
//        for (let j = 0; j < result.length; j++) {
//            if (arr[i] === result[j]) {
//                isDuplicate = true;
//                break;
//            }
//        }
//        if (!isDuplicate) {
//            result.push(arr[i]);
//        }
//    }
//    return result; // Convert the array to a string
// }

// let a = [1, 2, 2, 'c', 'r', 't', 'y', 'u', 'i', 'o', 'o', 2, 4, 5, 5, 'p'];
// let unique = uniarray(a);
// console.log(unique); // Output: "12crtyuio45p"




//check the  number is  pilendrom or  not

// function checkPilendrom(str){
//    let reversed ="";
//    for(let i = str.length-1; i >= 0; i--){
//       reversed += str[i];
    

//    }
//    if(str === reversed){
//     return ("this  is  pilendrom")
//    }else{

//       return ("this  is  not pilendrom");
//    }

// }

// let reversestring = checkPilendrom("madam hiii");
// let pelendrom = reversestring;
// console.log(pelendrom);




// function findmin(arr){

//     if (arr.length === 0){
//         throw new Error("array  is empty")
//     }
//     let max = arr[0];
//     let min = arr[0];

//     for(let i = 1 ;i < arr.length; i++){
//      if(arr[i] > max){
//        max = arr[i];
//      }
//      if(arr[i] < min){
//         min = arr[i];
//      }

//     }
//   return {max: max, min: min};
// }
// let a = findmin([3,5,9,4,5,6,9,2,3,3,1]);
// let result = a;
// console.log("MAX" ,result.max);
// console.log("MIN", result.min);


//find  the  avrage  of the  array
// function avgArray(arr){
//     let sum = 0;
//     for(let i = 0 ; i < arr.length;i++){
//          sum += arr[i]; 
//     }
//     let avrage = sum / arr.length;
//     return avrage;
// }

// let a = avgArray([1,2,3,4,5,6,7,8,9,10]);
// let avrage = a;

// console.log("avrage", avrage);


// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null; // Return null if there are fewer than 2 elements
//     }

//     let largest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             secondLargest = largest;
//             largest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] !== largest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// function findSecondSmallest(arr) {
//     if (arr.length < 2) {
//         return null; // Return null if there are fewer than 2 elements
//     }

//     let smallest = Infinity;
//     let secondSmallest = Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < smallest) {
//             secondSmallest = smallest;
//             smallest = arr[i];
//         } else if (arr[i] < secondSmallest && arr[i] !== smallest) {
//             secondSmallest = arr[i];
//         }
//     }

//     return secondSmallest;
// }

// // Test the function
// let numbers = [1, 3, 4, 5, 2, 5, 6, 6];
// let secondSmallest = findSecondSmallest(numbers);
// console.log("Second Smallest:", secondSmallest); // Output: Second Smallest: 1



// function  findingMisingarr(arr){

//     let n = arr.length ;
//     let actualarr = 0;
//     let  expectedSum = (n*(n+1))/2

//     for(let i = 0 ; i < n; i ++){
//         actualarr += arr[i];

//     }
//     return expectedSum - actualarr;

// }

// let a = findingMisingarr([1,2,4,5,6]);
// let result = a;
// console.log(result);


//interaction  between  two array and  return the non dublicate 

// function twoarrayInterat(arr1 ,arr2){

//     let result = []
//     for(let i = 0; i < arr1.length;i++){
//         for(let j = 0 ; j < arr2.length; j++){    
        

//         if (arr1[i] === arr2[j]){

//             if(!result.includes(arr1[i])){
//                 result.push(arr1[i]);
//             }
//             break;
//         }
//     }
// }
// return result;

// }

// let a = twoarrayInterat([1,2,3,4,5,9],[6,8,2,3,4]);
// let uniqecomb = a;
// console.log(uniqecomb)

//to check stringt contain vovoules  or  not 

// function stringcheckchjarvoul(str){
//     let vovels = "aeiouAEIOU"
//     let voulecount =0;
//     let consolentcount = 0;


//     for(let i = 0; i< str.length;i++){
//         let char = str[i];
//         if(vovels.includes(char)){
//             voulecount++;
//         }else if(char.match(/[a-z]/i)){
//             consolentcount++;
//         }
//     }
//     return{
//         vovels: voulecount,
//         consonent: consolentcount
//     };
// }

// let result = stringcheckchjarvoul("Hello Pratiksha");
// console.log("voveles",result.vovels);
// console.log("consonants", result.consonent)






// function countVowelsAndConsonants(str) {
//     let vowels = 'aeiouAEIOU';
    
//     let vowelStr = '';
//     let consonantStr = '';

//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (vowels.includes(char)) {
        
//             vowelStr += char;
//         } else if (char.match(/[a-z]/i)) {
            
//             consonantStr += char;
//         }
//     }

//     return {
        
//         vowelStr: vowelStr,
//         consonantStr: consonantStr
//     };
// }

// // Test the function
// let result = countVowelsAndConsonants("Hello World");
// console.log("Vowels:", result.vowelStr, "Count:", result.vowelCount); // Output: Vowels: eoo Count: 3
// console.log("Consonants:", result.consonantStr, "Count:", result.consonantCount); // Output: Consonants: HllWrld Count: 7



// function firstNonRepeatingChar(str) {
//     let charCount = {};

//     // First pass: Count the occurrences of each character
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // Second pass: Find the first non-repeating character
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (charCount[char] === 1) {
//             return char;
//         }
//     }

//     return null; // Return null if no non-repeating character is found
// }

// // Test the function
// let result = firstNonRepeatingChar("swiss");
// console.log("First Non-Repeating Character:", result); // Output: "w"



// Remove Duplicates from a String:

function stringdubliacte(str){

let result = []; 

    for(let i = 0 ; i < str.length; i++){
        let isDublicate = false;
        for(let j =0; j <str.length;j++){
            if(str[i] === str[j]){
            result += str[i]

            if(!result.isDublicate){
                result.push(arr[i])
            }
            else{
                break;
            }
            }
        }
    }
}