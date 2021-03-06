const {By, until} = require('selenium-webdriver');
const makeTest = require('./makeTest');

test('toggling on/off', makeTest(async ({click, getAttr}) => {
  await click('#on-button');
  await click('#off-button');
  await click('#on-button');
  const transitions = parseInt(await getAttr('#transition-counter', 'value'));
  expect(transitions).toBeGreaterThan(0);
}));
