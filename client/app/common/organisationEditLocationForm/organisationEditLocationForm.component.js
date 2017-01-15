import template from './organisationEditLocationForm.html';
import controller from './organisationEditLocationForm.controller';
import './organisationEditLocationForm.scss';

const organisationEditLocationFormComponent = {
  restrict: 'E',
  bindings: {
    location: '<',
    modifyList: '&',
  },
  template,
  controller,
};

export default organisationEditLocationFormComponent;
