const path = require('path');

let dataPath = null;

if (process.env.FNIP2MQTT_DATA) {
    dataPath = process.env.FNIP2MQTT_DATA;
} else {
    dataPath = path.join(__dirname, '..', '..', 'data');
    dataPath = path.normalize(dataPath);
}

module.exports = {
    joinPath: (file) => path.join(dataPath, file),
    getPath: () => dataPath,
};