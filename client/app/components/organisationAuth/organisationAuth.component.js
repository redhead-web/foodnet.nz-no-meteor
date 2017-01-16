import template from './organisationAuth.html';
import controller from './organisationAuth.controller';
import './organisationAuth.scss';

const organisationAuthComponent = {
  restrict: 'E',
  bindings: { organisationsAuth: '<' },
  template,
  controller,
};

export default organisationAuthComponent;
