import Route from '@ember/routing/route';

export default Route.extend({
    session: Route.inject.service("session"),
  
    sessionUser: Route.inject.service('session-user')
  });
