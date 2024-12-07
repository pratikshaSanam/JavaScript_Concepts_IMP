console.log("working properly")

//reverse the  string 

// var str = "how  are  you";
//  var savedStr = str.split(" ").map(function(word){

//      return word.split("").reverse().join("");
    
// })
// console.log(savedStr.join(" "));


//how  to  check the object are  array or not

// function CheckArray (elem){
// console.log(Array.isArray(elem));
// }
// CheckArray([]);
// CheckArray({})


//how  to  empty an  array //do not loop thro to pop each value


// let arr = [1,2,3,4,5,6]
// arr.length ='0';
// console.log(arr.length)


// how  would you check the  number is integer

// var a = 56;
// if(a%1 ===0){
//     console.log("this  is the integer number")
// }else{
//     console.log("this  is not integre")
// }

//array  make  a  duplicate  of the number

// function Duplicate(arr){
// return arr.concat(arr)
// }

// console.log(Duplicate([1,2,3,4,5,7,6]))



//function

//reverse a number
// function ReverseFunc(num){
// return Number(num.toString().split("").reverse().join(""));

// }
// console.log(ReverseFunc(12))


//another way
// function Reverse(num){
// var rev = 0;
//     while(num>0){
//         var rem = num%10;
//         rev = rev*10+rem
//         num = Math.floor(num/10);
//     }

//    return rev
// }
// console.log(Reverse(123456));

//to check String pilendrom or not 


// function StringPalCheker(str){
//     var reversed = str.split("").reverse().join("");

// if(reversed === str){
//     console.log("this  is  pilendrom string")

// }else{
//     console.log("its  not pelendrom string");
// }

// }
// StringPalCheker("lool");


//how  to  sort the  as per  alphabate

// function StringAlpha(str){
//     return str.split("").sort().join("");

// }
// console.log(StringAlpha("helloa"))


//write  a  javscript function that  accept a  string as  parameter and  converts the  first letter of each word  starting upper case

// function StringUppercaseLetter(str){
//     var allwords = str.split(" ").map(function (word) {
//       return word.charAt(0).toUpperCase() + word.substring(1)
//     })
    
//   return  allwords.join(" ");
    
// }
// console.log(StringUppercaseLetter("hi pratiksha how  atr you"));

//writre a javascript function to get the  number of  occurence of each letter in specified  string



// function OcuurenceStringChar(str){
//     var occurence = {};
//     str.split("").forEach(function(ele){

//      if(occurence.hasOwnProperty(ele) === false){
//     occurence[ele]=1;
// }
// else{
//     occurence[ele]++;
// }

//     })
// return occurence;
// }
// console.log(OcuurenceStringChar("pratiksha"));

//loop
// crete a  loop and  array and addetthe  meneber sum of them

// var arr = [1,2,3,4,5,6];
// var sum = 0;
// arr.forEach(function(elem){
//     sum = sum + elem;
// })

// console.log(sum)


//in an  array of number and String onlye add thoes member witch are not string

// var arr = [ "pratu",123, "hello", 400,8,9,4];
// var sum = 0;
// arr.forEach(function(elem){
//     if(typeof elem === 'number'){
//         sum = sum + elem;
//     }

// });

// console.log(sum);

//loop an array of  object and  remove all object wich dont have  value  gender maile

// var arr = [

//     {name: "pratu", gender: "female"},
//     {name: "pratu", gender: "female"},
//     {name: "pratik", gender: "male"},
//     {name: "pratu", gender: "female"},
//     {name: "raju", gender: "male"},
// ]
//  var newarr = arr.filter(function(elem){
//     return elem.gender === "male";
// })



//Array
//write  a  javascript  function to clone  and  array

// function cloneArr(arr){
//     return [...arr];
// }
// var newarr = (cloneArr([1,2,3,4]))
// console.log(newarr)



//same  with help of map

// function cloneArr(arr){
//      return arr.map(function(elem){
//         return elem;
//     })
    
// }
//  var newarr = cloneArr([1,2,3,4]);
// console.log(newarr)

//write a  javascript function witch accept an agrgumnet and  return type note there are  six possible values that typeof return object boolean function number string and undefined

// function typrTeller(elem){
//   return typeof elem;
// }
// console.log(typrTeller([]));
// console.log(typrTeller({}));
// console.log(typrTeller(14));
// console.log(typrTeller("hiii"));
// console.log(typrTeller(true));
// console.log(typrTeller(undefined));
// console.log(typrTeller(function(){}));


//write a  javascript function to get the first element of  ann arry passing a parameter 'n' will return the  firest element of  the aaraary

// function retrive(arr, n = 1){

//     console.log(arr,n);
// }
// retrive([1,2,3,4,5,6,] )



//write a  javascript function to get the last element of  ann arry passing a parameter 'n' will return the  last element of  the aaraary

// write a  program  to  find  most  freqent of  an  array

//shuffling the  array

// crete  to w  are  margeser or uniion

function unionArray(arr1,arr2){

return [new Set(arr1.concat(arr2))]
    
}
console.log (unionArray([1,2,3,4,5], [1,2,3,4,6,7]));