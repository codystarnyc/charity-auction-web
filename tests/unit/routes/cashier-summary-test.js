import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cashier-summary', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cashier-summary');
    assert.ok(route);
  });
});
