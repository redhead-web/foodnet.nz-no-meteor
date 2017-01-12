import template from './organisationEdit.html';
import controller from './organisationEdit.controller';
import './organisationEdit.scss';

const organisationEditComponent = {
  restrict: 'E',
  bindings: { organisationData: '<' },
  template,
  controller,
};

export default organisationEditComponent;
