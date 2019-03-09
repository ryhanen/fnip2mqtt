const MQTT = require('./mqtt');
const logger = require('./util/logger');
const settings = require('./util/settings');

class Bridge {
    constructor() {
        this.mqtt = new MQTT();

        this.onMQTTConnected = this.onMQTTConnected.bind(this);
        this.onMQTTMessage = this.onMQTTMessage.bind(this);
    }

    onMQTTConnected() {
    }

    onMQTTMessage(topic, message) {
        logger.debug(`Received MQTT message on '${topic}' with data '${message}'`);
    }

    start() {
    }

    stop(callback) {
    }
}

module.exports = Bridge;
