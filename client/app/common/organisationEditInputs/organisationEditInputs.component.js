import template from './organisationEditInputs.html';
import controller from './organisationEditInputs.controller';
import './organisationEditInputs.scss';

const organisationEditInputsComponent = {
  restrict: 'E',
  bindings: {
    modifyOrganisation: '&',
    organisation: '<',
    inputs: '<',
  },
  template,
  controller,
};

export default organisationEditInputsComponent;
