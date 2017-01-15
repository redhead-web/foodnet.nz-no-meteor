import angular from 'angular';
import uiRouter from 'angular-ui-router';
import qualificationAvatarComponent from './qualificationAvatar.component';

export default angular.module('qualificationAvatar', [
  uiRouter,
])

.component('qualificationAvatar', qualificationAvatarComponent)

.name;
