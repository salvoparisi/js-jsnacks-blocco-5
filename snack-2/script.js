const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

let peopleName=[]
for(let i=0; i<people.length; i++){
  peopleName.push(people[i].name)
}
console.log(peopleName);

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'