// console.log("Hello")

// const a=null
// const v="s"
// let s="TYY"
// ***console.table([a,v,s])
// ┌─────────┬────────┐
// │ (index) │ Values │
// ├─────────┼────────┤
// │    0    │  null  │
// │    1    │  's'   │
// │    2    │ 'TYY'  │
// └─────────┴────────┘
// console.log(typeof(a)) //object

// *** spread operator

// const a1=[1,2,3,4]
// const a2=["sman","bman","iman"]
// const a3=[1.0,9.6,78.9]
// const mix=[...a1,...a2,...a3]
// console.log(mix)

//[ 1, 2, 3, 4, 'sman', 'bman','iman', 1,9.6,78.9]


// let arrl =[6,7,9]
// let obj1={...arrl}
// console.log(...arrl) // 6 7 9
// console.log(obj1) //{ '0': 6, '1': 7, '2': 9 }

// function sum(vl, v2, v3) {
// return vl + v2 + v3}

// console.log( sum(...arrl))

//*** array into object
// const obj={
//     arr:[1,2,3],
//     str: "Shubhra"
// }
// console.log(obj.arr[1]) //2
// console.log(Object.keys(obj)) // return a array  of keys// ['arr','str']
// console.log(Object.values(obj))// [[1,2,3],'Shubhra'] // return a array  of values



//*** Array Destructure

// let arr=[4,5,8,9,0,6,90,466]
// let [a,b, ,e,...rest]=arr
// console.log(a,b,rest)

//******Object Destructure

// const obj={
//   arr:[1,2,3],
//   str: "Shubhra"
// }
// console.log(str) //Error
// const {arr:a,str}=obj   // Extract the key
// console.log(a) //[1,2,3]


// const bioData = {
//     name: "vinod",
//     age: 26,
//     deg: 'MCS',
//     add:'Kolkata',
   
//     fullname: {
//         fname: "SHu",
//         last: "Ma",
        
//     }
// }
//  let { name: myname, age, deg, fullname: f } = bioData;
//  console.log(` My name is ${myname}, My age is ${age}
//             and My highest qual, is ${deg}, Fullname ${f.fname + " " + f.last} `)

// let {proff="SDE"}=bioData //Adding Keys

// console.log(`Proff is ${proff},`) 


//****** spread object

//{ fname: 'SHu', last: 'Ma', name: 'vinod', age: 26, deg: 'MCS' }
            // const full= {
            //     fname: "SHu",
            //     last: "Ma"
            // }       
            // const bio = {
            //     name: "vinod",
            //     age: 26,
            //     deg: 'MCS'}
            //     console.log(sp={...full,fname:"SHUBHRADEEP",...bio}) //changing the value of object
       
            
  //********** */  // ***immediately invoke funx (IIFE)       
  
// (function a1(){
//     console.log("Running invoke")
// })();
// ; is used to end the exucution of code
// ((name)=>{
//     console.log("Running invoke2nd "+name )
// })("SHUBHRA");

// ((name2)=>{
//     console.log("Running invoke3nd "+name2 )
// })("RAHUL")


      //******for of loop 
// const greetings = "Hello world!"
//  for (const greet of greetings) {
//      console. log(`Each char is ${greet}`)}
  
  //Map **

  const map = new Map ()
map.set ('IN', "India")
map. set( 'USA', "United States of America")
map. set ('Fr', "France")
map.set ('IN', "India")

//console. log (map);
//output
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }


// for (const key of map) {
//     console.log(key); // give array str //[ 'IN', 'India' ]   //This method returns an array of an object's own enumerable property names
// }

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }
//OUTPUT

// IN :- India
// USA :- United States of America
// Fr :- France


// for in loop return keys(in array index), and in for of loop returns value
   //***For in loop  (for of loop doesn't iterate in object)
//    const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: "ruby",
//     swift: "swift by apple"
//    }  
//     for (const key in myObject) {
//     console.log(`${key} -> ${myObject[key]}`)
// } 

//OUTPUT
// js -> javascript
// cpp -> C++
// rb -> ruby
// swift -> swift by apple

        //For each doesn't return anything
// const coding = [
//     {
//     languageName: "javascript",
//     languageFileName: "js"
// },
// {
//     languageName: "cpp",
//     languageFileName: "c++"
// },
// {
//     languageName: "ruby",
//     languageFileName: "r"
// },]
//  coding.forEach( (item, index, arr)=> {
//  console.log(item.languageName, index);})





//*****ARRAY

//FOR Of LOOP

// const fruits = ["apple", "banana", "orange"];
// for (const fruit of fruits) {
//     console.log(`Fruit: ${fruit}`);
// }
// Fruit: apple
// Fruit: banana
// Fruit: orange



//FOR in LOOP(NOT recom in array)

// const colors = ["red", "green", "blue"];
// for (const index in colors) {
//     console.log(`Index: ${index}, Value: ${colors[index]}`);
// }

// Index: 0, Value: red
// Index: 1, Value: green
// Index: 2, Value: blue


//FOR EACHLOOP

// const names = ["Alice", "Bob", "Charlie"];
// names.forEach(name => console.log(`Hello, ${name}!`)); //No direct control over iteration, but often concise.  Executes a callback function for each element.

// for(const name of names){
//     console.log(name)
// }

// //OUTPUT
// Hello, Alice!
// Hello, Bob!
// Hello, Charlie!

// Alice
// Bob
// Charlie

  //*** FIlter */

//    const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num>=5)
//console.log(newNums)
//[ 5, 6, 7, 8, 9, 10 ]

   //*** */ Map method

//  const newNum = myNums.map( (num) => num>=5)
//  console.log(newNum)
//  [
//   false, false, false,
//   false, true,  true,
//   true,  true,  true,
//   true
// ]

     // without fliter 
// const newNums=[]
// myNums.forEach( (num) => {
// if (num > 4) {
// newNums .push(num)}
// })
// console.log (newNums);

     //****Chaning */

    // const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//const newNums = myNumers.map( (num) => { return num + 10})
    // [11, 12, 13, 14, 15,]
    

  //Filter use for condition check, where map use for operation on each value and return it in a new array
// const newNums = myNumers
//                 .map((num) => num * 10 )
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 40)
// console.log(newNums);