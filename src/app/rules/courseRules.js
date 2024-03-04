let { Engine } = require('json-rules-engine');
let engine = new Engine();

engine.addRule({
    conditions: {
        any: [{
            all: [{
                fact: 
            }]
        }]
    }
})