// // const app = "I don't do much."
//
// const products = [
//   { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
//   { name: 'Twinkies', price: 7.99, discount: .45 },
//   { name: 'Oreos', price: 6.49, discount: .8 },
//   { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 }
// ];
// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
//
//   products.forEach(product => {
//     if (product.discount >= .5) {
//       totalPrice += product.price;
//     }
//   });
//
//   return totalPrice;
// }
//
// console.log(getTotalAmountForProducts(products)); // prints 25.5

function reduce(collection, callback, initialValue) {
  let result = initialValue;

  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });

  return result;
}


const couponLocations = [
  { room: 'Living room', amount: 5 },
  { room: 'Kitchen', amount: 2 },
  { room: 'Bathroom', amount: 1 },
  { room: 'Master bedroom', amount: 7 }
];

function couponCounter(totalAmount, location) {
  return totalAmount + location.amount;
}

console.log(reduce(couponLocations, couponCounter, 0)); // prints 15


// can just do !!!!!!

console.log(couponLocatons.reduce(couponCounter,0))
