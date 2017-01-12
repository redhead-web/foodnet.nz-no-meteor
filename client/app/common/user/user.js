import angular from 'angular';
import UserFactory from './user.factory';

const userModule = angular.module('user', [])

.factory('User', UserFactory)
.run((User) => {
  'ngInject';

  User.isSignedIn();
})

.name;

export default userModule;
