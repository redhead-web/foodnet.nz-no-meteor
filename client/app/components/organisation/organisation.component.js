import template from './organisation.html';
import controller from './organisation.controller';
import './organisation.scss';

const organisationComponent = {
  restrict: 'E',
  bindings: { organisationData: '<' },
  template,
  controller,
};

export default organisationComponent;
