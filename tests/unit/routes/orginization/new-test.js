import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | orginization/new', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:orginization/new');
    assert.ok(route);
  });
});
