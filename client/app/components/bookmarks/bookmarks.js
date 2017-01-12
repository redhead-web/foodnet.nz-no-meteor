import angular from 'angular';
import uiRouter from 'angular-ui-router';
import bookmarksComponent from './bookmarks.component';
import BookmarksFactory from './bookmarks.factory';

export default angular.module('bookmarks', [
  uiRouter,
])

.factory('Bookmarks', BookmarksFactory)

.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('bookmarks', {
      url: '/bookmarks',
      component: 'bookmarks',
      resolve: {
        bookmarksData: (Bookmarks) => Bookmarks.getBookmarksData(),
      },
    });
})

.component('bookmarks', bookmarksComponent)

.name;
