let person = {
    nama: 'Achmad',
    umur: 16,
    hobi: ['Coding', ' Playing piano', ' Playing Games']
}

const to_be = person.hobi.length > 1 ? "hobby are" : "hobbies is";
const sayHello = () => `Hi, I'm ${person.nama}, I'm ${person.umur} years old. My ${to_be} ${person.hobi}`;

function callBack(name){
    console.log(name());
}

callBack(sayHello);