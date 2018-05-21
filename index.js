const Transport = require('winston-transport');
const Signale = require('signale').Signale;

const signale = new Signale({
  types: {
    verbose: typeFactory('☰', 'green', 'verbose'),
    silly: typeFactory('☐', 'cyan', 'silly'),
  },
});

function typeFactory(badge, color, label) {
  return {
    badge,
    color,
    label,
  };
}

function SignaleTransport(opts) {
  Transport.call(this, opts);
  this.options = opts;
}

SignaleTransport.prototype = Object.create(Transport.prototype);

SignaleTransport.prototype.log = function (info, callback) {
  signale[info.level](info.message);
  setImmediate(() => {
    this.emit('logged', info);
  });

  callback();
};

module.exports = SignaleTransport;
