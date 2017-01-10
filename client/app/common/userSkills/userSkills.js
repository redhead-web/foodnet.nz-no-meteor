import angular from 'angular';
import uiRouter from 'angular-ui-router';
import userSkillsComponent from './userSkills.component';

export default angular.module('userSkills', [
  uiRouter,
])

.component('userSkills', userSkillsComponent)

.name;
