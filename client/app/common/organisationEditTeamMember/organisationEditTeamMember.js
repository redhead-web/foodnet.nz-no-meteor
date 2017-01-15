import angular from 'angular';
import uiRouter from 'angular-ui-router';
import organisationEditTeamMemberComponent from './organisationEditTeamMember.component';

export default angular.module('organisationEditTeamMember', [
  uiRouter,
])

.component('organisationEditTeamMember', organisationEditTeamMemberComponent)

.name;
