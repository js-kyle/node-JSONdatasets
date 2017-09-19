'use strict';
const fs = require('fs');
const maleJSON = fs.createWriteStream('./output/male.json');
const femaleJSON = fs.createWriteStream('./output/female.json');
const _ = require('lodash');
const personData = JSON.parse(fs.readFileSync('MOCK_DATA.json'));

let maleData = [];
let femaleData = [];

_.forEach(personData, function(person) {
  if (person.gender === 'Male') {
    maleData.push(person);
  } else {
    femaleData.push(person);
  }
});

maleJSON.write(JSON.stringify(maleData));
femaleJSON.write(JSON.stringify(femaleData));
