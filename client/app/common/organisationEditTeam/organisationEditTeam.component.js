import template from './organisationEditTeam.html';
import controller from './organisationEditTeam.controller';
import './organisationEditTeam.scss';

const organisationEditTeamComponent = {
  restrict: 'E',
  bindings: {
    modifyOrganisation: '&',
    organisation: '<',
    team: '<',
  },
  template,
  controller,
};

export default organisationEditTeamComponent;
