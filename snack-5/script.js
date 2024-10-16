const nums = [2, 8, 4, 7, 12, 87];

let even=[]
nums.forEach(function(num){
    if(num%2==0){
        even.push(num)
    }
})
console.log(even);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]