/* eslint-disable no-param-reassign */
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import searchComponent from './search.component';

export default angular.module('search', [
  uiRouter,
])

.config(($stateProvider) => {
  'ngInject';

  $stateProvider
    .state('search', {
      url: '/search/:searchFilter',
      component: 'search',
    });
})

.component('search', searchComponent)
.run(($transitions, $rootScope) => {
  'ngInject';

  $transitions.onSuccess({ to: 'search' }, (transition) => {
    console.log('success!');
    const from = transition.from().name;
    const fromParams = transition.params('from');
    $rootScope.lastState = { state: from, params: fromParams };
  });
})

.name;
