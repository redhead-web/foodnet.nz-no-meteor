import template from './organisationLocation.html';
import controller from './organisationLocation.controller';
import './organisationLocation.scss';

const organisationLocationComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationLocationComponent;
