let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function generarExcusa(){
    const quien = who[Math.floor(Math.random() + who.length)];
    const accion = action[Math.floor(Math.random() + action.length)];
    const que = what[Math.floor(Math.random() + when.length)];
    const quien = when[Math.floor(Math.random() + when.length)];
    return `${quien} ${accion} ${que} ${quien}.`;
}
console.log(generarExcusa())