import template from './organisationTeam.html';
import controller from './organisationTeam.controller';
import './organisationTeam.scss';

const organisationTeamComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    team: '<',
    pageOwned: '<',
  },
  template,
  controller,
};

export default organisationTeamComponent;
