import angular from 'angular';
import uiRouter from 'angular-ui-router';
import iOAvatarComponent from './iOAvatar.component';

export default angular.module('iOAvatar', [
  uiRouter,
])

.component('iOAvatar', iOAvatarComponent)

.name;
