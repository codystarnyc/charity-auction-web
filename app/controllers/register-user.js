import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        saveUser() {
         let onSuccess = function(user) {
            console.log(user);
         };
         let onFailure = function(user) {
            console.log(user);
        };
         this.get("model").save().then(onSuccess, onFailure);
        }
    }
});
