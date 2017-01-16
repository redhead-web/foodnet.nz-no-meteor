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
      url: '/search?{q:string}{inputs:bool}{outputs:bool}',
      component: 'search',
      params: {
        q: { dynamic: true },
      },
    });
})

.component('search', searchComponent)
.run(($transitions, $rootScope) => {
  'ngInject';

  $transitions.onSuccess({ to: 'search' }, (transition) => {
    const from = transition.from().name;
    const fromParams = transition.params('from');
    $rootScope.lastState = { state: from, params: fromParams };
  });
})

.name;
