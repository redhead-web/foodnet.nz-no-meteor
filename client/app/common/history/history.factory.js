/* eslint-disable prefer-arrow-callback */
import angular from 'angular';

export default angular.module('ui.router.history', [
  'ui.router',
]).service('$history', function History($state) {
  'ngInject';

  const history = [];

  return {
    push(state, params) {
      history.push({ state, params });
    },
    all() {
      return history;
    },
    go(step) {
      // TODO:
      // (1) Determine # of states in stack with URLs, attempt to
      //    shell out to $window.history when possible
      // (2) Attempt to figure out some algorthim for reversing that,
      //     so you can also go forward

      const prev = this.previous(step || -1);
      return $state.go(prev.state, prev.params);
    },
    previous(step) {
      return history[history.length - Math.abs(step || 1)];
    },
    back() {
      return this.go(-1);
    },
  };
}).run(($history, $state, $rootScope) => {
  'ngInject';

  $rootScope.$on('$stateChangeSuccess', (event, to, toParams, from, fromParams) => {
    if (!from.abstract) {
      $history.push(from, fromParams);
    }
  });

  $history.push($state.current, $state.params);
})

.name;
