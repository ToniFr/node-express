const SplitFactory = require('@splitsoftware/splitio').SplitFactory;

const factory = SplitFactory({
  core: {
    authorizationKey: '7m4qctr1k6vi9kshbbu972vqm8nklom6qnjh'
  }
});

const client = factory.client();

const calculateTreatment = (request) => {
  const key = request.headers['authorization'];
  const treatment = client.getTreatment(key, 'album_split');

  return treatment;
};

module.exports = {
  calculateTreatment
};