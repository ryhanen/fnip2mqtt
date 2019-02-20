const semver = require('semver');
const engines = require('./package.json').engines;

const version = engines.node;
if (!semver.satisfies(process.version, version)) {
    console.log(`\t\tfnip2mqtt requires node version ${version}, you are running ${process.version}!\n`); // eslint-disable-line
}

const Bridge = require('./fnip2mqtt/bridge');
const bridge = new Bridge();
bridge.start();

process.on('SIGINT', handleQuit);

function handleQuit() {
    bridge.stop(() => process.exit());
}