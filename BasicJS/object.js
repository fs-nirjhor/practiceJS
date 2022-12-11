/** object */
var phone1 = { model: "Mi A3" , brand: 'Xiaomi', price: 16000, available: false};
var phone2 = {model:'M02s', brand: "Samsung", price: 12000 , available:true };
var phone3 = {model:"primo9", brand:"walton" , price: 8000, available: false};

/** full object value*/
console.log('fullObject', phone3);

/** single object value */
console.log(phone2.price);

var model1 = phone1.model;
console.log(model1);

var brand1 = phone1["brand"];
console.log(brand1);

var availability = 'available';
var available1 = phone1[availability];
console.log(available1);

// update value
phone1.available = true;
console.log('availability changed', phone1.available);

phone1.price = 23000;
console.log(phone1.price);