import angular from 'angular';
import uiRouter from 'angular-ui-router';
import skillAvatarComponent from './skillAvatar.component';

export default angular.module('skillAvatar', [
  uiRouter,
])

.component('skillAvatar', skillAvatarComponent)

.name;
