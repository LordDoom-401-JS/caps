'use strict';

const events = require(./caps.js);

events.on('pickup', (orderInfo) => {
  setTimeout(() => {
    console.log(`DRIVER: pick up [${orderInfo.orderId}]`);
    events.emit('in-transit', orderInfo);
  }, 1000);

  setTimeout(() => {
    console.log('DRIVER : delivered');
    events.emit('delivered', orderInfo);
  }, 3000);
});