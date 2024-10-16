const numbers = [2, 8, 4, 7, 2, 87];

let numberPlus=[]
numbers.forEach(function(num){
    numberPlus.push(num+1)
})
console.log(numberPlus);

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]