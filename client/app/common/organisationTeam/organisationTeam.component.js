import template from './organisationTeam.html';
import controller from './organisationTeam.controller';
import './organisationTeam.scss';

const organisationTeamComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    team: '<',
  },
  template,
  controller,
};

export default organisationTeamComponent;
