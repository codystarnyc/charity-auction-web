import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bidder-checkout', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bidder-checkout');
    assert.ok(route);
  });
});
