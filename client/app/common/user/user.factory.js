/* eslint-disable no-param-reassign*/
import angular from 'angular';

const UserFactory = ($http, $rootScope) => {
  'ngInject';

  const getUser = () => $rootScope.currentUser;

  const logIn = (data, cb = angular.noop) => $http.post('/api/auth/login', data).then((response) => {
    if (response.data && response.data.id) {
      $rootScope.currentUser = response.data;
      cb(null, response.data);
    } else {
      cb(response, null);
    }
  });

  const logOut = (cb = angular.noop) => $http.get('/api/auth/logout').then(() => {
    $rootScope.currentUser = undefined;
    cb(null, 'logged out');
  }, (err) => {
    cb(err.data.message);
  });

  const isSignedIn = (cb = angular.noop) => $http.get('/api/auth/is-signed-in').then((response) => {
    if (response.data && response.data.id) {
      $rootScope.currentUser = response.data;
      cb(null, response.data);
    } else {
      cb(response, null);
    }
  });

  return { getUser, logIn, logOut, isSignedIn };
};

export default UserFactory;
