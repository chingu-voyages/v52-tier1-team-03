const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'v52-tier1-team-03',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

