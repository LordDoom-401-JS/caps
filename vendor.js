'use strict';

require('dotenv').config();
const events = require('.assets/events');
const faker = require('faker');

setInterval(() => {
  let randoId = Math.ceil(Math.random()*400);
  let newOrder = {
    customerName : faker.name.firstName(),
    customerAddress : faker.address.city(),
    orderId : randoId,
    storeName : process.env.STORE,
  };
  console.log('Order sent');
  events.emit('pickup', newOrder);
}, 5000);

events.on('delivered', (orderInfo) = {
  console.log('Thanks');
})

module.export = vendor;