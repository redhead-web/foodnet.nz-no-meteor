import template from './organisationEditBasic.html';
import controller from './organisationEditBasic.controller';
import './organisationEditBasic.scss';

const organisationEditBasicComponent = {
  restrict: 'E',
  bindings: {
    organisation: '<',
    modifyOrganisation: '&',
  },
  template,
  controller,
};

export default organisationEditBasicComponent;
