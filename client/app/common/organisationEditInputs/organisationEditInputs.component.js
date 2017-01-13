import template from './organisationEditInputs.html';
import controller from './organisationEditInputs.controller';
import './organisationEditInputs.scss';

const organisationEditInputsComponent = {
  restrict: 'E',
  bindings: {
    modifyInputs: '&',
    organisation: '<',
    inputs: '<',
  },
  template,
  controller,
};

export default organisationEditInputsComponent;
