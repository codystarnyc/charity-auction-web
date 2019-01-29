import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    sessionUser: service("session-user"),
  
    actions: {
      save() {
        let organization = this.get("model");
        let self = this;
        let onSuccess = function() {
          self.get("sessionUser.user.memberships").reload();
          self.transitionToRoute("index");
        };
        let onFailure = function() {
          console.log("there was a problem saving the organization");
        };
        organization.save().then(onSuccess, onFailure);
      }
    }
  });
  
