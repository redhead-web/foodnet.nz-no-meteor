import template from './organisationEditBasic.html';
import controller from './organisationEditBasic.controller';
import './organisationEditBasic.scss';

const organisationEditBasicComponent = {
  restrict: 'E',
  bindings: {
    organisation: '=',
  },
  template,
  controller,
};

export default organisationEditBasicComponent;
