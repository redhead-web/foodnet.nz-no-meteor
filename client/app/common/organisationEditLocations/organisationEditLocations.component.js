import template from './organisationEditLocations.html';
import controller from './organisationEditLocations.controller';
import './organisationEditLocations.scss';

const organisationEditLocationsComponent = {
  restrict: 'E',
  bindings: {
    organisation: '=',
  },
  template,
  controller,
};

export default organisationEditLocationsComponent;
