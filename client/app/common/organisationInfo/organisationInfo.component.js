import template from './organisationInfo.html';
import controller from './organisationInfo.controller';
import './organisationInfo.scss';

const organisationInfoComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
  },
  template,
  controller,
};

export default organisationInfoComponent;
