const fullName = document.getElementById('full_name').value; 
const userAge = Number(document.getElementById('age').value);
const distance = Number(document.getElementById('km').value);
//console.log(fullName);
//console.log(userAge);
//console.log(distance);
const price_per_km = 0.21;

let ticketPrice = distance * price_per_km;
const discountYoung = ticketPrice * 0.2;
const discountOld = ticketPrice * 0.4;

if (userAge < 18) {
    ticketPrice = ticketPrice - discountYoung;
} else if (userAge > 65) {
    ticketPrice = ticketPrice - discountOld;
}
ticketPrice = ticketPrice.toFixed(2) + ' €'
const submit = document.querySelector('.btn');

submit.addEventListener('click', function () {
    document.querySelector('.print_name').innerHTML += fullName;
    //document.querySelector('.print_age').innerHTML += userAge;
    document.querySelector('.print_price').innerHTML += ticketPrice ;
})

console.log(ticketPrice.toFixed(2) + ' €');
