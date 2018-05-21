# Signale-Transport

## Installation

```bash
$ npm install signale-transport
```

## Usage

```javascript
const { createLogger } = require('winston');
const SignaleTransport = require('signale-transport');

const logger = createLogger({
  transports: [
    // ...
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new SignaleTransport({
    level: 'info', // error/warn/info/verbose/silly
  }));
}
```

## License

[MIT](https://github.com/guox191/signale-transport/blob/master/LICENSE)

