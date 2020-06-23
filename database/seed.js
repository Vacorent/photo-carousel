const db = require('./index.js');
const faker = require('faker');
const mysql = require('mysql');


for (let i = 1; i <= 12; i++) {
  let imageurl = `https://appbnbcarousel.s3.amazonaws.com/image${i}.jpg`;
  let description = faker.lorem.sentence();
  let price = Math.floor(Math.random() * 1000) + 100;

  let q = `insert into places (imageUrl, price, description) values ('${imageurl}', '${price}', '${description}')`

  db.query(q, (err, data) => {
    if (err) {
      throw(err);
    } else {
      console.log('inserted');
    }
  })
}

db.end();

