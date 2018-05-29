const { DEFAULTS, sendRequest } = require('./common');
const EventEmitter = require('events');
class Nextai extends EventEmitter {
    constructor(options) {
        super();
        Nextai.options = Object.assign({}, DEFAULTS, options);
        this.send = async (opts) => {
            this.params = Object.assign({}, Nextai.options, opts);
            const timeout = this.params.timeout;
            delete this.params.timeout;
            return sendRequest(this.params, timeout);
        };
    }
};

module.exports = Nextai