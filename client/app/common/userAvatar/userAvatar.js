import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userAvatarComponent from './userAvatar.component';

export default angular.module('userAvatar', [
  uiRouter,
])

.component('userAvatar', userAvatarComponent)

.name;
