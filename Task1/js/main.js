//1
// let arr = [];
// for (let i = 0; i < 5; i++) {
//     arr.push(prompt("Son kiriting"));
// }
// console.log("Eng katta son:", Math.max(...arr));

//3
// let arr = [5, 4, 3, 6, 3, 7, 1];
// let smallInd = arr.indexOf(Math.min(...arr));
// console.log("Eng kichik index: ", smallInd);

//4

//5
// let arr1 = [5, 4, 3, 6, 3, 7, 1];
// let arr2 = [22, 1, 42, 34, 55, 67, 11, 32];
// let sort = [...arr1, ...arr2].sort((a, b) => a - b);
// console.log("Sonlar tartibi: ", sort);

//6
// let carsArr = [
//     {
//         name: "Lasetti",
//         price: 9000 
//     },
//     {
//         name: "Damas",
//         price: 7800 
//     },
//     {
//         name: "Cobalt",
//         price: 12500 
//     },
//     {
//         name: "Gentra",
//         price: 14000 
//     },
//     {
//         name: "Onix",
//         price: 17000 
//     },
// ];

// let sortCar = [...carsArr].sort((a, b) => a.name.localeCompare(b.name));
// let sortPrice = [...carsArr].sort((a, b) => a.price - b.price);

// console.log("Moshinalar nomi tartib bilan", sortCar);
// console.log("Narx orqali tartib: ", sortPrice);

//7
// let arr = ["Salom", "Raxmat"];
// arr.splice("","","Yangi","Söz");
// console.log(arr);

//8
// function int(input) {
//     if (typeof input === 'string') {
//         return input.split('').reverse().join('');
//     } else if (typeof input === 'number' && input < 10) {
//         return input;
//     }
//     return input;
// }

// console.log(int(prompt("Soz kiriting")));
