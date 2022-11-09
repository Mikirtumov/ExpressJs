// const lodash = require('lodash'); ----- 1 вариант
const {get} = require('lodash'); //----- 2 вариант
const a = {
    name: 'Sergo'
};

// const b = lodash.get(a, 'name','---'); ----- 1 вариант
const b = get(a, 'name','---'); //----- 2 вариант

console.log('Hello', b)