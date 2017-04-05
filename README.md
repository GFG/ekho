# ekho

this is to standize the services invocation among lambda functions

## Installation

  `npm i gfg-nodejs-libary-ekho `
  
  or in package json without npm registry
  
`  gfg-nodejs-libary-ekho": "git+ssh://git@github.com:GFG/ekho.git#vX.X.X`

X.X.X is the current release version.

## Usage

    var ekho = require('gfg-nodejs-libary-ekho');

    ekho.invokeLambdaFunction(context, options, params, callback); // please check the API
  


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.