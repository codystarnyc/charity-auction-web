import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default Route.extend(ApplicationRouteMixin, {
    actions: {
      
        login( identification, password ) {
          this.get("session").authenticate("authenticator:oauth2", identification, password).catch((reason) => {
            this.set("errorMessage", reason.error || reason);
          });
        }
      }

});
