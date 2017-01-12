import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditComponent from './organisationEdit.component';
import OrgansationFactory from '../organisation/organisation.factory';

export default angular.module('organisationEdit', [
  uiRouter,
])

.factory('Organisation', OrgansationFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('organisationEdit', {
      url: '/organisationEdit/:organisationId',
      component: 'organisationEdit',
      resolve: {
        organisationData: (Organisation, $stateParams) => Organisation.getOrganisationData($stateParams.organisationId),
      },
    });
})

.component('organisationEdit', organisationEditComponent)

.name;
