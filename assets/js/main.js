const fullName = document.getElementById('full_name').value; 
const userAge = Number(document.getElementById('age').value);
const distance = Number(document.getElementById('km').value);
console.log(fullName);
console.log(userAge);
console.log(distance);
const price_per_km = 0.21;

let ticketPrice = distance * price_per_km;
const discountYoung = ticketPrice * 0.2;
const discountOld = ticketPrice * 0.4;
let ticketType = 'Biglietto Standard';

if (userAge < 18) {
    ticketPrice = ticketPrice - discountYoung;
    ticketType = 'Biglietto Junior';
} else if (userAge > 65) {
    ticketPrice = ticketPrice - discountOld;
    ticketType = 'Biglietto Senior';
}
ticketPrice = ticketPrice.toFixed(2) + ' €';


const submit = document.querySelector('.btn');

submit.addEventListener('click', function () {
    document.querySelector('.print_name').innerHTML += fullName;
    document.querySelector('.ticket_type').innerHTML += ticketType;
    document.querySelector('.cabin').innerHTML += Math.floor(Math.random() * 10) + 1;;
    document.querySelector('.cp').innerHTML += Math.floor(Math.random() * 100000) + 1;;
    document.querySelector('.print_price').innerHTML += ticketPrice ;
}, 'once')


