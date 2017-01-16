import template from './organisationEditTeamMember.html';
import controller from './organisationEditTeamMember.controller';
import './organisationEditTeamMember.scss';

const organisationEditTeamMemberComponent = {
  restrict: 'E',
  bindings: {
    teamMember: '<',
    index: '<',
    organisation: '<',
    modifyTeamMember: '&',
  },
  template,
  controller,
};

export default organisationEditTeamMemberComponent;
