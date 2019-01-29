import Controller from '@ember/controller';

export default Controller.extend({
    session: Controller.inject.service("session"),

    sessionUser: Controller.inject.service("session-user")
  });