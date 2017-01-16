import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationAuthComponent from './organisationAuth.component';
import OrgansationFactory from '../organisation/organisation.factory';

export default angular.module('organisationAuth', [
  uiRouter,
])

.factory('Organisation', OrgansationFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisationAuth', {
      url: '/organisationAuth',
      component: 'organisationAuth',
      resolve: {
        organisationsAuth: (Organisation) => Organisation.getAuthData(),
      },
    });
})

.component('organisationAuth', organisationAuthComponent)

.name;
