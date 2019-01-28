import Service from '@ember/service';

const { service } = Service.inject;

export default Service.extend({

    session: service('session'),
    store: service(),
  
    user: Service.computed('session.data.authenticated.access_token', function() {
      return this.get('store').findRecord('user', 'me');
    })

});





