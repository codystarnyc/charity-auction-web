import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('register-user');
  this.route('login');
  this.route('checkout-printouts');
  this.route('cashier-summary');
  this.route('bidder-checkout');
});

export default Router;
