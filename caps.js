'use strict';

const Events = require('events');
const events = new Events();

require('');
require('');

let date = Date().toString();

events.on('pickup', (orderInfo) => {
  console.log();
});

events.on('in-transit', (orderInfo) => {
  console.log();
});

events.on('delivered', (orderInfo) => {
  console.log();
});


module.exports = events;