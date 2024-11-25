
// let employees = [
//     { id: 1, name: "Ali", age: 25, salary: 500 },
//     { id: 2, name: "Vali", age: 30, salary: 700 },
//     { id: 3, name: "Salim", age: 35, salary: 600 },
// ];
//1
// let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
// console.log("Hamm oyliklar", totalSalary);
//2
// let highestPaid = employees.reduce((max, emp) => (emp.salary > max.salary ? emp : max));
// console.log("Eng katta oylik", highestPaid.name);
 //3
// function sortEmployees(key) {
//     return [...employees].sort((a, b) => (a[key] > b[key] ? 1 : -1));
// }
// console.log(sortEmployees("age"))


// let numbers = [43, 12, 76, 23, 97, 28, 11]
//4
// console.log("Tartiblangan raqamlar", numbers.sort((a, b) => a - b))
//5
// console.log("Minimum Value:", Math.min(...numbers));
//6
// function collector(size) {
//     let names = [];
//     for (let i = 0; i < size; i++) {
//         names.push(prompt("ISm kiriting:"));
//     }
//     return names;
// }
// console.log(collector(3));
//7
