import template from './organisationEditOutputs.html';
import controller from './organisationEditOutputs.controller';
import './organisationEditOutputs.scss';

const organisationEditOutputsComponent = {
  restrict: 'E',
  bindings: {
    modifyOutputs: '&',
    organisation: '<',
    outputs: '<',
  },
  template,
  controller,
};

export default organisationEditOutputsComponent;
