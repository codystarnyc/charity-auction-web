import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | checkout-printouts', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:checkout-printouts');
    assert.ok(route);
  });
});
