import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileComponent from './profile.component';
import ProfileFactory from './profile.factory';

export default angular.module('profile', [
  uiRouter,
])

.factory('Profile', ProfileFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('profile', {
      url: '/profile/:userId',
      component: 'profile',
      resolve: {
        profileData: (Profile, $stateParams) => Profile.getProfileData($stateParams.userId),
      },
    });
})

.component('profile', profileComponent)

.name;
