import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveUser() {
            let self = this;
         let onSuccess = function(user) {
             self.send("login", user.get("emailAddress"), user.get("password"));
         };
         let onFailure = function(error) {
            console.log('there is an error', error);
        };
         this.get("model").save().then(onSuccess, onFailure);
        }
    }
});
