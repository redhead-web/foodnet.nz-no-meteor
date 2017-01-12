import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileEditComponent from './profileEdit.component';
import ProfileFactory from '../profile/profile.factory';

export default angular.module('profileEdit', [
  uiRouter,
])

.factory('Profile', ProfileFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('profileEdit', {
      url: '/profileEdit/:userId',
      component: 'profileEdit',
      resolve: {
        profileData: (Profile, $stateParams) => Profile.getProfileData($stateParams.userId),
      },
    });
})

.component('profileEdit', profileEditComponent)

.name;
