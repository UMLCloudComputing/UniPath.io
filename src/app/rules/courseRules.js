let { Engine } = require('json-rules-engine');
let engine = new Engine();

let ComputingII = {
    conditions: {
        any: [{
            all: [{
                fact: 'pre-reqs',
                operator: '',
                value: 'Course',
                path: '$.company'
            }]
        }]
    }
}