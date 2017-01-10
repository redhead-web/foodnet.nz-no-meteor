import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationAvatarComponent from './organisationAvatar.component';

export default angular.module('organisationAvatar', [
  uiRouter,
])

.component('organisationAvatar', organisationAvatarComponent)

.name;
