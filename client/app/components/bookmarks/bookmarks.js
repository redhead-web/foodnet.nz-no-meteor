import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookmarksComponent from './bookmarks.component';
import OrgansationFactory from '../organisation/organisation.factory';

export default angular.module('bookmarks', [
  uiRouter,
])

.factory('Organisations', OrgansationFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('bookmarks', {
      url: '/bookmarks',
      component: 'bookmarks',
      resolve: {
        bookmarksData: (Organisations) => Organisations.getBookmarksData(),
      },
    });
})

.component('bookmarks', bookmarksComponent)

.name;
