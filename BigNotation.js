
// //Data structure
// const array=['josha','marcos','calvin','nosta','sub47']

// //Algorithm 
// async function Student(allStudents,studentName){
//     const foundStudent = allStudents.find((currentStudent) => currentStudent === studentName);

//     if(!foundStudent || foundStudent.length==0){
//         return "No found student"
//     }

//     return foundStudent

// }

// console.log(Student(array,'azezaza').then(result=>console.log(result)))


// ******************** Big O(n) ********************

// const groceries=['milk','bread','eggs','flour','choose','sugar']

// const searchForItem= (item)=>{
//         for (let i=0;i<groceries.length;i++){
//             if(groceries[i]==item){
//                 console.log(`Found : item ${item}`)
//             }
//         }
// }

// searchForItem('eggs')

// ******************** Constant O(1) ********************

// const numbers=[1,2,3,4,5]

// const getElement=(arr,index)=>arr[index];

// console.log(getElement(numbers,0))

// ********************  O(n^2) ********************

// function findPairs(arr){
//     for (let i=0; i<arr.length;i++){
//         for (let j=i+1; j<arr.length;j++ ){
//             console.log(`Pair : ${arr[i]}, ${arr[j]}`)
//         }
//     }
// }

// const numbers=[1,2,3,4,5]

// findPairs(numbers )


// ********************  O(log n) ********************
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       if (arr[mid] === target) {
//         return mid;  // Found the target
//       }
//       if (arr[mid] < target) {
//         left = mid + 1;  // Search the right half
//       } else {
//         right = mid - 1;  // Search the left half
//       }
//     }
  
//     return -1;  // Target not found
//   }
  
//   const arr = [1, 3, 5, 7, 9, 11, 13, 15];
//   console.log(binarySearch(arr, 9));  // Output: 4 (index of 9)