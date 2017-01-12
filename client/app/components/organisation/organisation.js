import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationComponent from './organisation.component';
import OrgansationFactory from './organisation.factory';

export default angular.module('organisation', [
  uiRouter,
])

.factory('Organisation', OrgansationFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisation', {
      url: '/organisation/:organisationId',
      component: 'organisation',
      resolve: {
        organisationData: (Organisation, $stateParams) => Organisation.getOrganisationData($stateParams.organisationId),
      },
    });
})

.component('organisation', organisationComponent)


.name;
